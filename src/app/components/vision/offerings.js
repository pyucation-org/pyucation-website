import React from "react";
import Offering from "./offering-card";

function Offerings() {
  return (
    <div className="offerings-container flex flex-wrap justify-center">
      <Offering
        iconClass="bi bi-terminal custom-icon"
        description="Maßgeschneiderte Python-Kurse, die sich an Unternehmen und Privatpersonen richten (Grundlagen bis hin zu fortgeschrittenen Techniken)"
      />
      <Offering
        iconClass="bi bi-gear-fill custom-icon"
        description="Praxisnahe Workshops und Kurse in den Bereichen Künstliche Intelligenz (KI), Machine Learning und Deep Learning für reale Anwendungen"
      />
      <Offering
        iconClass="bi bi-tools custom-icon"
        description="Hilfe bei der Implementierung und Automatisierung mit Python"
      />
      <Offering
        iconClass="bi bi-lightbulb-fill custom-icon"
        description="Aufklärung und Entdeckung von Potenzialen und Gefahren der Generativen KI bis hin zu spezialisierten Anwendungen in der Industrie"
      />
    </div>
  );
}

export default Offerings;