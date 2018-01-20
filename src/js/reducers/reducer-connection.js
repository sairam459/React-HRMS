export default function(state = null, action) {
    switch (action.type) {
      case "CONNECTION_FAIL":
        return action.payload;
      default:
        return state;
    }
  }
  