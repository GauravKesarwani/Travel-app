const { handleSubmit } = require('../../src/client/js/formHandler');

test('form handler returns false when url is invalid', function () {
    expect(handleSubmit(new Event('click'))).toBe(false);
});