import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/styles/globals.css";
import { Toaster } from "sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Jakub Majerčík - Portfolio",
  description: "Welcome to my portfolio! I'm a passionate web developer specializing in creating stunning and functional websites. Explore my projects, skills, and experience to see how I can bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
      <Toaster position="bottom-right" richColors expand={true} />

      </body>
    </html>
  );
}
