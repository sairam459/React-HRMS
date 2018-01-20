export default function(state = null, action) {
    switch (action.type) {
      case 'SET_ROLE':
        return action.payload  
      default:
        return state;
    }
  }
  