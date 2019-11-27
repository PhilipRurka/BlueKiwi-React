const contentful = require('contentful');

const client = contentful.createClient({
  space: 'm6tzh185jkue',
  accessToken: 'c7c6ecddb3984321e6a38d400540368de1ef6077df17d6079c7c572a36eff1c5'
});

export const getProductsList = () => {
  return new Promise((resolve) => {
    client.getEntries({
      content_type: '2PqfXUJwE8qSYKuM0U6w8M'
    })
    .then((res) => {
      return resolve(res);
    })
  })
};