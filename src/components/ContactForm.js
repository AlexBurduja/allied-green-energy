"use client";

import { useState } from "react";
import { Truck, Microscope, Star, Wrench, Phone, Mail } from "lucide-react";

const DEPTS = [
  { id: "colectare",  label: "Colectare",  icon: <Truck size={15} />,      cls: "g" },
  { id: "laborator",  label: "Laborator",  icon: <Microscope size={15} />, cls: "b" },
  { id: "fleet-gold", label: "Fleet Gold", icon: <Star size={15} />,       cls: "y" },
  { id: "service",    label: "Service",    icon: <Wrench size={15} />,      cls: "r" },
];

export default function ContactForm() {
  const [dept, setDept] = useState("colectare");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const activeDept = DEPTS.find((d) => d.id === dept);

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
                onClick={() => setDept(d.id)}
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

            <div className="form-group">
              <label htmlFor="contact-message">Mesaj</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Descrie solicitarea ta..."
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
