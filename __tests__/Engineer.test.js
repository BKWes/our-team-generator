const Engineer = require('../lib/Engineer');

test('engineer has name, email and job title values', () => {
    const engineer = new Engineer ('Al', 'gob@email.com', 1 , 'engineer')

    expect(engineer.name).toBe('Al');
    expect(engineer.email).toBe('gob@email.com');
    expect(engineer.title).toBe('engineer')
    expect(engineer.id).toBe(1);
});

test('getOther to get github', () => {
    const engineer = new Engineer('Adam');

    expect(engineer.getOther('github')).toBe('GitHub: <a href=\"https://github.com/github\">github</a>');
});