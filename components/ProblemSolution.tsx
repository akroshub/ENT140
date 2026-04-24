import { AlertTriangle, CheckCircle2 } from "lucide-react";

// Компонент показывает проблему и решение:
// 1) Почему обычный запрос в ChatGPT часто не помогает на ЕНТ.
// 2) Что именно дает наш гайд.
export default function ProblemSolution() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Почему обычный ChatGPT не дает результат для ЕНТ
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>Он отвечает слишком общо, без структуры под формат ЕНТ.</li>
            <li>Без правильных промптов сложно получить точные объяснения по школьным темам.</li>
            <li>Нет системы тренировок: ответы есть, прогресса часто нет.</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <CheckCircle2 className="h-5 w-5" />
            Как помогает наш гайд
          </h2>
          <ul className="space-y-3 text-blue-100">
            <li>Готовые промпты для разбора сложных тем по предметам ЕНТ.</li>
            <li>Шаблоны для тренировки: теория, тесты, проверка ошибок и повторение.</li>
            <li>Пошаговый план, который превращает ChatGPT в личного репетитора.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
