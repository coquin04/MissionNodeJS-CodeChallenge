const StudentsService = require("../../lib/services/StudentsService");
class StudentsController {
  static getAllStudents() {
    return StudentsService.getAllStudents();
  }
  static getEmails(status) {
    const students = StudentsService.getAllStudents();
    return StudentsService.getEmailsWithCertification(students, status);
  }
  static getStudentsWithCredits(credits) {
    const students = StudentsService.getAllStudents();
    return StudentsService.getStudentsWithCreditsOverX(students, credits);
  }
}
