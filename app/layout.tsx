import type { Metadata } from "next";
import "./globals.css";

// Метаданные страницы: отображаются в названии вкладки браузера и описании.
export const metadata: Metadata = {
  title: "ENT 140-Prompt — Подготовка к ЕНТ 2026 с помощью ИИ",
  description:
    "Научись использовать ChatGPT как личного репетитора для ЕНТ. Библиотека супер-промптов для истории Казахстана, грамотности чтения и профильных предметов."
};

// Главный layout, который оборачивает все страницы приложения.
// Здесь мы подключаем глобальные стили и базовую структуру HTML.
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
