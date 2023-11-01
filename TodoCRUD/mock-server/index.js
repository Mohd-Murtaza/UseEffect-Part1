const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Add custom routes or other custom middleware if needed

// Use the router for the API endpoints
server.use('/api', router);

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
