class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("We have found an error."`Error: ${res}`);
  }

  getPersonalInformation(token) {
    //requested information from server about current user
    return fetch(`${this._url}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }
  getPosts() {
    // request posts from server
    return fetch(`${this._url}/posts`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  createPost(data) {
    const userId = localStorage.getItem("userId");
    // Creating a new post on the server

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
        user: data.user,
      }),
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
