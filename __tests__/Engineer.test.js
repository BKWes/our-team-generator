const Engineer = require('../lib/Engineer');

test('engineer has employee properties', () => {
    const engineer = new Engineer('Adam', 'adam@email.com');

    expect(engineer.name).toBe('Adam', 'adam@email.com');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('adam@email.com');
})