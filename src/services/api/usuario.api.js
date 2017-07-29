import Http from '../../infra/http';

export class UsuarioApi {

    constructor(http) {
        this.http = http || new Http();
    }

    getAll(page = 1) {

        return this.http.getJson(`/usuarios?_page=${page}&_limit=20`);

    }


}


export default new UsuarioApi();