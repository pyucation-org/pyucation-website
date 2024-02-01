"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { fadeInVariant } from "../util/variants";

function PrivacyPolicy() {
  const scrollRef = useRef(null);

//  const { scrollYProgress } = useScroll({
//    container: scrollRef,
//  });

  return (
      <main className="pb-20 h-screen overflow-auto overflow-x-hidden flex-col items-center justify-center">
      <motion.div
        className="flex-col h-auto max-w-6xl justify-start items-start mx-auto mt-0"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex"></div>
        <div className="py-20 rounded-lg shadow-lg max-w-2xl px-4">
          <h1 className="text-white md:text-5xl text-4xl font-semibold tracking-tight text-left mb-5 py-5">
            Datenschutzrichtlinien
          </h1>
          <p className="text-white mb-2" align="justify">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.
          </p>

          <p className="text-white mb-2" align="justify">
            Nutzen Sie das Kontaktformular, werden Ihre Daten per E-Mail ans uns übertragen. Diese dienen lediglich der Kontaktaufnahme und werden für keine weiteren Zwecke als diesen verwendet.
          </p>
          <br></br>

          <h1 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Datenschutzerklärung nach EU-DSGVO
          </h1>

          <p className="text-white mb-2" align="justify">
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: Marc Benesch
          </p>
          <br></br>
          
          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Ihre Betroffenenrechte
          </h3>
          <p className="text-white mb-2" align="justify">
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul className="list-square text-left ml-10 leading-6 mt-2 space-y-3 text-white mb-2">
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
          </ul>
          <p className="text-white mb-2" align="justify">
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
          </p>
          <br></br>

          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Cookies
          </h3>
          <p className="text-white mb-2" align="justify">
          Wie viele andere Webseiten verwenden wir auch so genannte „Cookies”. Cookies sind kleine Textdateien, die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.
          Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
          In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.
          Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
          </p>
          <br></br>

          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Verwendung von Google Analytics
          </h3>
          <p className="text-white mb-2" align="justify">
            Art und Zweck der Verarbeitung:
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.
            Rechtsgrundlage: Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).
            Empfänger: Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.
            Speicherdauer: Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.
            Drittlandtransfer: Google verarbeitet Ihre Daten in den USA und hat sich dem EU-US Privacy Shield unterworfen. Außerdem haben wir Standarddatenschutzklauseln mit Google für den Einsatz von Google Analytics abgeschlossen.
            Bereitstellung vorgeschrieben oder erforderlich: Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.
            Widerruf der Einwilligung: Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Browser Add On zur Deaktivierung von Google Analytics.
            Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie diesen Link anklicken. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.
            Profiling: Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.
          </p>
          <br></br>

          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Verwendung von Scriptbibliotheken (Google Webfonts)
          </h3>
          <p className="text-white mb-2" align="justify">
          Art und Zweck der Verarbeitung:
            Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
            Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: https://www.google.com/policies/privacy/
            Rechtsgrundlage: Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            Empfänger: Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.
            Speicherdauer: Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.
            Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy/
            Drittlandtransfer: Google verarbeitet Ihre Daten in den USA und hat sich dem EU-US Privacy Shield unterworfen.
            Bereitstellung vorgeschrieben oder erforderlich: Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ohne die korrekte Darstellung der Inhalte von Standardschriften nicht ermöglicht werden.
            Widerruf der Einwilligung: Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen Einbindung JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.
          </p>
          <br></br>

          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Änderung unserer Datenschutzbestimmungen
          </h3>
          <p className="text-white mb-2" align="justify">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
          <br></br>

          <h3 className="text-white md:text-5xl text-4xl font-semibold mb-10 tracking-tight text-left">
            Fragen an den Datenschutzbeauftragten
          </h3>
          <p className="text-white mb-2" align="justify">
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation: Marc Benesch
          </p>
          <br></br>


          <p className="text-white mt-10">
            © {new Date().getFullYear()} Marc Benesch - pyucation. Alle Rechte vorbehalten.
          </p>
        </div>
        </motion.div>
      </main>
  );
}

export default PrivacyPolicy;
