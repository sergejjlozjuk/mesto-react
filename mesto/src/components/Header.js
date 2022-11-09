import React from "react";
import logo from '../images/header_logo.svg';

export default class Header extends React.Component {
render () {
    return (
    <header class="header">
        <img class="header__logo" src={logo} alt="Россия" />
    </header>
    )
}
}