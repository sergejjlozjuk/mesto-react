class Api {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
    }
    _getResponseData (res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers
    })
    .then(res => this._getResponseData(res));
    }
    getUserInfo () {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(res => this._getResponseData(res));
    }
    editAvatar (formValues) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: formValues.link
            })
        })
        .then(res => this._getResponseData(res));
    }
    setUserInfo (formValues) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-52/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: formValues.name,
                about: formValues.info
            })
            })
            .then(res => this._getResponseData(res));
    }
    setCard (formValues) {
           return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
            name: formValues.name,
            link: formValues.link
        })
    })
    .then(res => this._getResponseData(res));
    }
    deleteCard (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}`, {
     method: 'DELETE',
     headers: this.headers
    })
    .then(res => this._getResponseData(res));
    }
    setCardLike (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}/likes`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(res => this._getResponseData(res));
    }
    deleteCardLike (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res => this._getResponseData(res));
    }
  }
  
     const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803',
        'Content-Type': 'application/json'
    }
});
export {api}