export default function PopupWithForm (props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
        <div class="popup__container">
            <button class="popup__close" type="button"></button>
            <h2 class="popup__title">{props.title}</h2>
            {props.children}
        </div>
        </div>
    )
}
