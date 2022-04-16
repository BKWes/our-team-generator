const Manager = require('../lib/Manager');

test('manager has employee properties', () => {
    const manager = new Manager('Shae', 'shae@email.com');

    expect(manager.name).toBe('Shae', 'shae@email.com');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('shae@email.com');
});

test('intern has office number property', () => {
    const manager = new Manager('Shae', 'shae@email.com', '9303');

    expect(manager.officeNumber).toBe('9303');
});

test('getRole overrides to Manager', () => {
    const manager = new Manager('Shae');

    expect(manager.getRole()).toBe('Manager');
});