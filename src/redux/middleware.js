import { getProductsList } from '../helpers/httpRequests';
import {
  UPDATE_LISTS
} from '../helpers/constants';

export function middleware() {
  return function(next) {
    return function(action) {
      const { type, payload } = action;
      if(type === UPDATE_LISTS) {
        if(payload === true) {
          getProductsList()
          .then((res) => {

            let categories = {};
            let products = {};

            res.includes.Entry.map((category) => {
              category = category.fields;

              categories[category.type] = {
                name: category.type,
                slug: category.categorySlug,
                description: category.description,
                image: category.image.fields.file.url,
                products: []
              };
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

              products[product.name] = {
                name: product.name,
                companyName: product.companyName,
                description: product.description,
                price: product.price,
                videoLink: product.videoLink,
                slug: product.slug,
                shortDescription: product.shortDescriptor,
                subTitle: product.subTitle,
                websiteUrl: product.websiteUrl,
                image: images
              };

              product.categories.map((category) => {
                categories[category.fields.type].products.push(products[product.name]);
              });
            });

            action = { type, payload: {
              products,
              categories
            } };
            
            return next(action);
          });
        };
      };
    };
  };
};