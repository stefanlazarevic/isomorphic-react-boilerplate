/* eslint react/prop-types: 0 */
import React from 'react';

const defaultSize = '24';

export const ChevronLeft = ({ size = defaultSize, ...rest }) => (
  <svg width={size} height={size} {...rest} viewBox="0 0 24 24">
    <polyline
      points="16.242,20.485 7.758,12 16.242,3.514"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export const ChevronRight = ({ size = defaultSize, ...rest }) => (
  <svg width={size} height={size} {...rest} viewBox="0 0 24 24">
    <polyline
      points="7.758,3.515 16.242,12 7.758,20.485"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export const ChevronUp = ({ size = defaultSize, ...rest }) => (
  <svg width={size} height={size} {...rest} viewBox="0 0 24 24">
    <polyline
      points="3.515,16.243 12,7.757 20.485,16.243"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export const ChevronDown = ({ size = defaultSize, ...rest }) => (
  <svg width={size} height={size} {...rest} viewBox="0 0 24 24">
    <polyline
      fill="none"
      points="20.485 7.757 12 16.243 3.515 7.757"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export default {
  Left: ChevronLeft,
  Right: ChevronRight,
  Up: ChevronUp,
  Down: ChevronDown,
};
