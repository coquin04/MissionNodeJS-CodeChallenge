const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "CODE CHALLENGE API welcome!" });
});

app.listen(port, () => {
  console.log(`CODE CHALLENGE API in localhost:${port}`);
});
