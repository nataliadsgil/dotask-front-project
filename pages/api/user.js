import axios from 'axios'

const UserService = {
  register: ({ nome, email, senha }) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3001/api/register', {
        name: nome,
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

export default UserService;