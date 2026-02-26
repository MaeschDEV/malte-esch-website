import { Metadata } from "next";
import BackButtonImpressum from "../components/backButtonImpressum";

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
        <BackButtonImpressum></BackButtonImpressum>
      </div>
      <div className="p-10 pt-16">
        <h1 className="mb-5 text-2xl font-semibold">Impressum</h1>
        <p>Angaben gemäß § 5 DDG</p>
        <br></br>
        <p>Malte Esch</p>
        <br></br>
        <p>Niederkasseler Straße 15 </p>
        <p>53842 Troisdorf</p>
        <br></br>
        <p className="font-bold">Vertreten durch:</p>
        <p>Malte Esch</p>
        <br></br>
        <p className="font-bold">Kontakt:</p>
        <p>E-Mail: esch-malte@proton.me</p>
        <br></br>
        <p className="font-bold">Haftungsausschluss:</p>
        <br></br>
        <p className="font-bold">Haftung für Links:</p>
        <br></br>
        <p>
          Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links
          umgehend entfernen.
        </p>
        <br></br>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <br></br>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Malte Esch - Impressum",
  description: "Impressum of malte-esch.de.",
  openGraph: {
    title: "Malte Esch - Impressum",
    description: "Impressum of malte-esch.de.",
    url: "https://malte-esch.de/impressum",
    siteName: "Malte Esch",
    images: [
      {
        url: "/avatar.webp",
        width: 720,
        height: 720,
        alt: "Malte Esch",
      },
      {
        url: "/background.webp",
        width: 2560,
        height: 1928,
        alt: "Background",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default page;
