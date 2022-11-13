/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"

export default function ImagePopup (props) {
    return (
    <div className={`popup popup_type_open-image  ${props.isOpen && 'popup_active'}`} onClick={props.onClose}>
        <div className="popup__open-image">
            <button className="popup__close popup__close_type_card" type='button'></button>
            <img className="popup__main-image" alt='картинка' 
            src={props.card && props.card.link}
            />
            <h2 className="popup__image-title">{props.isOpen && props.card.name}</h2>
        </div>
    </div>
    )
}