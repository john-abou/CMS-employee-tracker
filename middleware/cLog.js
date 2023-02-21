// Make a function that logs the request method and the request path
const clog = (req, res, next) => {
    console.log(`${req.method} request made to ${req.path}`);
     
    // Call next so the server continues to the requested path after logging the request information
    next();
};

exports.clog = clog;