// defined and exported Manager
const Employee = require("./Employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    // getRole => return overridden Manager
    getRole() {
        return "Intern";
    }
}
