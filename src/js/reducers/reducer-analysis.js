export default function(state = null, action) {
  switch (action.type) {
    case "ANALYSIS":
      return action.payload;
    default:
      return state;
  }
}
