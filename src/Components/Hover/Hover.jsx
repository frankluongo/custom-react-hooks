import React from "react";
import { Card } from "../../Elements";
import { useHover, useMeasure } from "../../Hooks";

const Hover = ({ imgSrc }) => {
  const [isHovered, bind] = useHover();
  const [{ ref }, bounds] = useMeasure();
  console.log(ref, bounds);

  return (
    <Card {...bind} style={{ background: "var(--black)" }} ref={ref}>
      <h3>{isHovered ? "Err' day I'm Hoverin" : "Hover Over This Card"}</h3>
      <img alt="Card Description" src={imgSrc} />
    </Card>
  );
};

export default Hover;
