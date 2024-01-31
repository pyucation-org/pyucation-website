import React, { useState } from 'react';

const PrivacyModal = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  }

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Privacy Notice</h2>
        <p>Your privacy is important to us. By using this site, you agree to our <a href="/privacy-policy">Privacy Policy</a>.</p>
        <button onClick={handleClose}>I Agree</button>
      </div>
    </div>
  );
}

export default PrivacyModal;
