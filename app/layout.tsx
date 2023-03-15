import "./globals.css";
import { Providers } from "./Providers";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Abhrajit Ray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
