import axios from 'axios'

const TaskService = {
  create: ({ date, description }) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3001/api/task',
        {
          token: window.localStorage.getItem("do-task-token"),
          date: date,
          description: description
        }).then(result => {
          resolve(result);
        }).catch(error => {
          reject(error.response);
        })
    })
  },
  list: () => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3001/api/task', {
        headers: { 'x-access-token': window.localStorage.getItem("do-task-token") }
      }
      ).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error.response);
      })
    })
  }
}

export default TaskService;