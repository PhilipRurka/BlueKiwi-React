import React from 'react';
import styled from '@emotion/styled/macro';
import { isObjEmpty } from '../../helpers/general';
import { COLORS } from '../../helpers/colors';

const BreadCrumsWrapper = styled.div({

});

const Label = styled.label(({ url, isLast }) => {

  let color;
  let cursor;
  let margin;

  if(url) {
    margin = '0';

    if(!isLast) {
      color = COLORS.brandColorText;
      cursor = 'pointer'
    } else {
      color = 'black';
      cursor = 'initial';
    };

  } else {
    margin = '0 7px';
  };

  return {
    fontSize: '18px',
    letterSpacing: '0.5px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color,
    cursor,
    margin
  }
});

const goToPage = (url, currentHistory) => {
  if(url) {
    currentHistory.push(process.env.PUBLIC_URL + url);
  };
};

const BreadCrums = ({
  currentPathname,
  productsList,
  discoveriesList,
  currentHistory
}) => {

  const pathnameArray = currentPathname.split('/');
  let itemArray = [];
  let url = '/discover';
  itemArray.push({
    name: 'Discover',
    url: '/discover'
  });

  for (let i = 2; i < pathnameArray.length; i++) {
    const name = pathnameArray[i];
    const item = productsList[name] || discoveriesList[name];

    if(item) {
      url = `${url}/${item.slug}`
      itemArray.push({ name: '/' });
      itemArray.push({
        name: item.name,
        url
      });
    } else {
      return null;
    };
  };

  return (
    <>
      <BreadCrumsWrapper>
        {itemArray.map((item, i) => (
          <Label
            key={item.name}
            url={item.url}
            isLast={itemArray.length === (i + 1)}
            onClick={() => (goToPage(item.url, currentHistory))} >
            {item.name}
          </Label>
        ))}
      </BreadCrumsWrapper>
    </>
  );
};

export default BreadCrums;