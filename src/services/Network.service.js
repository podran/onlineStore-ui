export default class Network {
    getToken() {
        return document.cookie.split('user=')[1];
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json',
        }
        if(this.getToken()) headers.Authorization = this.getToken();
        return headers;
    }

    send(method, url, data) {
        return fetch('http://localhost:9000/api' + url, {
            method,
            body: JSON.stringify(data),
            headers: this.getHeaders()
        })
    }
}