import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = React.useState()
  const [link, setLink] = React.useState()

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({ title, link })
    e.target.reset()
  }
  return (
    <PopupWithForm
      formName="card-form"
      name="card"
      title="Новое место"
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="_type_title"
        name="name"
        className="form__input form__input_type_name"
        placeholder="Название"
        type="text"
        minLength="2"
        maxLength="30"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="form__error form__error_type_title"></span>
      <input
        id="_type_link"
        name="link"
        className="form__input form__input_type_info"
        placeholder="Ссылка на картинку"
        type="url"
        required
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="form__error form__error_type_link"></span>
    </PopupWithForm>
  )
}
