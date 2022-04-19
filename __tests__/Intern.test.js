const Intern = require('../lib/Intern');

test('intern has employee properties', () => {
    const intern = new Intern('Ally', 'ally@email.com');

    expect(intern.name).toBe('Ally', 'ally@email.com');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('ally@email.com');
});

test('getRole overrides to Intern', () => {
    const intern = new Intern('Ally');

    expect(intern.getRole()).toBe('Intern');
});