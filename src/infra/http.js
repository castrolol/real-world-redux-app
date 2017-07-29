
const baseUrl = "http://localhost:3004"; //TODO: pegar de algum lugar... env, config watever

class Http {

    request(url, method, body, moreOpts = {}) {

        var options = { ...moreOpts, method, body };


        return fetch(`${baseUrl}${url}`, options);
    }

    jsonResponse(response) {
        //TODO: tratar 400 e 500 aqui tbm...
        return response.json();
    }

    getJson(url) {
        return this.request(url, "GET").then(r => this.jsonResponse(r));
    }

    postJson(url, body) {
        return this.request(url, "POST", body).then(r => this.jsonResponse(r));
    }

    putJson(url, body) {
        return this.request(url, "PUT", body).then(r => this.jsonResponse(r));
    }

    deleteJson(url, body) {
        return this.request(url, "DELETE", body).then(r => this.jsonResponse(r));
    }

}

export default Http;