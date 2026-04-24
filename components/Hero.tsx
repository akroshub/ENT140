"use client";

import { ArrowDownCircle } from "lucide-react";

// Компонент Hero — это первый экран сайта.
// Он объясняет основную ценность продукта и ведет пользователя к покупке.
export default function Hero() {
  // Эта функция запускается при клике на кнопку.
  // Она находит блок оплаты по id и плавно прокручивает страницу к нему.
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <p className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Гайд для подготовки к ЕНТ
        </p>

        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Сдай ЕНТ на 140 баллов, превратив ChatGPT в личного репетитора
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Получи готовые промпты и пошаговую систему, чтобы учиться быстрее, закрывать
          пробелы по темам и тренироваться в формате, похожем на реальные задания ЕНТ.
        </p>

        <button
          type="button"
          onClick={handleScrollToPricing}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
        >
          Купить гайд
          <ArrowDownCircle className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
