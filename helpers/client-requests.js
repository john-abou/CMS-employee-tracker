// Import cTable for the functions
const cTable = require('console.table');

// Define GET requests
const getFetch = (table) => {
    fetch(`http://localhost:3001/api/${table}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then( (response) => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            } 
            return response.json();
            })
        .then( (data) => {
            // Define the table and log it
            const table = cTable.getTable(data['data']);
            console.log(table);
        });
}

// Define POST requests
const postFetch = (table, req) => {
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
    .then( () => {
        console.log(`The updated ${table} table: `)

        // Make a GET request to display the updated table
        getFetch(table);
    });
}

// Define PUT requests
const putFetch = (table, req) => {
    fetch(`http://localhost:3001/api/${table}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify( req ), // Stringify the object before sending it to the server
        })
        .then( (response) => {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then( () => {
            console.log(`The updated ${table} table: `)
    
            // Make a GET request to display the updated table
            getFetch(table);
        });
}

module.exports = { postFetch, getFetch, putFetch };