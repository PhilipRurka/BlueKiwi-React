import { getProductsList } from '../httpRequests.utils';
import { UPDATE_LISTS } from '../redux';

export function middleware() {
  return function(next) {
    return function(action) {
      const { type, payload } = action;
      if(type === UPDATE_LISTS) {
        if(payload === true) {
          getProductsList()
          .then((res) => {

            let discoveries = {};
            let products = {};

            res.includes.Entry.map((discovery) => {
              discovery = discovery.fields;
              discoveries[discovery.categorySlug] = {
                name: discovery.type,
                slug: discovery.categorySlug,
                description: discovery.description,
                image: discovery.image.fields.file.url,
                products: []
              };
              return null;
            });

            res.items.map((product) => {
              product = product.fields;

              const images = product.images.map((image) => {
                image = image.fields;
                
                return {
                  url: image.file.url,
                  title: image.title
                };
              });

              products[product.slug] = {
                name: product.name,
                companyName: product.companyName,
                description: product.description,
                price: product.price,
                videoLink: product.videoLink,
                slug: product.slug,
                shortDescription: product.shortDescriptor,
                subTitle: product.subTitle,
                websiteUrl: product.websiteUrl,
                images: images,
                discoveries: []
              };

              product.categories.map((discovery) => {
                discoveries[discovery.fields.categorySlug].products.push(products[product.slug]);
                products[product.slug].discoveries.push({
                  name: discovery.fields.type,
                  slug: discovery.fields.categorySlug
                });

                return null;
              });

              return null;
            });

            return next({ type, payload: {
              products,
              discoveries
            }});
          });
        };
      } else {
        return next(action);
      };
    };
  };
};