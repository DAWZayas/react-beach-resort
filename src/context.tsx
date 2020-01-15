import React, { Component } from "react";
import { Room, RoomFilter } from "./types/room";
import mfetch from "./utils/mockFetch";

export type RoomProviderState = {
  rooms: Room[];
  featuredRooms: Room[];
  loading: boolean;
};

export type GetRooms = (filter: RoomFilter) => Promise<Room[]>;

export interface RoomContextProps {
  loading: boolean;
  getRoom: (slug: string) => Promise<Room | undefined>;
  filterRooms: GetRooms;
  featuredRooms: Room[];
  rooms: Room[];
}

const InitialState: RoomProviderState = {
  rooms: [],
  featuredRooms: [],
  loading: false
};

const RoomContext = React.createContext<RoomContextProps>({
  loading: false,
  getRoom: async () => undefined,
  filterRooms: () => Promise.resolve([]),
  featuredRooms: [],
  rooms: []
});

class RoomProvider extends Component<{}, RoomProviderState> {
  state = InitialState;

  getRoom = async (slug: string) => {
    const room = this.state.rooms.find(room => room.slug === slug);
    if (room) {
      return room;
    }
    const rooms = await mfetch<Room[]>(
      `/rooms?filter=${JSON.stringify({ slug })}`
    ).then(response => response.json());
    return rooms[0];
  };

  getRooms = (filter: RoomFilter = {}) => {
    return fetch(
      "https://react-beach-resort2.netlify.com/.netlify/functions/rooms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filter)
      }
    )
      .then(response => {
        return response.json();
      })
      .then(rooms => {
        this.setState({
          loading: false
        });
        return rooms;
      });
  };

  filterRooms = (filter: RoomFilter = {}) => {
    return this.getRooms(filter).then(rooms => {
      this.setState({
        rooms
      });
      return rooms;
    });
  };

  componentDidMount() {
    this.getRooms({ featured: true }).then(rooms =>
      this.setState({
        featuredRooms: rooms
      })
    );
  }

  render() {
    const { loading, featuredRooms, rooms } = this.state;
    return (
      <RoomContext.Provider
        value={{
          loading,
          getRoom: this.getRoom,
          filterRooms: this.filterRooms,
          featuredRooms,
          rooms
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
