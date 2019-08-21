import Network from './Network.service'

class CategoryService extends Network{
    getAll() {
        return this.send('GET', '/category');
    }

    create(category) {
        return this.send('PUT', '/category', category);
    }
}

export default new CategoryService();