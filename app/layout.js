import { AppProvider } from "@/context/AppContext";
import "./globals.css";
import { Tajawal } from "next/font/google";

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
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className}`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
