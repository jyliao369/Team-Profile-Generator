const Employee = require("../lib/Employee");

// this is the template for the manager profile card
const managerCard = function(Manager) {
    return `
    <div>
        <div>
            <div class="cardHead">
                <h3>${Manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">groups</i>
            </div>
            <div class="cardMain">
                <p class="id">ID: ${Manager.id}</p>
                <p class="email">Email: <a href="mailto:${Manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${Manager.officeNum}</p>
            </div>
        </div>
    </div>`
};

// This is the template for the intern profile card
const internCard = function(Intern) {
    return `
    <div>
        <div>
            <div class="cardHead">
                <h3>${Intern.name}</h3>
                <h4>Manager</h4><i class="material-icons">groups</i>
            </div>
            <div class="cardMain">
                <p class="id">ID: ${Intern.id}</p>
                <p class="email">Email: <a href="mailto:${Intern.email}">${manager.email}</a></p>
                <p class="school">School: ${Intern.officeNum}</p>
            </div>
        </div>
    </div>`
};

// This is the template for the engineer profile card
const engineerCard = function(Engineer) {
    return `
    <div>
        <div>
            <div class="cardHead">
                <h3>${Engineer.name}</h3>
                <h4>Manager</h4><i class="material-icons">groups</i>
            </div>
            <div class="cardMain">
                <p class="id">ID: ${Engineer.id}</p>
                <p class="email">Email: <a href="mailto:${Engineer.email}">${manager.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div>`
};

// This function will take the data that is provided by the user and creates the respectiful cards
// like manager, employee, engineer and interns.
// Once created, each 'card' is pushed into an array to be held for later use. 
const createCard = function(data) {

    // This is where the team card is being held as an array
    teamArray = [];

    for (let a = 0; a < data.length; a ++) {
        // This basically assigns the worker onto a contant thus allowing data to be pulled from it
        const worker = data[a];
        // This line should help get the role of each individual on the team 
        // this determnines which card is created based on the role
        const role = employee.getRole();

        // here we determine which card is created based on role
        if (role === "Manager") {
            const manCard = managerCard(employee);
            teamArray.push(manCard);
        }

        if (role === "Engineer") {
            const engCard = engineerCard(employee);
            teamArray.push(engCard);
        }

        if (role === "Intern") {
            const intCard = internCard(employee);
            teamArray.push(intCard);
        }
    }

    const teamCard = teamArray.join('');
    const generateCard = generateTeamPage(teamCard);
    return generateCard;
};


// This function here should create the entire html page including the head and body
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>`
};

module.exports = createCard;