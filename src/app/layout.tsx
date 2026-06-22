import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { SmoothScrollProvider } from "@/components/portfolio/SmoothScrollProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rojo Andriamiarantsoa | Bioentrepreneure",
  description: "Portfolio de Rojo Fanambinantsoa ANDRIAMIARANTSOA - Innovation Santé, Sciences du Médicament & Bioentrepreneuriat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <TooltipProvider>
            <SmoothScrollProvider>
              {children}
              <Toaster />
            </SmoothScrollProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
