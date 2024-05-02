class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  registration(data) {
    return fetch(`${this._url}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }

  authorize(data) {
    return fetch(`${this._url}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }

  adminAuthorize(data) {
    return fetch(`${this._url}/admin/login`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }
}

const auth = new Auth({
  url: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default auth;
