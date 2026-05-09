type BrandWordmarkProps = {
  className?: string
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 112.7366 20.229635"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-45.950948,-85.152804)">
        <text
          x="45.950947"
          y="100.49434"
          fill="#ffffff"
          fontFamily="'Times and Times again'"
          fontSize="16.9333px"
          letterSpacing="0.396875px"
        >
          SobreviventeS
        </text>
        <text
          x="120.54025"
          y="105.25967"
          fill="#ffffff"
          fontFamily="'Times and Times again'"
          fontSize="4.23333px"
          letterSpacing="0.396875px"
        >
          Moto Clube
        </text>
      </g>
    </svg>
  )
}
