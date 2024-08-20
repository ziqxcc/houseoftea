
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Common/Navbar";
import Booking from "@/components/Common/Booking";
import Footer from "@/components/Common/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import '../components/Common/Analytics'

const inter = Inter({ subsets: ["latin"] });

NProgress.configure({ showSpinner: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScrollToTop />
        {children}
        <Booking />
        <Footer />
      </body>
    </html>
  );
}
