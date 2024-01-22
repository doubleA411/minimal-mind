import { DM_Sans } from "next/font/google";
import "./globals.css"; 
import { ThemeProvider } from "@/components/theme-provider";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Minimal Mind",
  description: "Minimal mind's suite of tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
