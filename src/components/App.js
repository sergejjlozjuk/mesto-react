import React from 'react'
import '../pages/index.css'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
function App() {
  const [isEditProfilePopupOpen, setIsEditProfile] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlace] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatar] = React.useState(false)
  const [isImagePopupOpen, setIsImage] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  })
  function handleEditPlaceClick() {
    setIsAddPlace(!isAddPlacePopupOpen)
  }
  function handleEditAvatarClick() {
    setIsEditAvatar(!isEditAvatarPopupOpen)
  }
  function handleEditProfileClick() {
    setIsEditProfile(!isEditProfilePopupOpen)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImage(true)
  }
  function closeAllPopups() {
    setIsAddPlace(false)
    setIsEditAvatar(false)
    setIsEditProfile(false)
    setIsImage(false)
    // setSelectedCard({
    //   name: '',
    //   link: '',
    // })
  }
  function handleCloseClickOverlay(e) {
    const elem = e.target.classList
    if (elem.contains('popup__close') || elem.contains('popup_active')) {
      closeAllPopups()
    }
  }
  const isOpen =
    isAddPlacePopupOpen ||
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isImagePopupOpen
  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape)
    }
    return () => {
      document.removeEventListener('keydown', closeByEscape)
    }
  }, [isOpen])
  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditPlaceClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        formName='delete-form'
        name="confirm-delete"
        title="Вы уверены?"
        buttonText={'Да'}
        isOpen={false}
      />
      <PopupWithForm
        name="user"
        formName='user-form'
        title="Редактировать профиль"
        buttonText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseClickOverlay}
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
        />
        <span className="form__error form__error_type_info"></span>
      </PopupWithForm>
      <PopupWithForm
        formName='card-form'
        name="card"
        title="Новое место"
        buttonText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={handleCloseClickOverlay}
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
        />
        <span className="form__error form__error_type_title"></span>
        <input
          id="_type_link"
          name="link"
          className="form__input form__input_type_info"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="form__error form__error_type_link"></span>
      </PopupWithForm>
      <PopupWithForm
        formName='avatar-form'
        name="edit-avatar"
        title="Обновить аватар"
        buttonText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseClickOverlay}
      >
        <input
          className="form__input"
          id="_type_link-avatar"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__error form__error_type_link-avatar"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={handleCloseClickOverlay}
      />
      <Footer />
    </>
  )
}

export default App
