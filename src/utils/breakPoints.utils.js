export const breaks = {
  xlBreak:        '1200px',
  lgBreak:        '992px',
  mdBreak:        '768px',
  smBreak:        '576px',
  xsBreak:        '450px'
};

/** Preset Break Points based off of the Bootstrap. */
export const breakPoints = {
  breakPointXL:   ` @media (min-width: ${breaks.xlBreak})`,
  breakPointLG:   ` @media (min-width: ${breaks.lgBreak})`,
  breakPointMD:   ` @media (min-width: ${breaks.mdBreak})`,
  breakPointSM:   ` @media (min-width: ${breaks.smBreak})`,
  breakPointxs:   ` @media (min-width: ${breaks.xsBreak})`,
  breakPointXXS:  ` @media (max-width: calc(${breaks.xsBreak} - 1px))`
};