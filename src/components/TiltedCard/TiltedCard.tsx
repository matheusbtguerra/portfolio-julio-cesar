import type { SpringOptions } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { PlayCircleOutlined } from '@ant-design/icons';

interface TiltedCardProps {
  imageSrc: React.ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  videoLink?: string;
  onClick?: () => void;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  videoLink,
  onClick
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState<number>(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  function handleClick() {
    if (onClick) {
      onClick();
    } else if (videoLink) {
      window.open(videoLink, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <figure
      ref={ref}
      className="relative cursor-pointer"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: '1000px'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {showMobileWarning && (
        <div className="absolute top-0 left-0 bg-black/80 text-white text-xs p-2 rounded opacity-70 z-10 md:hidden">
          Este efeito é otimizado para desktop
        </div>
      )}

      <motion.div
        className="relative overflow-hidden rounded-lg"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />

        <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircleOutlined className="text-white text-4xl sm:text-5xl md:text-6xl opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
        </div>

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute inset-0 flex items-end p-4">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="absolute pointer-events-none bg-black/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-20"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
