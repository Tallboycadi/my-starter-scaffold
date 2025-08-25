const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const app = require("../src/app");

test("GET /health returns {status: ok}", async () => {
  const server = http.createServer(app).listen(0);
  const port = server.address().port;

  const data = await new Promise((resolve, reject) => {
    http.get({ hostname: "127.0.0.1", port, path: "/health" }, (res) => {
      let buf = "";
      res.on("data", (c) => (buf += c));
      res.on("end", () => resolve(buf));
    }).on("error", reject);
  });

  server.close();
  const json = JSON.parse(data);
  assert.equal(json.status, "ok");
});
