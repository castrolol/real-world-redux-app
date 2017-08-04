
const baseUrl = "http://localhost:3004"; //TODO: pegar de algum lugar... env, config watever

class Http {

    request(url, method, body, moreOpts = {}) {

        var options = { ...moreOpts, method, body };


        return fetch(`${baseUrl}${url}`, options);
    }

    jsonResponse(request) {
        //TODO: tratar 400 e 500 aqui tbm...
        var headers = {};

        return request
            .then(response => {
                headers = response.headers;
                return response.json();
            })
            .then(json => ({
                json,
                headers
            }));

    }

    getJson(url, getHeaders = null) {
        return this.jsonResponse(this.request(url, "GET"));
    }

    postJson(url, body, getHeaders = null) {
        return this.jsonResponse(this.request(url, "POST", body));
    }

    putJson(url, body, getHeaders = null) {
        return this.jsonResponse(this.request(url, "PUT", body));
    }

    deleteJson(url, body, getHeaders = null) {
        return this.jsonResponse(this.request(url, "DELETE", body));
    }

}

export default Http;