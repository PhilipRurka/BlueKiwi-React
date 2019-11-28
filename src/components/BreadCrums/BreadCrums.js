import React from 'react';
import styled from '@emotion/styled/macro';

const BreadCrumsWrapper = styled.div({

});

const BreadCrums = ({
  currentPathname,
  productsList,
  discoveriesList
}) => {

  const pathnameArray = currentPathname.split('/');
  let itemArray = [];
  if(pathnameArray[1] === 'discover' && pathnameArray.length >= 3) {
    itemArray.push('Discover');
    for (let i = 2; i < pathnameArray.length; i++) {
      const name = pathnameArray[i];
      const item = productsList[name] || discoveriesList[name];
      itemArray.push(item.name);
    };

    return (
      <>
        <BreadCrumsWrapper>
          {itemArray.map((name) => (
            <label key={name}>{name}</label>
          ))}
        </BreadCrumsWrapper>
      </>
    );
  } else {
    return <></>;
  }
};

export default BreadCrums;