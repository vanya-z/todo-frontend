import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TASK action', () => {
    expect(actions.addTodo({title: 'Use Redux', id: 0})).toEqual({
      task: {id: 0, title: "Use Redux"},
      type: "ADD_TASK"
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTask should create TOGGLE_TASK action', () => {
    expect(actions.toggleTask({title: 'Use Redux', id: 1})).toEqual({
      type: 'TOGGLE_TASK',
      task: {
        title: 'Use Redux',
        id: 1
      }
    })
  })
})
