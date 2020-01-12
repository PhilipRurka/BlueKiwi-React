import React from 'react';
import styled from '@emotion/styled/macro';

/** Styles Styles Styles Styles Styles */
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
/** End End End End End */

const Overlay = ({ openCondition, clickEvent }) => (
  <OverlayStyled
    openCondition={openCondition}
    onClick={() => (clickEvent(false))} />
);

export default Overlay;