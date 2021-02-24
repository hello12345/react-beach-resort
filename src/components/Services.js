import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: `The Oxford Dictionaries define cocktail as 
            "An alcoholic drink consisting of a spirit "`,
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: `The Oxford Dictionaries define cocktail as 
            "An alcoholic drink consisting of a spirit "`,
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: `The Oxford Dictionaries define cocktail as 
            "An alcoholic drink consisting of a spirit "`,
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: `The Oxford Dictionaries define cocktail as 
            "An alcoholic drink consisting of a spirit "`,
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <div className="service">
                <span>{item.icon}</span>
                </div>
                <span>
                  <h6>{item.title}</h6>
                </span>
                <span>
                  <p>{item.info}</p>
                </span>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
