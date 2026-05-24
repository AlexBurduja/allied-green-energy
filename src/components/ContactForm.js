"use client";

import { useState } from "react";
import { Truck, Microscope, Star, Wrench, Phone, Mail } from "lucide-react";

const DEPTS = [
  { id: "colectare",  label: "Colectare",  icon: <Truck size={15} />,      cls: "g" },
  { id: "laborator",  label: "Laborator",  icon: <Microscope size={15} />, cls: "b" },
  { id: "fleet-gold", label: "Fleet Gold", icon: <Star size={15} />,       cls: "y" },
  { id: "service",    label: "Service",    icon: <Wrench size={15} />,      cls: "r" },
];

const EXTRA_FIELDS = {
  colectare: [
    { name: "location", label: "Localitate / Județ", placeholder: "ex. Cluj-Napoca, Cluj", type: "text" },
    { name: "quantity",  label: "Cantitate estimată (litri)", placeholder: "ex. 500", type: "text" },
    { name: "frequency", label: "Frecvență ridicare", placeholder: "Săptămânal / Lunar / La cerere", type: "text" },
  ],
  laborator: [
    { name: "equipment", label: "Tip echipament / motor", placeholder: "ex. Scania R500, excavator Caterpillar", type: "text" },
    { name: "machines",  label: "Număr de utilaje", placeholder: "ex. 12", type: "text" },
    { name: "urgency",   label: "Urgență", placeholder: "Standard (24h) / Urgent (12h)", type: "text" },
  ],
  "fleet-gold": [
    { name: "fleetSize",  label: "Număr vehicule în flotă", placeholder: "ex. 25", type: "text" },
    { name: "provider",   label: "Furnizor actual de analize", placeholder: "ex. laborator intern / niciun furnizor", type: "text" },
    { name: "package",    label: "Pachet de interes", placeholder: "Esențial / Pro / Enterprise", type: "text" },
  ],
  service: [
    { name: "burnerBrand", label: "Marca arzătorului", placeholder: "ex. Riello, Weishaupt, Oilon", type: "text" },
    { name: "lastService", label: "Ultima revizie", placeholder: "ex. acum 6 luni / necunoscută", type: "text" },
    { name: "issue",       label: "Problemă semnalată", placeholder: "ex. flacără instabilă, consum crescut", type: "text" },
  ],
};

export default function ContactForm() {
  const [dept, setDept] = useState("colectare");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [extra, setExtra] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleExtra(e) {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  }

  function handleDept(id) {
    setDept(id);
    setExtra({});
  }

  const activeDept = DEPTS.find((d) => d.id === dept);
  const extraFields = EXTRA_FIELDS[dept] || [];

  return (
    <div className="contact-layout">

      <div>
        <div className="dept-section">
          <h3>Alege departamentul</h3>

          <div className="dept-btns">
            {DEPTS.map((d) => (
              <button
                key={d.id}
                type="button"
                className={`dept-btn ${d.cls}${dept === d.id ? ` dept-btn-active` : ""}`}
                onClick={() => handleDept(d.id)}
              >
                {d.icon} {d.label}
              </button>
            ))}
          </div>
        </div>

        <div className="contact-lines">

          <div className="contact-line">
            <div className="contact-line-icon">
              <Phone size={18} />
            </div>
            <div>
              <strong>Telefon</strong>
              <span>+40 700 000 000</span>
            </div>
          </div>

          <div className="contact-line">
            <div className="contact-line-icon">
              <Mail size={18} />
            </div>
            <div>
              <strong>Email</strong>
              <span>office@allied.ro</span>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="smart-form">
          <h3>Solicitare — {activeDept.label}</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Nume</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Numele tău"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="adresa@email.ro"
                />
              </div>
            </div>

            {extraFields.map((f) => (
              <div key={f.name} className="form-group">
                <label htmlFor={`extra-${f.name}`}>{f.label}</label>
                <input
                  id={`extra-${f.name}`}
                  name={f.name}
                  type={f.type}
                  value={extra[f.name] || ""}
                  onChange={handleExtra}
                  placeholder={f.placeholder}
                />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="contact-message">Mesaj</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Detalii suplimentare..."
              />
            </div>

            <button type="submit" className="btn btn-green btn-full">
              Trimite Solicitarea
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}
