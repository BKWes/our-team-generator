const Engineer = require('../lib/Engineer');

test('engineer has employee properties', () => {
    const engineer = new Engineer('Adam', 'adam@email.com');

    expect(engineer.name).toBe('Adam', 'adam@email.com');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('adam@email.com');
});

test('engineer has a github value', () => {
    const engineer = new Engineer('Adam', 'email', 'adamcoder')

    expect(engineer.github).toBe('adamcoder');
});

test('get github value', () => {
    const engineer = new Engineer('Adam', 'email', 'adamcoder');

    expect(getGithub()).toBe('adamcoder');
});

test('getRole overrides to Engineer', () => {
    const engineer = new Engineer('Adam');

    expect(getRole()).toBe('Engineer');
})