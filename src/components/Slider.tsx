import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SliderProps = {
  size?: number;
  initialPos?: number;
  items: JSX.Element[];
};

type SliderState = {
  pos: number;
  transitioningRight: boolean;
  transitioningLeft: boolean;
};

const Slider: React.FC<SliderProps> = props => {
  const [state, setState] = useState<SliderState>({
    pos:
      !props.initialPos || props.initialPos > props.items.length - 1
        ? 0
        : props.initialPos,
    transitioningRight: false,
    transitioningLeft: false
  });

  const { items } = props;
  const { pos, transitioningRight, transitioningLeft } = state;

  const size =
    !props.size || props.size > items.length
      ? Math.floor(items.length / 2)
      : props.size;

  const showItems = [
    items[pos > 0 ? pos - 1 : items.length - 1],
    ...items.slice(pos, pos + size + 1),
    ...(pos + size + 1 > items.length
      ? items.slice(0, pos + size + 1 - items.length)
      : [])
  ];

  return (
    <div
      data-testid="slider"
      className={`slider ${
        transitioningRight ? "slider-transitioning-right" : ""
      } ${transitioningLeft ? "slider-transitioning-left" : ""}`}
    >
      <div className="slider-arrows">
        <span
          className="slider-arrows-left"
          onClick={() => {
            setState({
              ...state,
              transitioningRight: true
            });
            setTimeout(() => {
              setState({
                ...state,
                pos: pos > 0 ? pos - 1 : items.length - 1,
                transitioningRight: false
              });
            }, 500);
          }}
        >
          {items.length > size ? (
            <FaArrowLeft data-testid="slider-left" />
          ) : null}
        </span>
        <span
          className="slider-arrows-right"
          onClick={() => {
            setState({
              ...state,
              transitioningLeft: true
            });
            setTimeout(() => {
              setState({
                ...state,
                pos: pos < items.length - 1 ? pos + 1 : 0,
                transitioningLeft: false
              });
            }, 500);
          }}
        >
          {items.length > size ? (
            <FaArrowRight data-testid="slider-right" />
          ) : null}
        </span>
      </div>
      <div className="row">
        <div className="slider-center">
          {showItems.map((item, i) => {
            return (
              <div
                className={`col-1-of-${size} ${
                  i === showItems.length - 2 ? "col-without-margin" : ""
                }`}
                key={`item-${i}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
