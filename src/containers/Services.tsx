import React from "react";
import * as Icons from "react-icons/fa";
import Services from "../components/Services";
import { FetchService } from "../types/service";
import fetch from "../utils/mockFetch";

class ServicesContainer extends React.Component {
  state = {
    services: []
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    fetch<FetchService[]>("/services")
      .then(response => response.json())
      .then(services =>
        services.map(({ iconName, ...rest }) => {
          // @ts-ignore
          const Icon = Icons[iconName];
          return {
            icon: <Icon />,
            ...rest
          };
        })
      )
      .then(services => {
        if (this._isMounted) {
          this.setState({
            services
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  public render() {
    const { services } = this.state;
    return <Services services={services} />;
  }
}

export default ServicesContainer;
