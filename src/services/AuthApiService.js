import config from '../config'

const AuthApiService = {

  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      
       headers: {
         'Content-Type': 'application/json',
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
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        text,
      }),
    })
      .then(res =>
        { console.log('res.ok log') 
          return(!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        
        })
  },
  getComments(){
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'GET',
      
      headers: {
        'content-type': 'application/json',
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