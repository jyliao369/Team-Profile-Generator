const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

// This creates the engineer object
test('this creates the engineer object', () => {
    const engineer = new Engineer('Justin', 1, 'jyliao248@gmail.com', 'jyliao369');

    expect(engineer.github).toEqual(expect.any(String));
});

// This tests for engineers github account
test('checks for engineers github', () => {
    const engineer = new Engineer('Justin', 1, 'jyliao248@gmail.com', 'jyliao369');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test for the engineers role
test('checks for role of engineer', () => {
    const engineer = new Engineer('Justin', 1, 'jyliao248@gmail.com', 'jyliao369');

    expect(engineer.getRole()).toEqual("Engineer");
});