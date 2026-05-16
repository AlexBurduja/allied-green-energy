export default function ContactPage() {
  return (
    <>
      <div className="page-hero">

        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>

        <div className="page-hero-inner">

          <div className="breadcrumb">
            <span>Acasă</span>
            <span>›</span>
            <span>Contact</span>
          </div>

          <div className="page-hero-tag">
            Centru de Comandă
          </div>

          <h1>
            Suntem aici să intervenim.
            <br />
            <em>Rapid și profesionist.</em>
          </h1>

          <p>
            Contactează echipa Allied pentru
            colectare, laborator sau parteneriate.
          </p>

        </div>
      </div>

      <div style={{ background: "var(--off-white)" }}>
        <div className="container">

          <div className="contact-layout">

            <div>

              <div className="dept-section">

                <h3>
                  Alege departamentul
                </h3>

                <div className="dept-btns">

                  <button className="dept-btn g">
                    🟢 Colectare
                  </button>

                  <button className="dept-btn b">
                    🔬 Laborator
                  </button>

                  <button className="dept-btn y">
                    ⭐ Fleet Gold
                  </button>

                  <button className="dept-btn r">
                    🔧 Service
                  </button>

                </div>

              </div>

              <div className="contact-lines">

                <div className="contact-line">

                  <div className="contact-line-icon">
                    📞
                  </div>

                  <div>
                    <strong>
                      Telefon
                    </strong>

                    <span>
                      +40 700 000 000
                    </span>
                  </div>

                </div>

                <div className="contact-line">

                  <div className="contact-line-icon">
                    ✉️
                  </div>

                  <div>
                    <strong>
                      Email
                    </strong>

                    <span>
                      office@allied.ro
                    </span>
                  </div>

                </div>

              </div>

            </div>

            <div>

              <div className="smart-form">

                <h3>
                  Trimite o solicitare
                </h3>

                <input
                  type="text"
                  placeholder="Nume"
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "1rem",
                  }}
                />

                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "1rem",
                  }}
                />

                <textarea
                  placeholder="Mesaj"
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "1rem",
                  }}
                />

                <button className="btn btn-green">
                  Trimite
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}