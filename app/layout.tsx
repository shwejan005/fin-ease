import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { League_Spartan, Silkscreen } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const silkScreen = Silkscreen({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.className} antialiased`}>
        <ConvexClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <div className="min-h-screen">
                <main>{children}</main>
              </div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ThemeProvider>
          <Toaster />
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
