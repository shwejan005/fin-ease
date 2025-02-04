import "./globals.css";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/ui/Navbar"; 
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import { League_Spartan, Silkscreen } from "next/font/google";
import { Toaster } from "react-hot-toast";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const silkScreen = Silkscreen({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "FinEase",
  description: "A Cool Financial Education Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${leagueSpartan.className} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <div className="min-h-screen">
                <div className="border-b ">
                  <Navbar />
                </div>
                <main>
                  {children}
                </main>
              </div>
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
