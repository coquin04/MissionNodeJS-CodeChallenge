const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "CODE CHALLENGE API welcome!" });
});

app.get("/v1/students", (request, response) => {
  const students = StudentsController.getAllStudents();
  response.json(students);
});
app.get("/v1/students/emails/:status", (request, response) => {
  const status = request.params.status;
  const emails = StudentsController.getEmails(status);
  response.json({
    status: status,
    emails: emails,
  });
});

app.get("/v1/students/credits/:credit", (request, response) => {
  const credits = parseInt(request.params.credit);
  const studentsOverCredits =
    StudentsController.getStudentsWithCredits(credits);
  response.json(studentsOverCredits);
});

app.listen(port, () => {
  console.log(`CODE CHALLENGE API in localhost:${port}`);
});
