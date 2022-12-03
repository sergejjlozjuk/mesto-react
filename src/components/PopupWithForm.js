import React from 'react'

export default function PopupWithForm({
  isOpen,
  name,
  onClose,
  title,
  buttonText,
  formName,
  onSubmit,
  children
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_active'}`}
      onClick={onClose}
    >
      <div className="popup__container">
        <button className="popup__close" type="button"></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form form_user" name={formName} onSubmit={onSubmit}>
        {children}
          <button className="form__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}
