import React, { Component } from "react";
import { Room, RoomFilter } from "./types/room";
import fetch from "./utils/mockFetch";

export type RoomProviderState = {
  rooms: Room[];
  featuredRooms: Room[];
  loading: boolean;
};

export type GetRooms = (filter: RoomFilter) => Promise<Room[]>;

export interface RoomContextProps {
  loading: boolean;
  getRoom: (slug: string) => Room | undefined;
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
  getRoom: () => undefined,
  filterRooms: () => Promise.resolve([]),
  featuredRooms: [],
  rooms: [],
});

class RoomProvider extends Component<{}, RoomProviderState> {
  state = InitialState;

  getRoom = (slug: string) => {
    const room = this.state.rooms.find(room => room.slug === slug);
    return room;
  };

  getRooms = (filter: RoomFilter = {}) => {
    this.setState({
      loading: true
    })
    return fetch<Room[]>(`/rooms?filter=${JSON.stringify(filter)}`).then(
      response => response.json()
    ).then(rooms => {
      this.setState({
        loading: false
      })
      return rooms
    });
  };

  filterRooms = (filter: RoomFilter = {}) => {
    return this.getRooms(filter).then(rooms => {
      this.setState({
        rooms
      })
      return rooms;
    })
  }

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

