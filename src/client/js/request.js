function request(url) {
    return fetch(url)
        .then(res => res.json())
}

export { request }