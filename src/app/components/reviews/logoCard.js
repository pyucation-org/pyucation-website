import React from 'react';

function LogoCard({ src, alt }) {
  return (
    <div className="p-4">
      <img src={src} alt={alt} className="h-16 w-auto" />
    </div>
  );
}

export default LogoCard;
