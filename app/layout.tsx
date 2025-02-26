import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "./utils/lenis";
import { Provider } from "./utils/provider";
import { AppWrapper } from "./context/index";
import PreloaderContainer from "./components/preloader/preloader-container";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-lexend",
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-spacegrotesk",
});

export const metadata: Metadata = {
  title: "USMobile",
  description:
    "web site for a telecommunications company based out of New York.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ReactLenis root>
        <html lang="en">
          {/* prettier-ignore */}
          <body className={`${spacegrotesk.variable} ${lexend.variable} antialiased hidebottomscroll`}>
            {/* <Provider> */}
            <AppWrapper>
            <PreloaderContainer />
            <main>{children}</main>
            </AppWrapper>
            {/* </Provider> */}
          </body>
        </html>
      </ReactLenis>
    </>
  );
}
