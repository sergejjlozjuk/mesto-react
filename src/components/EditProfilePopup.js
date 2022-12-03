import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
    const[name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(currentUserContext)
    React.useEffect(() =>{
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])
    function handleSubmit (e) {
        e.preventDefault()
        onUpdateUser({
            name,
            about: description
        })
        e.target.reset()
    }
    return (
        <PopupWithForm
        name="user"
        formName="user-form"
        title="Редактировать профиль"
        buttonText={'Сохранить'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input
          id="_type_name"
          className="form__input form__input_type_name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
          onChange={e => setName(e.target.value)}
        />
        <span className="form__error form__error_type_name"></span>
        <input
          id="_type_info"
          className="form__input form__input_type_info"
          name="info"
          type="text"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          required
          onChange={e => setDescription(e.target.value)}
        />
        <span className="form__error form__error_type_info"></span>
      </PopupWithForm>
    )
}