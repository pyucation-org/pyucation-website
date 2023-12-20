"use client";

import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
function Page() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <main className="bg-pyucation-2 bg-cover mt-40 pb-100 h-screen overflow-auto overflow-x-hidden flex flex-col items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Impressum</h1>
        <p className="mb-2"><strong>Marc Benesch - pyucation</strong></p>
        <p className="mb-2">Wiegandweg 4, 80937 München</p>
        <p className="mb-2">Telefon: +4915258521568</p>
        <p className="mb-2">Email: marc.benesch@pyucation.de</p>
        <p className="mb-2">Geschäftsführer: Marc Benesch</p>
        <p className="mb-2">Handelsregister: tbd</p>
        <p className="mb-2">Umsatzsteuer-ID: umsatzsteuerbefreit nach § 19 UStG</p>
        <p className="my-4">Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV): Marc Benesch</p>
        <p className="mt-4">© 2024 pyucation. All Rights Reserved.</p>
        <h1 className="text-4xl font-semibold mb-4 mt-10">Haftungsausschluss (Disclaimer)</h1>
        <h2 className="font-semibold">Haftung für Inhalte</h2>
        <p className="mb-2">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        <h2 className="font-semibold">Haftung für Links</h2>
        <p className="mb-2">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <h2 className="font-semibold">Urheberrecht</h2>
        <p className="mb-2">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
      </div>
    </main>
  );
}

export default Page;
