const Intern = require('../lib/Intern');

test('intern has name, email and job title values', () => {
    const intern = new Intern ('Al', 'gob@email.com', 1 , 'intern')

    expect(intern.name).toBe('Al');
    expect(intern.email).toBe('gob@email.com');
    expect(intern.title).toBe('intern')
    expect(intern.id).toBe(1);
});

test('getOther to get school value', () => {
    const intern = new Intern('Adam');

    expect(intern.getOther('MSU')).toBe('School: MSU');
});