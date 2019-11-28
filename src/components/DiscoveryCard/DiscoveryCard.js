import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const DiscoveryContainer = styled.div(({ image }) => ({
  paddingTop: `calc((100% / 2.4084507042) + 30px)`,
  borderRadius: '5px',
  overflow: 'hidden',
  position: 'relative',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  backgroundImage: `url(${image})`,

  '&:hover::before': {
    backgroundColor: COLORS.brandColorTextHover
  },

  '&, *': {
    cursor: 'pointer'
  },

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

const DiscoveryCard = ({
  title,
  image,
  slug,
  clickEvent = null,
  currentHistory = null,
}) => {

  return (
    <DiscoveryContainer
      className='discovery-container'
      image={image}
      onClick={() => (clickEvent(currentHistory, slug))} >
      <label>{title}</label>
    </DiscoveryContainer>
  )
};

export default DiscoveryCard;