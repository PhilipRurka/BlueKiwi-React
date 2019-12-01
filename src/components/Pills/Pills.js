import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const PillsWrapperStyled = styled.div({
  display: 'inline-block',
  padding: '0 10px 2px',
  border: `2px solid ${COLORS.brandColorText}`,
  borderRadius: '20px',
  marginTop: '10px',
  
  '&, *': { cursor: 'pointer' },
  '& + div': { marginLeft: '10px' },
  
  '&:hover': {
    borderColor: COLORS.brandColorTextHover,

    'label': {
      color: COLORS.brandColorTextHover
    }
  },

  'label': {
    color: COLORS.brandColorText,
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: '0'
  }
});

const Pills = ({ clickEvent, name }) => {

  return (
    <PillsWrapperStyled
      onClick={clickEvent}>
      <div className="pills-container">
        <label>{name}</label>
      </div>
    </PillsWrapperStyled>
  );
};

export default Pills;