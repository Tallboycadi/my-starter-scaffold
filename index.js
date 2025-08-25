const { createServer } = require("http");
const app = require("./src/app");

const port = process.env.PORT || 3000;
const server = createServer(app);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = server;
