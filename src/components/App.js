import './index.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage';
import { useState } from 'react';



function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
const [selectedCard, setSelectedCard] = useState({});
const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);


function handleAvatarEditClick(){
  setIsEditAvatarPopupOpen(true);  
}
function handleProfileEditClick(){
  setIsEditProfilePopupOpen(true)
}
function handleCardAddClick(){
  setIsAddCardPopupOpen(true)
}
function handleCardClick(card){
  setSelectedCard(card)
  setIsImagePopupOpen(true);
}


const closeAllPopups = function(){
  setIsEditAvatarPopupOpen(false);  
  setIsEditProfilePopupOpen(false)
  setIsAddCardPopupOpen(false)
  setIsImagePopupOpen(false)
}


  return (
    <div className="App">
      <div className='root'>
      <div className='page'>
      <Header />
      <Main onEditAvatar={handleAvatarEditClick} onEditProfile={handleProfileEditClick} onAddPlace={handleCardAddClick} onCardClick={handleCardClick}  />
      <Footer />
      <PopupWithForm title='Редактировать профиль' text="Сохранить" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                   <label className="popup__label">
                     <input type="text" className="popup__input popup__input_el_name" name="name" placeholder="Имя"
                         required="required" minLength="2" maxLength="40" id="name-input" />
                     <span className="popup__input-error name-input-error"></span>
                 </label>
                 <label className="popup__label">
                     <input type="text" className="popup__input popup__input_el_profession" name="profession"
                         placeholder="О себе" required="required" minLength="2" maxLength="200"
                         id="profession-input"/>
                     <span className="popup__input-error profession-input-error"></span>
                 </label>
      </PopupWithForm>

      <PopupWithForm title="Новое Место" text="Создать" name="add" isOpen={isAddCardPopupOpen} onClose={closeAllPopups}>
                   <label className="popup__label">
                     <input type="text" className="popup__input popup__input_el_picture" name="name"
                         placeholder="Название" required="required" id="picture-input" minLength="2" maxLength="30"/>
                     <span className="popup__input-error picture-input-error"></span>
                 </label>
                 <label className="popup__label">
                     <input type="url" className="popup__input popup__input_el_link" name="link"
                         placeholder="Ссылка на картинку" required="required" id="link-input"/>
                     <span className="popup__input-error link-input-error"></span>
                 </label>
      </PopupWithForm>

      <PopupWithForm title="Обновить Аватар" text="Сохранить" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                   <label className="popup__label">
                     <input type="url" className="popup__input popup__input_el_link" name="link"
                         placeholder="Ссылка на Аватар" required="required" id="avatar-input"/>
                     <span className="popup__input-error avatar-input-error"></span>
                   </label>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" text="Удалить" name="delete" onClose={closeAllPopups}>
      </PopupWithForm>
      <PopupWithImage card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} ></PopupWithImage>
      </div>
      </div>
    </div>
  );
}

export default App;
