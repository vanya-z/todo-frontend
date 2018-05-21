import React from 'react'
import Navbar from './Navbar'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleAlertList from '../containers/VisibleAlertList'

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <VisibleAlertList />
      <Filters />
      <AddTodo />
      <VisibleTodoList />
    </div>
  </div>
)

export default App
