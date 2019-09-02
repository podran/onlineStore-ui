import Network from './Network.service';

class ProductService extends Network{
    getAll() {
        return this.send('GET', '/product');
    }

    create(product) {
        return this.send('PUT', '/product', product);
    }
    
    getByCategoryId(id) {
        return this.send('GET', `/category/${id}/product`);
    }
}

export default new ProductService();