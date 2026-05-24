import Link from "next/link";
import { Droplets, ShieldCheck, Leaf, FlaskConical, SlidersHorizontal, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Combustibil Industrial Ecotherm & Ulei Rerafinat — Allied Green Energy",
  description: "Ecotherm Light 4: combustibil industrial rerafinat, 10.500 kcal/kg, conformitate BAT. Ulei de bază Group I/II, amprentă carbon -80%. Livrare în IBC sigilate cu buletin per lot.",
  keywords: "Ecotherm Light 4, combustibil industrial, ulei rerafinat, rerafinare ulei uzat, BAT, ulei de baza rerafinat, combustibil arzatoare, Group I Group II",
};

export default function RafinarePage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <Link href="/">Acasă</Link>
            <span>›</span>
            <span>Rerafinare & Energie</span>
          </div>

          <div className="page-hero-tag">
            Pilonul 03 — Rafinărie Proprie
          </div>

          <h1>
            Energie regenerată.
            <br />
            <em>Eficiență termică garantată.</em>
          </h1>

          <p>
            Transformăm uleiul uzat în combustibil
            industrial și ulei de bază rerafinat.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              className="btn btn-green"
            >
              Cere Ofertă
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline-light"
            >
              Service Arzătoare
            </Link>
          </div>

        </div>
      </div>

      <section className="spec-section">
        <div className="container">

          <div className="section-tag green">Produsele Noastre</div>
          <h2>Două produse. Aceeași precizie.</h2>

          <div className="products-grid">

            <div className="product-card">
              <div className="product-card-head">
                <div className="product-badge green">Combustibil Industrial</div>
                <h3>Ecotherm Light 4</h3>
                <p>Combustibil lichid obținut prin rerafinarea uleiului uzat. Produs în conformitate cu standardele BAT europene și livrat în cuburi sigilate cu buletin de analiză per lot.</p>
              </div>

              <div className="ecotherm-specs">
                <div className="spec-row">
                  <span className="label">Putere calorică</span>
                  <span className="value">10.500 kcal/kg</span>
                </div>
                <div className="spec-row">
                  <span className="label">Conținut sulf</span>
                  <span className="value">Redus semnificativ</span>
                </div>
                <div className="spec-row">
                  <span className="label">Ambalaj</span>
                  <span className="value">Cuburi IBC sigilate</span>
                </div>
                <div className="spec-row">
                  <span className="label">Trasabilitate</span>
                  <span className="value">Buletin per lot</span>
                </div>
                <div className="spec-row">
                  <span className="label">Standard</span>
                  <span className="value">BAT UE</span>
                </div>
              </div>

              <div className="product-card-footer">
                <Link href="/contact" className="btn btn-green">Cere Ofertă Ecotherm</Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-head">
                <div className="product-badge blue">Ulei de Bază</div>
                <h3>Ulei de Bază Rerafinat</h3>
                <p>Ulei de bază Group I/II obținut prin rerafinare avansată a uleiului uzat colectat. Calitate comparabilă cu uleiul virgin, la cost redus și cu amprentă de carbon cu 80% mai mică.</p>
              </div>

              <div className="ecotherm-specs">
                <div className="spec-row">
                  <span className="label">Clasificare</span>
                  <span className="value">Group I / Group II</span>
                </div>
                <div className="spec-row">
                  <span className="label">Viscozitate</span>
                  <span className="value">Conform specificație</span>
                </div>
                <div className="spec-row">
                  <span className="label">Conținut metale</span>
                  <span className="value">Sub limita detectabilă</span>
                </div>
                <div className="spec-row">
                  <span className="label">Reducere carbon</span>
                  <span className="value">~80% vs. virgin</span>
                </div>
                <div className="spec-row">
                  <span className="label">Standard</span>
                  <span className="value">BAT UE</span>
                </div>
              </div>

              <div className="product-card-footer">
                <Link href="/contact" className="btn btn-blue">Cere Ofertă Ulei Bază</Link>
              </div>
            </div>

          </div>

          <div className="product-benefits-row">
            <div className="product-benefit-item">
              <Droplets size={20} color="var(--green-mid)" />
              <div>
                <h4>Calitate Garantată</h4>
                <p>Fiecare lot vine cu buletin de analiză. Zero surprize în producție.</p>
              </div>
            </div>
            <div className="product-benefit-item">
              <ShieldCheck size={20} color="var(--green-mid)" />
              <div>
                <h4>Conformitate Totală</h4>
                <p>Procese BAT certificate. Documentație completă pentru audit.</p>
              </div>
            </div>
            <div className="product-benefit-item">
              <Leaf size={20} color="var(--green-mid)" />
              <div>
                <h4>Economie Circulară</h4>
                <p>Uleiul uzat redevine resursă. Amprenta de carbon redusă cu 80%.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="antifrauda-section">
        <div className="container">

          <div className="section-tag green">Diferențiatorul Allied</div>
          <h2>Garanția Anti-Fraudă.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Piața combustibililor alternativi are o problemă de încredere.
            Noi am proiectat un sistem prin care clientul poate verifica
            independent fiecare lot primit.
          </p>

          <div className="antifrauda-grid">

            <div className="antifrauda-item">
              <div className="antifrauda-num">01</div>
              <h4>Cuburi IBC Sigilate</h4>
              <p>
                Fiecare IBC pleacă din rafinărie sigilat cu bandă
                holografică numerotată. Sigiliul rupt la recepție
                = lot refuzat automat, fără discuție.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">02</div>
              <h4>Probă Martor 90 de Zile</h4>
              <p>
                O mostră din fiecare lot este păstrată în laboratorul
                Allied timp de 90 de zile. Dacă apar neclarități,
                proba martor este analizată gratuit la cerere.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">03</div>
              <h4>Buletin de Analiză per Lot</h4>
              <p>
                Fiecare livrare vine însoțită de un buletin de analiză
                cu parametri măsurați: putere calorică, viscozitate,
                sulf, punct de inflamabilitate și densitate.
              </p>
            </div>

            <div className="antifrauda-item">
              <div className="antifrauda-num">04</div>
              <h4>Lanț de Trasabilitate Complet</h4>
              <p>
                Codul de lot de pe IBC leagă livrarea de:
                locația de colectare → data intrării în rafinărie →
                data analizei → data expediției. Totul verificabil.
              </p>
            </div>

          </div>

          <div className="antifrauda-cta">
            <p>
              Analiza de recepție a clientului diferă de buletinul nostru?
              <strong> Returnăm lotul integral, fără costuri.</strong>
            </p>
            <Link href="/contact" className="btn btn-green">
              Solicită un Lot de Probă
            </Link>
          </div>

        </div>
      </section>

      <section className="anatomy-section">
        <div className="container">

          <div className="section-tag green">Procesul de Producție</div>
          <h2>Anatomia Ecotherm Light 4.</h2>
          <p style={{ color: "var(--gray-500)", fontSize: ".9rem", fontWeight: "300", lineHeight: "1.75", maxWidth: "560px", marginTop: ".5rem" }}>
            Fiecare lot de Ecotherm Light 4 parcurge trei etape controlate,
            conform standardelor BAT (Best Available Techniques) europene.
            Niciun lot nu iese din rafinărie fără buletin de analiză per lot.
          </p>

          <div className="anatomy-steps">

            <div className="anatomy-step">
              <div className="anatomy-step-num">01</div>
              <div className="anatomy-step-icon">
                <FlaskConical size={22} color="var(--green-mid)" />
              </div>
              <h3>Rerafinare Termo-Chimică</h3>
              <p>
                Uleiul uzat colectat este supus unui proces de distilare
                fracționată și tratament chimic. Contaminanții, metalele
                și apa sunt eliminate selectiv — rezultând un amestec
                de fracții hidrocarbonate cu putere calorică ridicată.
              </p>
              <div className="anatomy-step-tag">Distilare · Tratament chimic · Filtrare</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">02</div>
              <div className="anatomy-step-icon">
                <SlidersHorizontal size={22} color="var(--green-mid)" />
              </div>
              <h3>Standardizare & Blending</h3>
              <p>
                Fracțiile rezultate sunt combinate în proporții controlate
                pentru a atinge specificațiile tehnice țintă: viscozitate,
                punct de inflamabilitate, conținut de sulf redus și
                putere calorică de 10.500 kcal/kg.
              </p>
              <div className="anatomy-step-tag">Blending · Control viscozitate · Analiză sulf</div>
            </div>

            <div className="anatomy-step-arrow">→</div>

            <div className="anatomy-step">
              <div className="anatomy-step-num">03</div>
              <div className="anatomy-step-icon">
                <BadgeCheck size={22} color="var(--green-mid)" />
              </div>
              <h3>Certificare & Livrare</h3>
              <p>
                Fiecare lot primit un buletin de analiză individual,
                semnat de laboratorul intern Allied. Livrarea se face
                în cuburi IBC sigilate cu etichetă de trasabilitate
                și cod lot unic.
              </p>
              <div className="anatomy-step-tag">Buletin per lot · IBC sigilat · Cod trasabilitate</div>
            </div>

          </div>

          <div className="bat-banner">
            <ShieldCheck size={20} color="var(--green-mid)" />
            <p>
              <strong>Conformitate BAT:</strong>{" "}
              Procesele Allied respectă directivele europene privind
              Cele Mai Bune Tehnici Disponibile (BAT — Best Available Techniques)
              pentru rerafinarea uleiurilor uzate. Documentație completă disponibilă la cerere.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}