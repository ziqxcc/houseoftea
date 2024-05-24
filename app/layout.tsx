import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Home/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House of Tea",
  description:
    "We're your spot for yummy bites and tasty teas. With almost forty-five branches in Abu Dhabi and one each in Dubai and Sharjah, we're here to make your snack time awesome. Owned by Mr. Majed Saad Abdullah Ali Almenhali and Rashid Thaniyullathil, our menu is all about quick and tasty. Whether you're picking up food or ordering from your car, we've got you covered. Join us for simple and delicious treats. House of Tea Cafeteria is about bringing joy to your taste buds, whether you're in Abu Dhabi, Dubai, or Sharjah. Come enjoy good food with us, wherever you are!",
  keywords: [
    "Best karak tea in Abu Dhabi",
    "Famous karak in Abu Dhabi",
    "Best cafeteria in Abu Dhabi",
    "Top-rated cafeterias in Abu Dhabi",
    "Authentic karak tea Abu Dhabi",
    "Best takeaway tea in Abu Dhabi",
    "Tea delivery in Abu Dhabi",
    "Affordable cafeterias in Abu Dhabi",
    "Best tea near me ",
    "Best cafeteria near me",
  ],
  metadataBase: new URL("https://houseoftea-cafe.vercel.app/"),
  openGraph: {
    url: "https://houseoftea-cafe.vercel.app/",
    description:
      "We're your spot for yummy bites and tasty teas. With almost forty-five branches in Abu Dhabi and one each in Dubai and Sharjah, we're here to make your snack time awesome. Owned by Mr. Majed Saad Abdullah Ali Almenhali and Rashid Thaniyullathil, our menu is all about quick and tasty. Whether you're picking up food or ordering from your car, we've got you covered. Join us for simple and delicious treats. House of Tea Cafeteria is about bringing joy to your taste buds, whether you're in Abu Dhabi, Dubai, or Sharjah. Come enjoy good food with us, wherever you are!",
    images: ["https://houseoftea-cafe.vercel.app/assets/logo.png"],
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
