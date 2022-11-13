import React from "react"

export default function PopupWithForm (props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_active'}`} onClick={props.onClose}>
        <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
        </div>
        </div>
    )
}
