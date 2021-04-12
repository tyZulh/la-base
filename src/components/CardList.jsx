import React from 'react';

import CardMember from './CardMember'

import './CardList.css'

const members = [
  {
    name:'Sarah',
    img:'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/542073774-1280x720.jpg?itok=ZxX8vKs5'
  },
  {
    name:'Theo',
    img:'https://www.fondationbiodiversite.fr/wp-content/uploads/2019/03/FRB-Rat-taupe-nu.jpg'
  },
  {
    name:'Thomas',
    img:'https://i.imgflip.com/26nw0h.jpg'
  }
]

function CardList() {
  return(
    <div className="CardList">
            {members.map(member => {
        return (
          <CardMember name={member.name} img={member.img} />
        )
      })}
    </div>
  )
}

export default CardList;
