const validUrl = require('valid-url');

function validateUrl(url) {
    console.log("::: Running URL validation  :::", url);

    return validUrl.isUri(url);
}

export { validateUrl }
