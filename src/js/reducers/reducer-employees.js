export default function (state = null, action) {
    switch (action.type) {
        case 'ALL_EMPLOYEES':
            return action.payload;
        case 'EMPLOYEE_ADDED':
            return action.payload;   
        case 'EMPLOYEE_DELETED':
            return action.payload   
        default:
            if (state) {
                return state
            } else {
                return null
            }
    }
}

