const ADD_TODO = 'TODO_ADD';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
    }
    default: {
      return state;
    }
  }
}