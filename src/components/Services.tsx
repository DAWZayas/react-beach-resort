import React, { Component } from "react";
import { Service } from "../types/service";
import ServiceComponent, { ServicePlaceholder } from "./Service";
import Slider from "./Slider";
import Title from "./Title";

const size = 4;

const getItems = (services: Service[]) =>
  services.length
    ? services.map(service => <ServiceComponent service={service} />)
    : Array.from(new Array(size)).map(ServicePlaceholder);

export default class Services extends Component<{
  services: Service[];
}> {
  render() {
    const { services } = this.props;
    return (
      <section className="services">
        <Title title="services" />
        <Slider size={size} items={getItems(services)} />
      </section>
    );
  }
}
