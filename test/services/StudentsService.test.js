const StudentsService = require("../../lib/services/StudentsService");
describe("Unit Test for StudentService class", () => {
  test("Test for getAllStudents method", () => {
    const allStudents = StudentsService.getAllStudents();
    expect(allStudents.length).toBe(51);
  });
  test("Test for getEmailsWithCertification", () => {
    const students = [
      { haveCertification: true, email: "fake.email1" },
      { haveCertification: true, email: "fake.email2" },
    ];
    const emailWithCertifications = StudentsService.getEmailsWithCertification(
      students,
      true
    );
    expect(emailWithCertifications).toStrictEqual([
      "fake.email1",
      "fake.email2",
    ]);
  });
  test("Test for method GetStudentsWithCreditsOverX", () => {
    const students = [
      { haveCertification: true, email: "fake.email1", credits: 600 },
      { haveCertification: true, email: "fake.email2", credits: 700 },
    ];
    const studentsWithCreditsOver500 =
      StudentsService.getStudentsWithCreditsOverX(students, 500);
    expect(studentsWithCreditsOver500).toStrictEqual(students);
  });
});
