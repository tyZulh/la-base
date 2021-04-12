import React, { useState } from 'react';

import "./CardMember.css"

function CardMember({name, img}) {

  const [likes, setLikes] = useState(0)

  const addLikes = () => {
    setLikes( likes + 1)
  }

  return (
    <section className="CardMember" >
      <h3>{name} likes: {likes} </h3>
      <img className="CardMember-img" src={img} alt={name}/>
      <button onClick={addLikes}>{`<3`}</button>
    </section>
  )
}

export default CardMember;

