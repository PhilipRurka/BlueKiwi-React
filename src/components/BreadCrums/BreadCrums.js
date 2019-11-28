import React from 'react';
import styled from '@emotion/styled/macro';
import { isObjEmpty } from '../../helpers/general';
import { COLORS } from '../../helpers/colors';

const BreadCrumsWrapper = styled.div({

});

const Label = styled.label(({ url, isLast }) => {

  let color, cursor, margin, hoverColor;

  if(url) {
    margin = '0';

    if(!isLast) {
      color = COLORS.brandColorText;
      cursor = 'pointer';
      hoverColor = COLORS.brandColorTextHover
    } else {
      color = 'black';
      cursor = 'initial';
      hoverColor = 'initial';
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
    margin,
    
    '&:hover': {
      color: hoverColor
    }
  }
});

const goToPage = (url, currentHistory, isLast) => {
  if(url && !isLast) {
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
    let item;

    if(i === 2) {
      item = discoveriesList[name];
    } else if((i === 3)) {
      item = productsList[name];
    } else {
      item = null;
    };

    if(item) {
      url = `${url}/${item.slug}`
      itemArray.push({ name: '/' });
      itemArray.push({
        name: item.name,
        url
      });
    } else {
      break;
    };
  };

  return (
    <>
      <BreadCrumsWrapper>
        {itemArray.map((item, i) => {
          const isLast = (itemArray.length === (i + 1))

          return (
            <Label
              key={item.name + i}
              url={item.url}
              isLast={isLast}
              onClick={() => (goToPage(item.url, currentHistory, isLast))} >
              {item.name}
            </Label>
          )
        })}
      </BreadCrumsWrapper>
    </>
  );
};

export default BreadCrums;