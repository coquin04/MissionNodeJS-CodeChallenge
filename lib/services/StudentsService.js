const Reader = require("../../lib/utils/Reader");
class StudentsService {
  static getAllStudents() {
    return Reader.readJsonFile("./data/visualpartners.json");
  }
  static getEmailsWithCertification(students, status) {
    const studentsWithCertification = students.filter(
      (student) => student.haveCertification == status
    );
    const emails = studentsWithCertification.map(
      (studentWithCertification) => studentWithCertification.email
    );
    return emails;
  }
  static getStudentsWithCreditsOver500(students, credits) {
    return students.filter((student) => student.credits > credits);
  }
}
module.exports = StudentsService;
