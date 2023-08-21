import { useState } from 'react'
import { todoType, useStore } from '../store'

function List({ todo }: { todo: todoType }) {

  const [update, setUpdate] = useState(false)
  const [newText, setNewText] = useState('')
  const { deleteTodo, updateTodo, toggleTodo } = useStore()

  const handleDeleteTodo = (id: number) => {
    if (confirm('ลบรายการหรือไม่ ?')) {
      deleteTodo(id)
    }
  }

  const handleUpdateTodo = (id: number, newText: string) => {
    if (confirm('ยืนยันแก้ไขรายการนี้หรือไม่ ?')) {
      updateTodo(id, newText)
      setUpdate(!update)
    }
  }

  const handleToggleTodo = (id: number) => {
    toggleTodo(id)
  }

  return (
    <div>
      {
        todo.completed ? (
          <div className='bg-dark text-white form-control my-2'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn btn-dark text-decoration-line-through' onClick={() => handleToggleTodo(todo.id)}>
                {todo.text}
              </div>
              <div>
                <button className='btn btn-outline-success'>สำเร็จ</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {
              update ? (
                <div className='bg-dark text-white form-control my-2'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <input className='form-control' type="text" onChange={e => setNewText(e.target.value)} placeholder={todo.text} />
                    </div>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-primary' onClick={() => handleUpdateTodo(todo.id, newText)}>ยืนยัน</button>
                      <button className='btn btn-outline-danger' onClick={() => handleDeleteTodo(todo.id)}>ลบ</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='bg-dark text-white form-control my-2'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn btn-dark' onClick={() => handleToggleTodo(todo.id)}>
                      {todo.text}
                    </div>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-outline-warning' onClick={() => setUpdate(!update)}>เเก้ไข</button>
                      <button className='btn btn-outline-danger' onClick={() => handleDeleteTodo(todo.id)}>ลบ</button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default List