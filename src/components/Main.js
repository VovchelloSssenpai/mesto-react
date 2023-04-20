import { useState, useEffect } from 'react';
import api from '../utils/Api'
import Card from './Card'

function Main(props){

    const [userName, setUserName] = useState('');
    const [userDescription , setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [card, setCard] = useState([])

// GETTING PROFILE DATA
    useEffect(() => {
        api.getInitialProfileData()
          .then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch(error => console.error(error));
      }, []);

// GETTING INITIAL IMAGES DATA
useEffect(()=>{
    api.getInitialImages().then(data => {
        setCard(data);
    })
}, [])

    return (  <main className="main">
    <section className="profile">
        <div className="profile__avatar-wrap">
            <img src={userAvatar} alt="Профильная фотография" className="profile__avatar"/>
            <div className="profile__avatar-edit-wrap">
                <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
            </div>
        </div>
        <div className="profile__info">
            <div className="profile__info-wrapper">
                <h1 className="profile__user-name">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
                </button>
            </div>
            <p className="profile__user-profession">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>

    </section>
    <section className="elements">
        <ul className="elements__list">
            {card.map((data, i) => {

return    <Card card={data} key={data._id} onCardClick = {props.onCardClick} />
            })}        
        </ul>
    </section>
</main>)
}

  
export default Main;