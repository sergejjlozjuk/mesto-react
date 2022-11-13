
import React from 'react';
import '../pages/index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
function App() {
    const [isEditProfilePopupOpen, onEditProfile] = React.useState(false);
    const [isAddPlacePopupOpen, onAddPlace] = React.useState(false);
    const [isEditAvatarPopupOpen, onEditAvatar] = React.useState(false);
    const [isImagePopupOpen, onImage] = React.useState(false);
    const [selectedCard, handleCardClick] = React.useState()
function handleEditPlaceClick () {
    onAddPlace(!isAddPlacePopupOpen)
}
function handleEditAvatarClick () {
    onEditAvatar(!isEditAvatarPopupOpen)
}
function handleEditProfileClick () {
    onEditProfile(!isEditProfilePopupOpen) 
}
React.useEffect(() => {
    document.addEventListener('keydown', (e) =>closeAllPopups(e))
    return (
        document.removeEventListener('keydown', closeAllPopups)
    )
})
function onCardClick (card) {
    handleCardClick(card)
    onImage(true)
}
function closeAllPopups (e) {
    const elem = e.target.classList
    if (elem.contains('popup__close') || elem.contains('popup_active')) {
        onAddPlace(false);
        onEditAvatar(false);
        onEditProfile(false);
        onImage(false);
    } if (e.key === 'Escape') {
        onAddPlace(false);
        onEditAvatar(false);
        onEditProfile(false);
        onImage(false);
    }
}
  return (
    <>
<Header />
<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleEditPlaceClick} onCardClick={onCardClick}/>
<PopupWithForm
name='confirm-delete'
title='Вы уверены?'
children={<button className="popup__button-confirm" type='button'>Да</button>}
isOpen={false} />
<PopupWithForm
name='user'
title='Редактировать профиль'
children={
    <form className="form form_user" name="user-form" noValidate>
        <input id="_type_name" className="form__input form__input_type_name" name="name" type="text" minLength="2" maxLength="40" required />
        <span className="form__error form__error_type_name"></span>
        <input id="_type_info" className="form__input form__input_type_info" name="info" type="text" minLength="2" maxLength="200" required />
        <span className="form__error form__error_type_info"></span>
        <button className="form__submit" type='submit'>Сохранить</button>
    </form>
}
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopups} />
<PopupWithForm
name='card'
title='Новое место'
children={
    <form className="form form_type_card" name="card-form" noValidate>
        <input id="_type_title" name="name" className="form__input form__input_type_name" placeholder="Название" type="text" minLength="2" maxLength="30" required />
        <span className="form__error form__error_type_title"></span>
        <input id="_type_link" name="link" className="form__input form__input_type_info" placeholder="Ссылка на картинку" type="url" required />
        <span className="form__error form__error_type_link"></span>
        <button className="form__submit" type='submit'>Создать</button>
    </form>
}
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopups} />
<PopupWithForm
name='edit-avatar'
title='Обновить аватар'
children={
    <form className="form">
        <input className="form__input" id="_type_link-avatar" name="link" type="url" placeholder="Ссылка на картинку" required />
        <span className="form__error form__error_type_link-avatar"></span>
        <button className="form__submit" type='submit'>Сохранить</button>
    </form>
}
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopups} />
<ImagePopup card={selectedCard}
isOpen={isImagePopupOpen}
onClose={closeAllPopups}
/>
<Footer />
    </>
  );
}

export default App;

