import React, { Component } from "react";
import {
  FaBeer,
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaTaxi,
  FaUmbrellaBeach,
  FaWheelchair
} from "react-icons/fa";
import Slider from "./Slider";
import Title from "./Title";

const services = [
  {
    id: 1,
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
  },
  {
    id: 2,
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, provident."
  },
  {
    id: 3,
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus!"
  },
  {
    id: 4,
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, non?"
  },
  {
    id: 5,
    icon: <FaTaxi />,
    title: "Airport transportation",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing. Inventore, minima."
  },
  {
    id: 6,
    icon: <FaUmbrellaBeach />,
    title: "Hammock Service",
    info:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, tempore?"
  },
  {
    id: 7,
    icon: <FaWheelchair />,
    title: "Adapted accesses",
    info:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, tempore?"
  }
];

const items = services.map(service => (
  <article key={service.id} className="service">
    <span>{service.icon}</span>
    <h6>{service.title}</h6>
    <p>{service.info}</p>
  </article>
));

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <Slider size={4} items={items} />
      </section>
    );
  }
}
