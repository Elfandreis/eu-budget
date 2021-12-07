import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 27 18"
    {...props}
  >
    <defs>
      <g id="c">
        <g id="b">
          <path id="a" d="M0 0v1h.5z" transform="rotate(18 3.157 -.5)" />
          <use xlinkHref="#a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#b" transform="rotate(72)" />
        <use xlinkHref="#b" transform="rotate(144)" />
        <use xlinkHref="#b" transform="rotate(216)" />
        <use xlinkHref="#b" transform="rotate(288)" />
      </g>
    </defs>
    <path
      d="M0 0v18h27V0z"
      fill="#039"
      className="text-transparent fill-current"
    />
    <g transform="translate(13.5 9)" fill="#fc0">
      <use xlinkHref="#c" transform="translate(0 -6)" />
      <g id="d">
        <use xlinkHref="#c" transform="rotate(72 -5.076 .534)" />
        <use xlinkHref="#c" transform="rotate(72 -4.663 -2.076)" />
        <use xlinkHref="#c" transform="translate(6)" />
        <use xlinkHref="#c" transform="rotate(144 -2.11 -2.344)" />
        <use xlinkHref="#c" transform="rotate(-144 -2.344 -2.11)" />
      </g>
      <use xlinkHref="#c" transform="translate(0 6)" />
      <use xlinkHref="#d" transform="scale(-1 1)" />
    </g>
  </svg>
);

export default SvgComponent;
