import axios from 'axios'

const AuthService = {
  login: ({ email, senha }) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3001/api/authenticate', {
        email: email,
        password: senha
      }).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error.response);
      })
    })
  }
}

export default AuthService;