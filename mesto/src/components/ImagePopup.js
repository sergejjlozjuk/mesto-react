export default function ImagePopup (props) {
    return (
    <div class="popup popup_type_open-image">
        <div class="popup__open-image">
            <button class="popup__close popup__close_type_card" type='button'></button>
            <img class="popup__main-image" alt='картинка'/>
            <h2 class="popup__image-title"></h2>
        </div>
    </div>
    )
}