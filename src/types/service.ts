import { JSXElement } from "@babel/types";

type IService = {
  id: number;
  title: string;
  info: string;
};

export type Service = IService & {
  icon: JSXElement;
};

export type FetchService = IService & {
  iconName: string;
};
