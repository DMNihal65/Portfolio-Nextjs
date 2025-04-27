import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const VisitorCounter = () => {
  const { data, error } = useSWR('/api/visitor-count', fetcher, {
    refreshInterval: 0, // Only fetch once per session
  });
  const [animateCount, setAnimateCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Increment count when component mounts (user visits the page)
    fetch('/api/visitor-count', { method: 'POST' });
  }, []);

  useEffect(() => {
    if (data && data.count) {
      // Animate the counter from 0 to actual value
      const finalCount = data.count;
      const duration = 2000; // 2 seconds
      const frameRate = 30;
      const totalFrames = duration / (1000 / frameRate);
      let frame = 0;
      
      setIsLoaded(true);
      
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(finalCount * Math.min(progress, 1));
        
        setAnimateCount(currentCount);
        
        if (frame >= totalFrames) {
          clearInterval(interval);
        }
      }, 1000 / frameRate);
      
      return () => clearInterval(interval);
    }
  }, [data]);

  if (error) return null;

  return (
    <div className="visitor-counter">
      {isLoaded ? (
        <>
          <span className="visitors-icon">👀</span> 
          <span className="count">{animateCount.toLocaleString()}</span> 
          <span className="visitors-text">visitors</span>
        </>
      ) : (
        'Loading...'
      )}
      <style jsx>{`
        .visitor-counter {
          font-size: 0.8rem;
          color: #718096;
          margin-top: 1rem;
          opacity: 0.85;
          text-align: center;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s ease;
        }
        .visitor-counter:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .count {
          font-weight: bold;
          color: #4A5568;
        }
        .visitors-icon {
          margin-right: 0.25rem;
        }
        .visitors-text {
          margin-left: 0.15rem;
        }
      `}</style>
    </div>
  );
};

export default VisitorCounter; 