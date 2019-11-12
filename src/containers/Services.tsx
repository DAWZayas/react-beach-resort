import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import Services from "../components/Services";
import { FetchService, Service } from "../types/service";
import fetch from "../utils/mockFetch";

const ServicesContainer = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
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
        setServices((services as unknown[]) as Service[]);
      });
  });

  return <Services services={services} />;
};

export default ServicesContainer;
