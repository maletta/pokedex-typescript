import React, { useRef, useLayoutEffect, useState, LabelHTMLAttributes } from "react";

import { Container, Input, Slider, Track, Range, Thumb } from "./styles";

interface RangeInputProps {
  min: number;
  max: number;
}

type Percent = {
  left: number;
  right: number;
};

type ThumbValue = {
  left: number;
  right: number;
};

const RangeInput: React.FC<RangeInputProps> = ({ min, max }) => {
  const spaceBetweenInput = Math.round(max * 0.05);
  const inputLeft = useRef<HTMLInputElement>(null);
  const inputRight = useRef<HTMLInputElement>(null);
  // const thumbLeft = useRef<HTMLLabelElement>(null); // usado para estilização
  // const thumbRight = useRef<HTMLLabelElement>(null); // usado para estilização
  const [percent, setPercent] = useState<Percent>({
    left: 0,
    right: 0,
  });

  const [thumb, setThumb] = useState<ThumbValue>({
    left: min,
    right: max,
  });

  function setLeftValue() {
    const minLeft = inputLeft.current?.min || "0";
    const maxLeft = inputLeft.current?.max || "0";
    const inputLeftValue = inputLeft.current?.value || "0";
    const inputRightValue = inputRight.current?.value || "0";

    if (inputLeft.current?.value && inputRight.current?.value) {
      const result = `${Math.min(parseInt(inputLeftValue, 10), parseInt(inputRightValue, 10) - spaceBetweenInput)}`;
      // console.log("result ", result);
      // inputLeft.current.value = `${parseInt(inputLeftValue) + 1}`;

      const percentLeft = ((parseInt(result, 10) - parseInt(minLeft, 10)) / (parseInt(maxLeft, 10) - parseInt(minLeft, 10))) * 100;
      // console.log("result, min, max ", parseInt(result), parseInt(min), parseInt(max));
      // console.log("(parseInt(result) - parseInt(min))", parseInt(result) - parseInt(min));
      // console.log("(parseInt(max) - parseInt(min))", parseInt(max) - parseInt(min));
      // console.log("divisao ", (parseInt(result) - parseInt(min)) / (parseInt(max) - parseInt(min)));

      // console.log("percent left = ", percentLeft);

      setPercent(({ right }) => ({ left: percentLeft, right }));
      setThumb(({ right }) => ({ left: parseInt(result, 10), right }));
      // inputLeft.current.value = `${result}`;
    }

    // console.log(min, max, inputLeftValue, inputRightValue);
  }

  function setRightValue() {
    const minRight = inputRight.current?.min || "0";
    const maxRight = inputRight.current?.max || "0";
    const inputRightValue = inputRight.current?.value || "0";
    const inputLeftValue = inputLeft.current?.value || "0";

    if (inputRight.current?.value && inputLeft.current?.value) {
      const result = `${Math.max(parseInt(inputRightValue, 10), parseInt(inputLeftValue, 10) + spaceBetweenInput)}`;
      const percentRight = ((parseInt(result, 10) - parseInt(minRight, 10)) / (parseInt(maxRight, 10) - parseInt(minRight, 10))) * 100;

      // console.log("result, min, max ", parseInt(result), parseInt(min), parseInt(max));
      // console.log("(parseInt(result) - parseInt(min))", parseInt(result) - parseInt(min));
      // console.log("(parseInt(max) - parseInt(min))", parseInt(max) - parseInt(min));
      // console.log("divisao ", (parseInt(result) - parseInt(min)) / (parseInt(max) - parseInt(min)));
      // console.log("percent right = ", percentRight);

      // console.log(" setPercent right ", 100 - percentRight);
      // console.log(" thumb right ", parseInt(result));

      setPercent(({ left }) => ({ left, right: 100 - percentRight }));
      setThumb(({ left }) => ({ left, right: parseInt(result, 10) }));
      // inputRight.current.value = `${parseInt(result)}`;
    }
  }

  // funções para efeito no thumb
  // function onMouseOver(e: React.MouseEvent<HTMLInputElement>) {
  //   const direction = e.currentTarget.getAttribute("data-direction");
  //   if (direction === "left") thumbLeft.current?.classList.add("hover");
  //   else thumbRight.current?.classList.add("hover");
  // }

  // function onMouseOut(e: React.MouseEvent<HTMLInputElement>) {
  //   const direction = e.currentTarget.getAttribute("data-direction");
  //   if (direction === "left") thumbLeft.current?.classList.remove("hover");
  //   else thumbRight.current?.classList.remove("hover");
  // }

  // function onMouseUp(e: React.MouseEvent<HTMLInputElement>) {
  //   const direction = e.currentTarget.getAttribute("data-direction");
  //   if (direction === "left") thumbLeft.current?.classList.remove("active");
  //   else thumbRight.current?.classList.remove("active");
  // }

  // function onMouseDown(e: React.MouseEvent<HTMLInputElement>) {
  //   const direction = e.currentTarget.getAttribute("data-direction");
  //   if (direction === "left") thumbLeft.current?.classList.add("active");
  //   else thumbRight.current?.classList.add("active");
  // }

  useLayoutEffect(() => {
    // inputLeft.current?.addEventListener("input", setLeftValue);
    // inputRight.current?.addEventListener("input", setRightValue);
    setLeftValue();
    setRightValue();

    // return () => {
    //   inputLeft.current?.removeEventListener("input", setLeftValue);
    //   inputRight.current?.removeEventListener("input", setRightValue);
    // };
  }, [min, max]);

  return (
    <Container>
      <Input
        ref={inputLeft}
        type="range"
        id={"inputLeft"}
        min={min}
        max={max}
        // step={1}
        value={thumb.left}
        data-direction={"left"}
        onInput={setLeftValue}
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
        // onMouseUp={onMouseUp}
        // onMouseDown={onMouseDown}
      />
      <Input
        ref={inputRight}
        type="range"
        id={"inputRight"}
        min={min}
        max={max}
        // step={1}
        value={thumb.right}
        data-direction={"right"}
        onInput={setRightValue}
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
        // onMouseUp={onMouseUp}
        // onMouseDown={onMouseDown}
      />

      <Slider>
        <Track />
        <Range left={percent.left} right={percent.right} />
        <Thumb
          // ref={thumbLeft}
          htmlFor={"inputLeft"}
          direction={"left"}
          percent={percent.left}
          value={thumb.left}
        />
        <Thumb
          // ref={thumbRight}
          htmlFor={"inputRight"}
          direction={"right"}
          percent={percent.right}
          value={thumb.right}
        />
      </Slider>
    </Container>
  );
};

export default RangeInput;
