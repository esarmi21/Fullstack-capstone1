

const AuthTokenService = {

    login(username){
        localStorage.setItem('loggedIn', username)
    },
    logout(){
        localStorage.setItem('loggedIn', '')

    },

    checkLogIn(){
        const username = localStorage.getItem('loggedIn')
        if(username)//not null
            return true
        else 
             return false
    },

    getUsername(){
        return localStorage.getItem('loggedIn')     
    }
}

export default AuthTokenService;