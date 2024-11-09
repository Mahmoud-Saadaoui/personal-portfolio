import { AppProvider } from "@/context/AppContext";
import "../globals.css";
import { Tajawal } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

const ubuntu = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Portfolio",
  description: "Web developer based on Tunisia",
  keywords: [
    "مهندس مواقع", "مطور مواقع", "محمود سعداوي", "مبرمج MERN", "تطوير ويب",
    "portfolio développeur", "Mahmoud Saadaoui", "MERN stack", "développement web", 
    "freelance Tunisie", "création de sites web", "next js developer", "Full Stack Developer",
    "developer portfolio", "Mahmoud Saadaoui", "MERN stack developer", "web developer",
    "freelance Tunisia", "web development", "React developer", "Tailwind CSS"
  ],
  authors: [
    {
      name: "Saadaoui Mahmoud",
    },
  ],
  icons: {
    icon: "../../../public/favicon.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string 
  };
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = params
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${ubuntu.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
