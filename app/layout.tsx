import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhantshrestha.com.np"),
  title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
  description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences, modern web applications, custom WordPress platforms, and creative technology solutions.",
  keywords: ["Siddhant Shrestha", "Full Stack Developer", "Next.js", "React", "Portfolio", "WordPress Development", "Nepal Systems", "Creative Technologist", "Tailwind CSS"],
  authors: [{ name: "Siddhant Shrestha" }],
  creator: "Siddhant Shrestha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddhantshrestha.com.np",
    siteName: "Siddhant Shrestha Portfolio",
    title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
    description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences, modern web applications, and creative technology solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
    description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences and web applications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Siddhant Shrestha",
    "url": "https://siddhantshrestha.com.np",
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Zylux"
    },
    "sameAs": [
      "https://github.com/Siddh07",
      "https://www.linkedin.com/in/siddhant-shrestha-341853198/"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Siddhant Shrestha Portfolio",
    "url": "https://siddhantshrestha.com.np"
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-neutral-950 text-white min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
