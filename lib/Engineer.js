// defined + exported Engineer
const Employee = require("./Employee");

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // getRole => returns overridden Engineer
    getRole() {
        return "Engineer";
    }
}