import React from "react";

type HeroProps = {
  children?: React.ReactNode;
  hero?: "hero-default" | "hero-rooms";
};

const Hero: React.FC<HeroProps> = ({ children, hero = "hero-default" }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
