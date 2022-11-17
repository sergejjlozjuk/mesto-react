/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { api } from '../utils/Api'
import Card from './Card'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.handleEditAvatarClick = props.onEditAvatar
    this.handleEditPlaceClick = props.onAddPlace
    this.handleEditProfileClick = props.onEditProfile
    this.state = {
      userName: '',
      userAvatar: '',
      userDescription: '',
      cards: [],
    }
  }
  componentDidMount() {
    api
      .getUserInfo()
      .then((res) => {
        this.setState({
          userName: res.name,
          userAvatar: res.avatar,
          userDescription: res.about,
        })
      })
      .catch((err) => console.log(err))
    api
      .getInitialCards()
      .then((res) =>
        this.setState({
          cards: res,
        }),
      )
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <main className="main">
        <section className="user">
          <div className="user__profile">
            <img className="user__image" src={this.state.userAvatar} />
            <div
              className="user__image-overlay"
              onClick={this.handleEditAvatarClick}
            ></div>
            <h1 className="user__name">{this.state.userName}</h1>
            <p className="user__info">{this.state.userDescription}</p>
            <button
              className="user__change-button"
              type="button"
              onClick={this.handleEditProfileClick}
            ></button>
            <button
              className="user__add-button"
              type="button"
              onClick={this.handleEditPlaceClick}
            ></button>
          </div>
        </section>
        <section className="places">
          {this.state.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={this.props.onCardClick}
            />
          ))}
        </section>
      </main>
    )
  }
}
