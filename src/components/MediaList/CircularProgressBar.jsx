export const CircularProgressBar = ({
  percent = 12,
  size = 1.8,
  strokeWidth = 0.25,
  strokeColor,
  ...props
}) => {
  const radius = size / 2 - strokeWidth;
  return (
    <div {...props}>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          fill="none"
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          strokeDashoffset={
            `${2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius}vw`
          }
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="1rem"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};
