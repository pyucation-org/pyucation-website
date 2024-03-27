import React, { useState } from "react";

function ContactButton() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#031a22' : '#0f313c',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    fontWeight: '600'
  };

  return (
    <a
      href="/contact"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Zum Kontakt
    </a>
  );
}

export default ContactButton;