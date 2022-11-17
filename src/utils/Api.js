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
  }
  getInitialCards() {
    return this._request('/cards', {
      headers: this.headers,
    }).then(this._getResponseData)
  }
  getUserInfo() {
    return this._request('/users/me', {
      headers: this.headers,
    }).then(this._getResponseData)
  }
  editAvatar(formValues) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: formValues.link,
      }),
    }).then(this._getResponseData)
  }
  setUserInfo(formValues) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: formValues.name,
        about: formValues.info,
      }),
    }).then(this._getResponseData)
  }
  setCard(formValues) {
    return this._request('/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: formValues.name,
        link: formValues.link,
      }),
    }).then(this._getResponseData)
  }
  deleteCard(card) {
    return this._request(`/cards/${card._cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._getResponseData)
  }
  setCardLike(card) {
    return this._request(`/cards/${card._cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    }).then(this._getResponseData)
  }
  deleteCardLike(card) {
    return this._request(`/cards/${card._cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._getResponseData)
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
