class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`We have found an error. Error: ${res}`);
  }

  getPersonalInformation(token) {
    return fetch(`${this._url}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  getPosts() {
    return fetch(`${this._url}/posts`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  createPost(data) {
    return fetch(`${this._url}/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: data.title,
        text: data.text,
        imageUrl: data.imageUrl,

      }),
    }).then(this._handleResponse);
  }

  createNews(data) {
    return fetch(`${this._url}/news`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admin_jwt")}`,
      },
      body: JSON.stringify({
        title: data.title,
        text: data.text,
        imageUrl: data.imageUrl,
        user: data.user,
      }),
    }).then(this._handleResponse);
  }

  deletePost(postId) {
    return fetch(`${this._url}/posts/${postId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  updatePost(postId, data) {
    return fetch(`${this._url}/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }
}

const api = new Api({
  url: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
