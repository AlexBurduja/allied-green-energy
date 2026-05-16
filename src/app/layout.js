import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Allied Green Energy",
  description: "Colectare ulei uzat și diagnoză moleculară",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}