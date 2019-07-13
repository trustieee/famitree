const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "../../db.json"));

const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist"
});

server.use(middlewares);
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
