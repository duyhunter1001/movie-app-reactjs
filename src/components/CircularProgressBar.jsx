import { useEffect, useState } from "react";
import { cn } from '@libs/utils';

export const CircularProgressBar = ({
  percent = 12,
  className = "",
  sizeCustom = 0
}) => {
  const [size, setSize] = useState(35);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const strokeColor = percent >= 70 ? "green" : percent >= 50 ? "orange" : "red"

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSize(sizeCustom !== 0 ? sizeCustom : 45);
      setStrokeWidth(4);
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSize(sizeCustom !== 0 ? sizeCustom : 45);
        setStrokeWidth(4);
      } else {
        setSize(sizeCustom !== 0 ? sizeCustom : 35);
        setStrokeWidth(2);
      }
      return true;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sizeCustom]);

  const radius = size / 2 - strokeWidth;
  return (
    <div className={cn("relative w-max", className)}>
      <svg width={size} height={size}>
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="white"
          strokeWidth={strokeWidth}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke={strokeColor}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={
            2 * Math.PI * radius - (percent / 100) * 2 * Math.PI * radius
          }
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm md:text-base">
        {percent}
      </span>
    </div>
  );
};
