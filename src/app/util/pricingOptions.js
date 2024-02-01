export const pricingsPython = [
  {
    name: "Schnupperstunde",
    tag: "Kostenlos",
    price: "0",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>gemeinsame Installation</li>
          <li>gemütliches Kennenlernen</li>
          <li>Organisatorisches</li>
          <li>erste Schritte mit Python</li>
      </ul>
    </>),
    popular: false
  },
  {
    name: "Seminarstunde",
    tag: "🌟 Beliebt",
    price: "50",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>viele Übungen und Projekte</li>
          <li>gemeinsame Entwicklung von Lösungsstrategien</li>
          <li>Sie geben den Rhythmus an</li>
          <li>Beratung bei eigenen Projekten</li>
          <li className="font-bold">30% Studenten und Azubi-Rabatt</li>
      </ul>
    </>),
    popular: true
  },
  {
    name: "Kleingruppen",
    tag: "Für Unternehmen",
    price: "140",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>ab 2 Teilnehmern</li>
          <li>vor Ort möglich</li>
          <li>auf Wunsch: competitive coding</li>
          <li>gemeinsamer Fortschritt</li>
          <li className="font-bold">50% Studenten und Azubi-Rabatt</li>
      </ul>
    </>),
    popular: false
  },
];

export const pricingsAI = [
  {
    name: "Vortrag",
    tag: "Grundlagen",
    price: "200",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>Auswahl aus großem Pool an Themen</li>
          <li>Aufbau von Intuition</li>
          <li>Erklärung von Grundbegriffen</li>
      </ul>
    </>),
    popular: false
    // description:
      // "Für Einsteiger gemacht, Erklärung der Grundbegriffe, Aufbau von Intuition",
  },
  {
    name: "Workshop",
    tag: "🌟 Fortgeschritten",
    price: "250",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>fortgeschrittene Themen</li>
          <li>Algorithmen und Hardware</li>
          <li>Vorstellung verschiedener Tools</li>
          <li>Entwicklung von Usecases und Vergleich</li>
      </ul>
    </>),
    popular: true
    // description: "fortgeschrittene Themen, Anwendung von Methoden, Beispiele",
  },
  {
    name: "Vortrag",
    tag: "Spezialisiert",
    price: "350",
    description: (<>
      <ul className="checkmark-bullet ml-2 text-left">
          <li>Deep Dive in spezielles Thema</li>
          <li>Sie geben den Bereich vor</li>
          <li>Recherche und Diskussion aktueller Forschung</li>
      </ul>
    </>),
      // "Deep Dive, spezielle Technologien des maschinellen Lernens, Lernen anhand realer Anwendungen",
    popular: false
  },
];
