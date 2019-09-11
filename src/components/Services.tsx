import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
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
    id: 3,
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, non?"
  }
];

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="row">
          <div className="services-center">
            {services.map(item => {
              return (
                <div className="col-1-of-4">
                  <article key={`item-${item.id}`} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
