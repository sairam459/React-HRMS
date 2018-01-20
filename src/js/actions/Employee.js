const baseUrl = "http://localhost:8080/hrms/";

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export const getEmployee = employee => {
  return {
    type: "EMPLOYEE_SELECTED",
    payload: employee
  };
};

export const saveEmployee = (employee, id) => {
  return dispatch => {
    var myInit = {
      method: "POST",
      body: JSON.stringify(employee),
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      })
    };
    return fetch(baseUrl + id + "/saveEmployee", myInit)
      .then(handleResponse)
      .then(function(json) {
        dispatch({
          type: "EMPLOYEE_ADDED",
          payload: json
        });
      });
  };
};

export const updateEmployee = (employee, employees) => {
  employees.forEach((val, i) => {
    if (val.id === employee.id) {
      employees[i] = employee;
    }
  });
  return dispatch => {
    dispatch({
      type: "EMPLOYEE_UPDATED",
      payload: employee
    });
    dispatch({
      type: "ALL_EMPLOYEES",
      payload: employees
    });
  };
};

export const deleteEmployee = (eid, mid) => {
  return dispatch => {
    var myInit = {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      })
    };
    return fetch(baseUrl + eid + "/" + mid + "/deleteEmployee", myInit)
      .then(handleResponse)
      .then(function(json) {
        dispatch({
          type: "EMPLOYEE_DELETED",
          payload: json
        });
      });
  };
};

export const fetchEmployees = userdata => {
  return dispatch => {
    var myInit = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userdata),
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      })
    };
    return fetch(baseUrl + "/getAllEmployees", myInit)
      .then(handleResponse)
      .then(function(json) {
        dispatch({
          type: "ALL_EMPLOYEES",
          payload: json
        });
      });
  };
};

export const login = employeeauth => {
  return dispatch => {
    var myInit = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        id: employeeauth.userid,
        password: employeeauth.password
      })
    };
    return fetch(baseUrl + "/login", myInit)
      .then(response => response.json())
      .then(function(json) {
        localStorage.setItem('token',json.token)
        dispatch({
          type: "LOGIN",
          payload: json.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getAnalysisData = userdata => {
  return dispatch => {
    var myInit = {
      method: "GET",
      cors: true,
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      })
    };
    return fetch(baseUrl + userdata.id + "/getAnalysisData", myInit)
      .then(handleResponse)
      .then(function(json) {
        dispatch({
          type: "ANALYSIS",
          payload: json
        });
      });
  };
};
export const setRole = employee => {
  return {
    type: "SET_ROLE",
    payload: employee.role
  };
};

export const logout = userdata => {
  return dispatch => {
    var myInit = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      })
    };
    return fetch(baseUrl + userdata.id + "/logout", myInit)
      .then(handleResponse)
      .then(function(json) {
        dispatch({
          type: "LOGOUT",
          payload: false
        });
      });
  };
};
