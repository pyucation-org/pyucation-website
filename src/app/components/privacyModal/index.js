import React, { useEffect, useState } from 'react';

const PrivacyModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consentGiven = localStorage.getItem("privacyConsentGiven");
    if (!consentGiven) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    // Save consent in localStorage
    localStorage.setItem("privacyConsentGiven", "true");
    setShowModal(false);
  }

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Datenschutzbestimmungen</h2>
        <p>Datenschutz ist uns ein Anliegen. Wenn Sie diese Seite nutzen, stimmen Sie unseren <a href="/privacy-policy">Datenschutzrichtlinien</a> zu. Ihre Zustimmung wird gespeichert, es sei denn Sie nutzen eine private Browser Session.</p>
        <button onClick={handleClose}>Ich stimme zu.</button>
      </div>
    </div>
  );
}

export default PrivacyModal;
