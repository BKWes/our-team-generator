const Intern = require('../lib/Intern');

test('create new intern object', () => {
    const intern = new Intern('Ally');

    expect(intern.name).toBe('Ally');
});

