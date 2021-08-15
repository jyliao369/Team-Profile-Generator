const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

// This creates the Intern object
test('this checks if the intern object is created', () => {
    const intern = new Intern('Justin', 1, 'jyliao248@gmail.com', 'UNC');

    expect(intern.school).toEqual(expect.any(String));
});

// This tests for the interns school
test('this checks for interns school', () => {
    const intern = new Intern('Justin', 1, 'jyliao248@gmail.com', 'UNC');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// This test for interns role
test('checks for the role of interns', () => {
    const intern = new Intern('Justin', 1, 'jyliao248@gmail.com', 'UNC');

    expect(intern.getRole()).toEqual("Intern");
});