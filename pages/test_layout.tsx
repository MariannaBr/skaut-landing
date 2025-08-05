import "../../globals.css";
import type { Metadata } from "next";
import Footer from "../htw/Footer";

export const metadata: Metadata = {
  title: "Elivate powered by Karibu.ai",
  description: "Meet Zoe, Your Guide to Elivated Nursing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-white min-h-screen flex-col justify-between">
        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
