import React from 'react';
import styled from '@emotion/styled/macro';

const Product = ({ product }) => {
  console.dir(product);

  const colStyles = {
    display: 'inline-block',
    verticalAlign: 'top'
  };
  
  const ImagesWrapper = styled.div({
    ...colStyles,
    marginLeft: '-15px',
    overflow: 'hidden',
    borderRadius: '5px',

    '.iframe-wrapper': {
      position: 'relative',
      paddingBottom: '100%',
      marginBottom: '15px',
      overflow: 'hidden',
      borderRadius: '5px',
    },

    '.video-wrapper': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      border: 'none',
    }

  });

  const ContentWrapper = styled.div({
    ...colStyles,
    marginRight: '-15px'
  });

  const ImageContainer = styled.div(({ image }) => ({
    
    '& + div': {
      marginTop: '15px'
    },
    
    '.image': {
      paddingBottom: '100%',
      height: '100%',
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("${image}")`,
    }
  }));

  console.dir(product.image);

  return (
    <>
      <ImagesWrapper
        className='col-md-6' >
        <div className="images-container">
          <div className="iframe-wrapper">
            <iframe
              className="video-wrapper"
              src={product.videoLink} />
          </div>
          {product.image.map((image, i) => (
            <ImageContainer
              key={product.shortDescription + i}
              image={image.url} >
              <div className="image" />
            </ImageContainer>
          ))}
        </div>
      </ImagesWrapper>
      <ContentWrapper
        className='col-md-6' >

      </ContentWrapper>
    </>
  );
};

export default Product;



//Example Param Values
// const array = [55,55,55,55,55,55,55,55,4,1,2,4,6,8,0,6,3,2,4,6,7,0,0,8,5,3,2,1,3,5,6,7,89,9,6,4,3,2,2,2,4,6,7,8,90,8,6,5,4,3,2,2,56];
// const n = 8;

// const findOccurrence = (array, n) => {
//   return new Promise((resolve) => {
//     let numberCountHash = {};

//     array.map((num) => {
//       num = num.toString();
//       numberCountHash[num] = numberCountHash[num] ? +1 : 0;
//     });

//     let arrayOfOccurrences = Object.keys(numberCountHash).filter((key) =>
//       numberCountHash[key] === n
//     );

//     return resolve(arrayOfOccurrences);
//   });
// };

// findOccurrence(array, n)
// .then(arrayOfOccurrences =>
//   console.log(arrayOfOccurrences) // Logs ["55, "2"]
// );