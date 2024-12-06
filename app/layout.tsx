import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "../assets/styles/globals.css";

const baloo = Baloo_2({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jack Muir | Full Stack Developer",
  description:
    "I'm Jack, I am a student software engineer based in the UK. I am passionate about web development specialising in MERN Stack development and I am always looking to learn new technologies.",
  keywords: "Jack Muir, Full Stack Developer, MERN Stack, Web Development, UK, Student Software Engineer, React, Node.js, MongoDB, Express, TypeScript, JavaScript, HTML, CSS, TailwindCSS, Next.js, Vercel, Git, GitHub, Docker, Netlify, Heroku, Cloud, Serverless, REST, API, CI/CD, Agile, Jira, Slack, Discord, Zoom, Microsoft Teams",
  icons: {
    icon: '/JM.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
