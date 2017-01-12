
import React from 'react'
import Paths from './Paths'

const ICON_STROKE_LINECAP = ['round', 'butt', 'butt']
const ICON_STROKE_LINEJOIN = ['round', 'bevel', 'miter']
const ICON_STROKE_WIDTH = {
  ultralight: '1.5625%',
  thin: '3.125%',
  light: '4.6875%',
  regular: '6.25%',
  medium: '	7.8125%',
  bold: '9.375%',
  heavy: '10.9375%'
}

const Icon = ({
  name = 'close',
  size = 32,
  viewbox = '0 0 32 32',
  fill = 'none',
  stroke = 'currentcolor',

  // starts issue = I want this to be one of the array up above, but default to one of the items in the array
  strokeLinejoin = ICON_STROKE_LINECAP[0],
  strokeLinecap = ICON_STROKE_LINEJOIN[0],
  strokeWidth = ICON_STROKE_WIDTH[3],
  // end of issue
  ...props
}) => {
  const d = Paths[name] || ''

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id={name}
      viewBox={viewbox}
      width={size}
      height={size}
      fill={fill}
      fillRule='evenodd'
      clipRule='evenodd'
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      {...props}>
      <path
        fillRule='nonzero'
        d={d} />
    </svg>
  )
}

export default Icon
