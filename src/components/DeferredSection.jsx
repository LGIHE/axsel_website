import { useEffect, useRef, useState } from 'react';

export default function DeferredSection({
  children,
  minHeight = 320,
  rootMargin = '350px 0px',
  anchorId,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef(null);

  useEffect(() => {
    if (shouldRender) return;

    const node = markerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={markerRef} id={anchorId} className="scroll-mt-24">
      {shouldRender ? children : <div aria-hidden="true" style={{ minHeight }} />}
    </div>
  );
}
