// Necessary node Modules
const fs = require('fs');
const inquirer = require('inquirer');

// This section imports the HTML creation function
const createCard = require('./src/profileGenerator');

// Team class modules 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generate } = require('rxjs');

//This is where team is stored
const profileArray = [];


// Here are questions that will be asked to gather the users input
// These questions are for Managers
const recruitMan = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the manager's office number?"
        },
    ])
    // Once the above prompts have been asnwered it gets stored 
    // and then creats a new object using the answer as parameters
    .then(managerInfo => {
        const {name, id, email, officNum} = managerInfo;
        const manager = new Manager(name, id, email, officeNum);
        console.log(manager);
        profileArray.push(manager);
    })
}

// These questions are for Employees and can be used to add to Engineers or Intern employees
const recruitEm = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employees's role?",
            choice: ['Engineer', "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Which school did the intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Are there any more employees to add?",
            default: false
        }
    ])

    // Once the above prompts have been asnwered it gets stored 
    // and then creats a new object using the answer as parameters
    .then(employeeInfo => {
        let {name, id, email, role, github, school, addEmployee} = employeeInfo;
        let employee;
        if (role === "Engineer"){
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        }
        if (role === "Intern"){
            employee = new Intern(name, ide, email, school);
            console.log(employee);
        }
        profileArray.push(employee);
        if (addEmployee) {
            return addEmployee(profileArray);
        } else {
            return profileArray;
        }
    })
}

// This function or block of lines should help wrtie the HTML
const createHTML = data => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
            err ? console.log(err): console.log("HTML with team data successfully created!");
    })
}

// The couple of lines should help get the input from the user
recruitMan ()
    .then(recruitEm).then(profileArray => {
        return createCard(profileArray);
    })
    .then(pageHTML => {
        return createHTML(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });