import { Server, Model } from 'miragejs';
import { productsApi, productDetailsApi } from '../helpers';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,
    models: {
      product: Model
    },
    routes() {
      this.get('/api/products', () => {
        return {
          products: productsApi
        };
      });
      this.get('/api/products/:id', (_, request) => {
        const id: string = request.params.id;
        return productDetailsApi.find(product => product.id === Number(id)) || {};
      });
    }
  });
  return server;
}
