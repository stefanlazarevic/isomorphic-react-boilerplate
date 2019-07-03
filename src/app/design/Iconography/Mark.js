/* eslint react/prop-types: 0 */
import React from 'react';

const defaultSize = '24';

export const CheckMark = () => <svg />;

export const XMark = ({ size = defaultSize, ...rest }) => (
  <svg width={size} height={size} {...rest} viewBox="0 0 24 24">
    <g>
      <line
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="7.05"
        y1="7.05"
        x2="16.95"
        y2="16.95"
      />

      <line
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="7.05"
        y1="16.95"
        x2="16.95"
        y2="7.05"
      />
    </g>
  </svg>
);

export const BookMark = () => <svg />;

export default {
  Check: CheckMark,
  X: XMark,
  Book: BookMark,
};
