import { useState, useEffect } from "react"
import TaskService from './api/task'

export default function List() {

  const [showModal, setShowModal] = useState(false);

  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [listTasks, setListTasks] = useState([]);

  const createTask = () => {
    TaskService.create({ description, date }).then(result => {
      alert("Tarefa criada com sucesso!");
      setShowModal(false);
      listAllTasks();
    })
      .catch(error => {
        alert("Erro ao criar tarefa");
      })
  }

  const listAllTasks = () => {
    TaskService.list().then(result => {
      console.log(result);
      setListTasks(result.data.taskList);
    })
      .catch(error => {

      })
  }

  useEffect(() => {
    listAllTasks();
  }, []);

  return (
    <div className="background-white">
      <nav className="header">
        <a><h1>DoTask</h1></a>
      </nav>

      <button className="add-task" onClick={() => setShowModal(true)}>+</button>

      <div className="background-modal" style={{ display: showModal ? 'block' : 'none' }} onClick={() => setShowModal(false)}></div>

      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <form className="form-task">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <textarea placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type="button" onClick={createTask}>Salvar Tarefa</button>
        </form>
      </div>

      <ul className="list-tasks">
        {listTasks.map(item => {
          return (<li>{item.description}</li>);
        })}
      </ul>

    </div>
  )
}
