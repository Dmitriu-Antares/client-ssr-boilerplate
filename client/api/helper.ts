import axios from 'axios'

class Api {
    constructor() {
        this.instance = null
        this.setHeaders()
    }
    setHeaders() {
        const instance = axios.create({
            baseURL: __ENV__.apiPath,
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        this.instance = instance
    }
    get(path) {
        return this.instance.get(path)
    }
}
const api = new Api();

export default api

