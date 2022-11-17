/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.card = props.card
  }
  render() {
    return (
      <article className="place">
        <button className="place__trash"></button>
        <img
          className="place__image"
          src={this.card.link}
          onClick={() => this.props.onCardClick(this.card)}
        />
        <div className="place__info">
          <h2 className="place__title">{this.card.name}</h2>
          <div className="place__like-container">
            <button className="place__like" type="button"></button>
            <span className="place__like-counter">
              {this.card.likes.length}
            </span>
          </div>
        </div>
      </article>
    )
  }
}
