import { memo } from 'react';
import VisitorCounter from 'components/Misc/VisitorCounter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="copyright">
        © {currentYear} Nihesh DM. All rights reserved.
      </div>
      <VisitorCounter />
      
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 1rem 0;
          margin-top: 2rem;
          text-align: center;
        }
        .copyright {
          font-size: 0.875rem;
          color: #718096;
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer); 