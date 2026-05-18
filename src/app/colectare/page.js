import Link from "next/link";
import { Truck, Scale, Wrench, Settings, Package } from "lucide-react";

export const metadata = {
  title: "Colectare & Logistică — Allied Green Energy",
  description: "Colectare ulei uzat cu flotă ADR autorizată, acoperire națională în 48–72h.",
};

export default function ColectarePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Colectare & Logistică</span>
          </div>

          <div className="page-hero-tag">Pilonul 01 — Verde Allied</div>

          <h1>
            Colectare rapidă.
            <br />
            <em>Documentație completă.</em>
          </h1>

          <p>
            Ridicăm, documentăm și valorificăm uleiul uzat.
            Tu nu mai ai nimic de gestionat.
          </p>
        </div>
      </div>

      <section style={{ background: "white", padding: "6rem 0" }}>
        <div className="container">

          <div className="two-col">

            <div>
              <div className="section-tag green">Cele 3 Garanții Allied</div>
              <h2>
                Promptitudine.
                <br />
                Legalitate. Trasabilitate.
              </h2>

              <div className="feature-list">

                <div className="feature-item">
                  <div className="feature-icon">
                    <Truck size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Flotă Autorizată ADR</h4>
                    <p>
                      Ajungem oriunde în România în 48–72h.
                      Nu ai nevoie de container propriu —
                      aducem echipamentul nostru.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Scale size={18} color="var(--green-mid)" />
                  </div>
                  <div>
                    <h4>Conformitate Garantată</h4>
                    <p>
                      Formular de acompaniere, fișă de securitate,
                      raport de transfer — documentație completă
                      pentru Garda de Mediu, de fiecare dată.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <div className="steps-box">
                <h3>Cum funcționează</h3>

                <div className="step">
                  <div className="step-num">01</div>
                  <div>
                    <h4>Solicitare</h4>
                    <p>Ne contactezi telefonic sau prin formularul online.</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">02</div>
                  <div>
                    <h4>Ridicare</h4>
                    <p>
                      Echipa Allied ridică uleiul uzat la data
                      și ora convenite.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-num">03</div>
                  <div>
                    <h4>Trasabilitate</h4>
                    <p>
                      Primești toate documentele necesare —
                      complet, fără urmărire din partea ta.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="segment-section">
        <div className="container">

          <div className="section-tag green">Cine Lucrează cu Allied</div>
          <h2>Colectăm de la oricine generează ulei uzat.</h2>

          <div className="segment-grid" style={{ marginTop: "2.5rem" }}>

            <div className="segment-card">
              <div className="segment-icon">
                <Wrench size={22} color="var(--green-mid)" />
              </div>
              <h4>Service Auto & Camioane</h4>
              <p>
                Emiteți uleiuri de motor, transmisie și frână
                în cantități regulate. Allied colectează
                săptămânal sau la cerere, cu documentație completă.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Truck size={22} color="var(--green-mid)" />
              </div>
              <h4>Transport & Logistică</h4>
              <p>
                Flote de camioane și utilaje generează
                cantități semnificative. Programăm ridicările
                în jurul orarului vostru de lucru.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Settings size={22} color="var(--green-mid)" />
              </div>
              <h4>Industrie & Producție</h4>
              <p>
                Uleiuri hidraulice, de turbine, de compresoare —
                categorii diferite, documentare separată.
                Allied gestionează tot fluxul.
              </p>
            </div>

            <div className="segment-card">
              <div className="segment-icon">
                <Package size={22} color="var(--green-mid)" />
              </div>
              <h4>Distribuitori Lubrifianți</h4>
              <p>
                Oferiți clienților un serviciu complet:
                vânzare lubrifiant plus colectare ulei uzat
                cu documentare legală inclusă.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
