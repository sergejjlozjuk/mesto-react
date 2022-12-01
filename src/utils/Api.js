class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка ${res.status}`)
  }
  _request(url, options) {
    return fetch(`${this.baseUrl}${url}`, options)
    .then(this._getResponseData)
  }
  getInitialCards() {
    return this._request('/cards', {
      headers: this.headers,
    })
  }
  getUserInfo() {
    return this._request('/users/me', {
      headers: this.headers,
    })
  }
  editAvatar(formValues) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: formValues.link,
      }),
    })
  }
  setUserInfo(formValues) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: formValues.name,
        about: formValues.info,
      }),
    })
  }
  setCard(formValues) {
    return this._request('/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: formValues.name,
        link: formValues.link,
      }),
    })
  }
  deleteCard(card) {
    return this._request(`/cards/${card._cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
  setCardLike(card) {
    return this._request(`/cards/${card._id}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
  }
  deleteCardLike(card) {
    return this._request(`/cards/${card._id}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
  headers: {
    authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803',
    'Content-Type': 'application/json',
  },
})
export { api }
