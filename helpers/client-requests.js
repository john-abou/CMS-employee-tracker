// Import cTable for the functions
const cTable = require('console.table');

// Define GET requests
const getFetch = (table) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/api/${table}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Something went wrong');
          }
          return response.json();
        })
        .then((data) => {
          const tableConsole = cTable.getTable(data['data']);
          console.log(`\nThe ${table} table: \n` + tableConsole);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

// Define POST requests
const postFetch = (table, req) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3001/api/${table}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify( req ), // Stringify the object before sending it to the server
        })
        .then( (response) => {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then( (data) => {
            console.log(data['message']);
            resolve(data);
        })
        .catch((error) => {
            reject(error);
          });
    })
}

// Define PUT requests
const putFetch = async (table, req) => {
  try {
    const response = await fetch(`http://localhost:3001/api/${table}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    console.log(data['message']);
    return data;
  } catch (error) {
    throw error;
  }
}


module.exports = { postFetch, getFetch, putFetch };