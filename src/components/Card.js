import React from "react";


function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      }

    return (
  
(<li className="elements__list-item" key={props.card._id} >
            <img src={props.card.link} className="elements__image" alt={props.card.name} onClick={handleClick} />
            <button className="element__delete" type="button"></button>
            <div className="elements__content">
                <h2 className="elements__text">{props.card.name}</h2>
                <div className="elements__wrapper">
                    <button className="elements__like" type="button"></button>
                    <span className="elements__like-number">{props.card.likes.length}</span>
                </div>
            </div>
        </li>)

    );
  }
  
  export default Card;