import { cn } from "@libs/utils";
import { useEffect, useState } from "react";

export const ImageComponent = ({ src, width, height, className = "", srcError = "", alt = "" }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=loading`,
  );

  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => setCurrentSrc(src);
    if (srcError) {
      img.onerror = () => setCurrentSrc(srcError)
    }

    return () => {
      img.onload = null;
      if (srcError) {
        img.onerror = null;
      }
    }
  }, [src]);

  return (
    <img
      className={cn('transition-all', className, currentSrc === src || currentSrc === srcError ? '' : 'blur-md')}
      src={currentSrc}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
