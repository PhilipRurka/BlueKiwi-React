import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../utils/colors.utils';

/** Styles Styles Styles Styles Styles */
const DiscoveryContainer = styled.div(({ image }) => ({
  paddingTop: `calc((100% / 2.4084507042) + 30px)`,
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundImage: `url(${image})`,

  '&:hover::before': { backgroundColor: COLORS.brandColorTextHover },

  '&, *': { cursor: 'pointer' },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    opacity: '0.66',
    backgroundColor: 'black',
    pointerEvents: 'none',
    transition: 'background-color 0.3s ease'
  },

  'label': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    fontWeight: '900',
    margin: '0',
    textTransform: 'uppercase',
    color: 'white',
    whiteSpace: 'nowrap'
  }
}));
/** End End End End End */

const DiscoveryCard = ({
  name,
  image,
  slug,
  clickEvent = null,
  currentHistory = null,
}) => (
  <DiscoveryContainer
    className='discovery-container'
    image={image}
    onClick={() => (clickEvent(currentHistory, slug))} >
    <label>{name}</label>
  </DiscoveryContainer>
);

export default DiscoveryCard;