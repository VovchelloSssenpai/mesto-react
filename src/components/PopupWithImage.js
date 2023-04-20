
function PopupWithImage(props) {
    const className = `popup popup_image ${props.isOpen ? "popup_opened" : ""}`

    return (
        <div className= {className} >
        <div className="popup-image__body">
             <img src={props.card.link} className="popup-image__image" alt="Увеличенное изображение"/>
             <p className="popup-image__text"></p>
             <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        </div>
    </div>
    );
  }
  
  export default PopupWithImage;


