const { validateUrl } = require('../../src/client/js/urlChecker');

test('checks if url is valid', () => {
    expect(validateUrl('https://medium.com/better-programming/my-simple-python-development-setup-687c31898d5b')).toBeTruthy();
});