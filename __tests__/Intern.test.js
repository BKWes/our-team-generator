const Intern = require('../lib/Intern');

test('intern has employee properties', () => {
    const intern = new Intern('Ally', 'ally@email.com');

    expect(intern.name).toBe('Ally', 'ally@email.com');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('ally@email.com');
});

test('intern has school property', () => {
    const intern = new Intern('Ally', 'ally@email.com', 'CSU');

    expect(intern.school).toBe('CSU');
});

test('get school value', () => {
    const intern = new Intern('Ally', 'email', 'CSU');

    expect(getSchool()).toBe('CSU');
});

test('getRole overrides to Intern', () => {
    const intern = new Intern('Ally');

    expect(getRole()).toBe('Intern');
});