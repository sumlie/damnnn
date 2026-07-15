import { useEffect, useRef, useState } from "react";

export function useCopyFeedback(delay = 1000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const notifyCopied = () => {
    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setCopied(false);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { copied, notifyCopied };
}
