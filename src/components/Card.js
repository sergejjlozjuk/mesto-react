/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { currentUserContext } from '../contexts/CurrentUserContext'

export default class Card extends React.Component {
  static contextType = currentUserContext
  constructor(props) {
    super(props)
    this.card = props.card
  }
  render() {
    return (
      <article className="place">
        <button
          className={`place__trash ${
            this.card.owner._id === this.context._id
              ? ''
              : 'place__trash_inactive'
          }`}
        ></button>
        <img
          className="place__image"
          src={this.card.link}
          onClick={() => this.props.onCardClick(this.card)}
          alt={this.card.name}
        />
        <div className="place__info">
          <h2 className="place__title">{this.card.name}</h2>
          <div className="place__like-container">
            <button
              className={`place__like ${
                this.card.likes.some((user) => user._id === this.context._id)
                  ? 'place__like_active'
                  : ''
              }`}
              type="button"
              onClick={() => this.props.onCardLike(this.card)}
            ></button>
            <span className="place__like-counter">
              {this.card.likes.length}
            </span>
          </div>
        </div>
      </article>
    )
  }
}
