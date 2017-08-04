import Http from '../../infra/http';

export class UsuarioApi {

    constructor(http) {
        this.http = http || new Http();
    }

    getAll(page = 1) {

        return this
            .http
            .getJson(`/usuarios?_page=${page}&_limit=10`)
            .then(response => {

                var json = response.json;
                var headers = response.headers;
                console.log(response);
                return {
                    items: json,
                    page: page,
                    pageCount: (+headers.get("X-Total-Count") || 0) / 10
                };

            });

    }


}


export default new UsuarioApi();