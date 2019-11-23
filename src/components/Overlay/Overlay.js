import React from 'react';
import styled from '@emotion/styled/macro';

const OverlayStyled = styled.div(({ openCondition }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  zIndex: '6',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  pointerEvents: (openCondition) ? 'initial' : 'none',
  opacity:(openCondition) ? '1' : '0',
  transition: 'opacity 0.2s ease'
}));

const Overlay = ({ openCondition, clickEvent }) => {

  return (
    <OverlayStyled
    openCondition={openCondition}
    onClick={() => (clickEvent(false))} />
  );
};

export default Overlay;