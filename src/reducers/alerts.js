const alerts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return [
        {...action.alert, id: action.id},
        ...state
      ]
    case 'REMOVE_ALERT':
      return state.filter(alert =>
        alert.id !== action.id
      )
    default:
      return state
  }
}

export default alerts