import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SliderProps = {
  size?: number;
  initialPos?: number;
  items: { id: string | number; item: JSX.Element }[];
};

type SliderState = {
  pos: number;
};

export default class Slider extends Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);

    this.size =
      !props.size || props.size > props.items.length
        ? Math.floor(props.items.length / 2)
        : props.size;

    this.state = {
      pos:
        !props.initialPos || props.initialPos > props.items.length - 1
          ? 0
          : props.initialPos
    };
  }
  size: number = 0;

  render() {
    const { items } = this.props;
    const size =
      !this.props.size || this.props.size > items.length
        ? Math.floor(items.length / 2)
        : this.props.size;
    const { pos } = this.state;

    const showItems = items
      .slice(pos, pos + size)
      .concat(
        pos + size > items.length
          ? items.slice(0, pos + size - items.length)
          : []
      );

    return (
      <div className="row" style={{ position: "relative" }}>
        <div className="slider-center">
          <div className="slider-arrows">
            <span
              className="slider-arrows-left"
              onClick={() =>
                this.setState({
                  pos: pos < items.length - 1 ? pos + 1 : 0
                })
              }
            >
              <FaArrowLeft />
            </span>
            <span
              className="slider-arrows-right"
              onClick={() =>
                this.setState({
                  pos: pos > 0 ? pos - 1 : items.length - 1
                })
              }
            >
              <FaArrowRight />
            </span>
          </div>
          {showItems.map(({ item, id }) => {
            return (
              <div className={`col-1-of-${size}`} key={`item-${id}`}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
