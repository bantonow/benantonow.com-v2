import { useState, useEffect, useRef } from 'react';

interface TextScrambleProps {
  children: string;
  className?: string;
  speed?: number;
  scrambleDuration?: number;
  trigger?: boolean;
  onHoverStart?: React.MouseEventHandler<HTMLSpanElement>;
  onScrambleComplete?: () => void;
}

export function TextScramble({
  children,
  className,
  speed = 0.02,
  scrambleDuration = 0.3,
  trigger = false,
  onHoverStart,
  onScrambleComplete
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState<string>(children);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    if (trigger && !isAnimating.current) {
      isAnimating.current = true;
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const originalText = children;
      let iterations = 0;
      let isRevealing = false;
      let revealIndex = 0;

      // First phase: scramble the entire text
      const interval = setInterval(() => {
        if (!isRevealing) {
          // Scramble phase
          const scrambled = originalText.split('').map(() => {
            return chars[Math.floor(Math.random() * chars.length)];
          });
          setDisplayText(scrambled.join(''));
          
          iterations++;
          if (iterations >= scrambleDuration / speed) {
            isRevealing = true;
            iterations = 0;
          }
        } else {
          // Reveal phase
          const partially = originalText.split('').map((char, idx) => {
            if (idx <= revealIndex) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          });
          setDisplayText(partially.join(''));
          
          revealIndex++;
          if (revealIndex >= originalText.length) {
            clearInterval(interval);
            isAnimating.current = false;
            onScrambleComplete?.();
          }
        }
      }, speed * 1000);

      return () => {
        if (!isRevealing || revealIndex < originalText.length) {
          return;
        }
        clearInterval(interval);
      };
    }
  }, [trigger, children, speed, scrambleDuration, onScrambleComplete]);

  return (
    <span
      className={className}
      onMouseEnter={onHoverStart}
      onMouseLeave={() => {
        if (!isAnimating.current) {
          onScrambleComplete?.();
        }
      }}
    >
      {displayText}
    </span>
  );
}

export default TextScramble;