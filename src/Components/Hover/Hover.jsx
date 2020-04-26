import React, { useState, useMemo} from 'react'
import {Card} from "../../Elements"
import { useHover } from '../../Hooks/useHover'

const Hover = ({ imgSrc }) => {

  const [isHovered, bind] = useHover();
  console.log(isHovered)

  return (
    <Card {...bind} style={{ background: "var(--black)" }}>
    <h3>
      {isHovered ? "Err' day I'm Hoverin" : "Hover Over This Card"}
    </h3>
    <img alt="Card Description" src={imgSrc} />
  </Card>
  )
}

export default Hover
