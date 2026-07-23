import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
  description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences, modern web applications, custom WordPress platforms, and creative technology solutions.",
  keywords: ["Siddhant Shrestha", "Full Stack Developer", "Next.js", "React", "Portfolio", "WordPress Development", "Nepal Systems", "Creative Technologist", "Tailwind CSS"],
  authors: [{ name: "Siddhant Shrestha" }],
  creator: "Siddhant Shrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siddhantshrestha.com.np",
    siteName: "Siddhant Shrestha Portfolio",
    title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
    description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences, modern web applications, and creative technology solutions.",
    images: [{ url: "https://i0.wp.com/cdn.siddhantshrestha.com.np/wp-content/uploads/2026/06/profile.avif?resize=694,694" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Shrestha | Full Stack Developer & Creative Technologist",
    description: "Personal portfolio of Siddhant Shrestha, a Full Stack Developer specializing in building exceptional digital experiences and web applications.",
    images: ["https://i0.wp.com/cdn.siddhantshrestha.com.np/wp-content/uploads/2026/06/profile.avif?resize=694,694"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-white min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
