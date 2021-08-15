const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

// This tests to see if an object is created
test('this creates an employee object', () => {
    const employee = new Employee('Justin', 1, 'jyliao248@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// This test for name for the getName() method
test('checks for employee name', () => {
    const employee = new Employee('Justin', 1, 'jyliao248@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});

// This test for ID for the getID() method
test('checks for employee ID', () => {
    const employee = new Employee('Justin', 1, 'jyliao248@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));

});

// This test for email of employee
test('checks for employee email', () => {
    const employee = new Employee('Justin', 1, 'jyliao248@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Justin', 1, 'jyliao248@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});