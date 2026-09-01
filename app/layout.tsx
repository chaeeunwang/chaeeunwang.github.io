import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chaeeunwang-portfolio.imchaen.chatgpt.site'),
  title: '왕채은 | PM & Developer Portfolio',
  description:
    '문제를 정의하고 기술로 구현하는 왕채은의 PM·AI 백엔드 개발자 포트폴리오',
  openGraph: {
    title: '왕채은 포트폴리오',
    description: 'PM · AI BACKEND DEVELOPER',
    type: 'website',
    images: [
      {
        url: 'https://chaeeunwang-portfolio.imchaen.chatgpt.site/og.png',
        width: 1730,
        height: 909,
        alt: '왕채은 포트폴리오 — PM · AI BACKEND DEVELOPER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '왕채은 포트폴리오',
    description: 'PM · AI BACKEND DEVELOPER',
    images: ['https://chaeeunwang-portfolio.imchaen.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
