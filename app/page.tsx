import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import ProblemSolution from "@/components/ProblemSolution";
import WhatsAppButton from "@/components/WhatsAppButton";

// Главная страница MVP.
// Она просто собирает секции лендинга в нужном порядке.
export default function HomePage() {
  return (
    <main>
      {/* Первый экран: ценностное предложение и кнопка действия */}
      <Hero />

      {/* Объясняем проблему и показываем решение через наш продукт */}
      <ProblemSolution />

      {/* Блок с ценой и формой сбора email */}
      <Pricing />

      {/* Короткий блок с частыми вопросами перед завершением страницы */}
      <FAQ />

      {/* Плавающая кнопка связи, видна всегда даже при скролле */}
      <WhatsAppButton />
    </main>
  );
}
