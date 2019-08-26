import Network from './Network.service';

class UserService extends Network{
    getAll() {
        return this.send('GET', '/user');
    }

    me(){
        return this.send('GET', '/user/me');
    }

    create(user) {
        return this.send('PUT', '/user', user);
    }

    login(data) {
        return this.send('POST', '/user/login', {email: data.email, password: data.password})
    }
    update(id, data) {
        return this.send('POST', `/user/${id}`, data);
    }
}

export default new UserService();