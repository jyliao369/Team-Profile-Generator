const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

// this tests if the Manager object is created
test('this checks the manager object', () => {
    const manager = new Manager('Justin', 1, 'jyliao248@gmail.com', 2)

    expect(manager.officeNum).toEqual(expect.any(Number));
});

// This tests for the Managers role through getRole()
test('this checks for the managers office number', () => {
    const manager = new Manager('Justin', 1, 'jyliao248@gmail.com', 2)

    expect(manager.getRole()).toEqual("Manager");
});
