import { Server, Model } from 'miragejs';
import { productsApi, productDetailsApi } from '../../__mocks__';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,
    models: {
      product: Model
    },
    routes() {
      this.urlPrefix = 'https://api.ton/v1/';
      this.get('products', () => {
        return {
          products: productsApi
        };
      });
      this.get('products/:id', (_, request) => {
        const id: string = request.params.id;
        return productDetailsApi.find(product => product.id === Number(id)) || {};
      });
    }
  });
  return server;
}
