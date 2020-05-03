import config from '../config'

const AuthApiService = {

  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postUser(user) {
     return fetch(`${config.API_ENDPOINT}/users`, {
       method: 'POST',
       mode: 'no-cors',
       headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
       },
       body: JSON.stringify(user),
     })
       .then(res =>
         (!res.ok)
           ? res.json().then(e => Promise.reject(e))
           : res.json()
       )
   },
   postComment(username, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getComments(){
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default AuthApiService;