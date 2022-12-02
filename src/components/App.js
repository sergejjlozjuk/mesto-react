import React from 'react'
import '../pages/index.css'
import { api } from '../utils/Api'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import { currentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
function App() {
  const [isEditProfilePopupOpen, setIsEditProfile] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlace] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatar] = React.useState(false)
  const [isImagePopupOpen, setIsImage] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  })
  const [currentUser, setCurrenUser] = React.useState(false)
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
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) =>
        setCurrenUser({
          ...currentUser,
          name: res.name,
          about: res.about,
        }),
      )
      .catch((err) => console.log(err))
    closeAllPopups()
  }
  function handleUpdateAvatar (data) {
    api.editAvatar(data)
    .then(userData => setCurrenUser(userData))
    .catch(err => console.log(err))
    closeAllPopups()
  }
  const isOpen =
    isAddPlacePopupOpen ||
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isImagePopupOpen
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => setCurrenUser(res))
      .catch((err) => console.log(err))
  }, [])
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
    <currentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleEditPlaceClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        formName="delete-form"
        name="confirm-delete"
        title="Вы уверены?"
        buttonText={'Да'}
        isOpen={false}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseClickOverlay}
        onUpdateUser={handleUpdateUser}
      ></EditProfilePopup>
      <PopupWithForm
        formName="card-form"
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
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseClickOverlay}
        onUpdateAvatar={handleUpdateAvatar}
      ></EditAvatarPopup>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={handleCloseClickOverlay}
      />
      <Footer />
    </currentUserContext.Provider>
  )
}

export default App
