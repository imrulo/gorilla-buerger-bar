import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Gorilla Burger Bar | Best Burgers in Belgrade",
  description: "Experience the ultimate urban gourmet burger in Belgrade. Flame-grilled, handcrafted, and unapologetically bold flavors.",
  openGraph: {
    title: "Gorilla Burger Bar | Best Burgers in Belgrade",
    description: "Experience the ultimate urban gourmet burger in Belgrade. Flame-grilled and handcrafted.",
    url: "https://gorillaburgerbar.rs",
    siteName: "Gorilla Burger Bar",
    images: [
      {
        url: "/assets/SaveInsta.to_626424049_18082479973952699_5060627047892586301_n.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Gorilla Burger Bar",
    "image": "https://gorillaburgerbar.rs/assets/SaveInsta.to_626424049_18082479973952699_5060627047892586301_n.jpg",
    "url": "https://gorillaburgerbar.rs",
    "telephone": "+381621001009",
    "priceRange": "$$",
    "menu": "https://wolt.com/sr/srb/belgrade/restaurant/gorila-burger",
    "servesCuisine": "Gourmet Burgers",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Belgrade, Serbia",
      "addressLocality": "Belgrade",
      "postalCode": "11000",
      "addressCountry": "RS"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "00:00"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} bg-brand-black`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
