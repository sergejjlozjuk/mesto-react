
import '../pages/index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
function App() {
    function handleEditPlaceClick () {
        document.querySelector('.popup_type_card').classList.add('popup_active')
}
function handleEditAvatarClick () {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_active')
}
function handleEditProfileClick () {
    document.querySelector('.popup_type_user').classList.add('popup_active')
}
  return (
    <>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Место Россия</title>
</head>
<body class='root'>
<Header />
<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleEditPlaceClick} />
<PopupWithForm
name='confirm-delete'
title='Вы уверены?'
children={<button class="popup__button-confirm" type='button'>Да</button>}
isOpen={false} />
<PopupWithForm
name='user'
title='Редактировать профиль'
children={
    <form class="form form_user" name="user-form" novalidate>
        <input id="_type_name" class="form__input form__input_type_name" name="name" type="text" minlength="2" maxlength="40" required />
        <span class="form__error form__error_type_name"></span>
        <input id="_type_info" class="form__input form__input_type_info" name="info" type="text" minlength="2" maxlength="200" required />
        <span class="form__error form__error_type_info"></span>
        <button class="form__submit" type='submit'>Сохранить</button>
    </form>
}
isOpen={false} />
<PopupWithForm
name='card'
title='Новое место'
children={
    <form class="form form_type_card" name="card-form" novalidate>
        <input id="_type_title" name="name" class="form__input form__input_type_name" placeholder="Название" type="text" minlength="2" maxlength="30" required />
        <span class="form__error form__error_type_title"></span>
        <input id="_type_link" name="link" class="form__input form__input_type_info" placeholder="Ссылка на картинку" type="url" required />
        <span class="form__error form__error_type_link"></span>
        <button class="form__submit" type='submit'>Создать</button>
    </form>
}
isOpen={false} />
<PopupWithForm
name='edit-avatar'
title='Обновить аватар'
children={
    <form class="form">
        <input class="form__input" id="_type_link-avatar" name="link" type="url" placeholder="Ссылка на картинку" required />
        <span class="form__error form__error_type_link-avatar"></span>
        <button class="form__submit" type='submit'>Сохранить</button>
    </form>
}
isOpen={false} />
<ImagePopup />
        {/* <div class="popup popup_type_user">
            <div class="popup__container">
            <button class="popup__close popup__close_edit-profile" type='button'></button>
                <h2 class="popup__title">Редактировать профиль</h2>
                <form class="form form_user" name="user-form" novalidate>
                    <input id="_type_name" class="form__input form__input_type_name" name="name" type="text" minlength="2" maxlength="40" required />
                    <span class="form__error form__error_type_name"></span>
                    <input id="_type_info" class="form__input form__input_type_info" name="info" type="text" minlength="2" maxlength="200" required />
                    <span class="form__error form__error_type_info"></span>
                    <button class="form__submit" type='submit'>Сохранить</button>
                </form>
            </div>
        </div> */}
        {/* <div class="popup popup_type_card">
            <div class="popup__container">
            <button class="popup__close popup__close_type_card" type='button'></button>
                <h2 class="popup__title">Новое место</h2>
                <form class="form form_type_card" name="card-form" novalidate>
                    <input id="_type_title" name="name" class="form__input form__input_type_name" placeholder="Название" type="text" minlength="2" maxlength="30" required />
                    <span class="form__error form__error_type_title"></span>
                    <input id="_type_link" name="link" class="form__input form__input_type_info" placeholder="Ссылка на картинку" type="url" required />
                    <span class="form__error form__error_type_link"></span>
                    <button class="form__submit" type='submit'>Создать</button>
                </form>
            </div>
        </div> */}
        {/* <div class="popup popup_type_open-image">
            <div class="popup__open-image">
            <button class="popup__close popup__close_type_card" type='button'></button>
            <img class="popup__main-image" />
            <h2 class="popup__image-title"></h2>
            </div>
        </div> */}
        {/* <div class="popup popup_type_confirm-delete">
            <div class="popup__container">
                <button class="popup__close" type="button"></button>
                <h2 class="popup__title">Вы уверены?</h2>
                <button class="popup__button-confirm" type='button'>Да</button>
            </div>
        </div> */}
        {/* <div class="popup popup_type_edit-avatar">
            <div class="popup__container">
                <button class="popup__close" type="button"></button>
                <h2 class="popup__title">Обновить аватар</h2>
                <form class="form">
                    <input class="form__input" id="_type_link-avatar" name="link" type="url" placeholder="Ссылка на картинку" required />
                    <span class="form__error form__error_type_link-avatar"></span>
                    <button class="form__submit" type='submit'>Сохранить</button>
                </form>
            </div>
        </div> */}
        <template id="tmpl">
            <article class="place">
                <button class="place__trash"></button>
                <img class="place__image"/>
                <div class="place__info">
                    <h2 class="place__title"></h2>
                    <div class="place__like-container">
                    <button class="place__like" type="button"></button>
                    <span class="place__like-counter"></span>
                    </div>
                </div>
            </article>
        </template>
<Footer />
</body>
    </>
  );
}

export default App;
