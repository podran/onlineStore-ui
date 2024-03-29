import cookie from 'react-cookies';

export default class Network {
    getToken() {
        return cookie.load('user');
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json',
        }
        if(this.getToken()) headers.Authorization = this.getToken();
        return headers;
    }

    send(method, url, data) {
        let JSONData;
        try {
            JSONData = JSON.stringify(data);
        }
        catch(err) {
            console.log(err);
        }
        return fetch('http://localhost:9000/api' + url, {
            method,
            body: JSONData,
            headers: this.getHeaders()
        })
    }
}