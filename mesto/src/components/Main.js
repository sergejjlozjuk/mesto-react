import React from "react";

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.handleEditAvatarClick = props.onEditAvatar;
        this.handleEditPlaceClick = props.onAddPlace;
        this.handleEditProfileClick = props.onEditProfile;
    }
    render () {
        return(
            <main class="main">
                <section class="user">
                    <div class="user__profile">
                        <img class="user__image" alt="Аватар" />
                        <div class="user__image-overlay" onClick={this.handleEditAvatarClick}></div>
                        <h1 class="user__name"></h1>
                        <p class="user__info"></p>
                        <button class="user__change-button" type='button' onClick={this.handleEditProfileClick}></button>
                        <button class="user__add-button" type='button' onClick={this.handleEditPlaceClick}></button>
                    </div>
                </section>
                <section class="places">
                </section>
            </main>
        )
    }
}