import React from 'react'
import List from './List'
import { useStore } from '../store'

function Todo() {

  const { todos, addTodo } = useStore()

  const handleAddTodo = () => {
    const text = prompt()
    if (text) {
      addTodo(text)
    }
  }

  return (
    <div className='container'>
      <div className='my-4 d-flex justify-content-center align-items-center gap-4'>
        <div className='fs-1'>
          วันนี้
        </div>
        <div className='fs-4 badge bg-secondary'>
          { todos.length }
        </div>
      </div>
      <div className='my-2'>
        <button className='btn btn-outline-light' onClick={handleAddTodo}>+ เพิ่มรายการใหม่</button>
      </div>
      <div className="form">
        {
          todos.length === 0 ? <div className='fs-2 text-center mt-5'>ไม่มีรายการ</div> :
            todos.map((todo) => (
              <List key={todo.id} todo={todo} />
            ))
        }
      </div>
    </div>
  )
}

export default Todo