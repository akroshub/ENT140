// Блок FAQ отвечает на частые вопросы перед покупкой.
// Это снижает сомнения и помогает быстрее принять решение.
export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Частые вопросы</h2>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">Как я получу гайд?</h3>
            <p className="mt-1 text-slate-600">
              Сразу после оплаты на почту придет ссылка на Notion с гайдом и инструкцией.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              Подойдет ли гайд для ChatGPT-4o?
            </h3>
            <p className="mt-1 text-slate-600">
              Да, промпты работают во всех популярных версиях ИИ, включая ChatGPT-4o.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              Нужны ли специальные технические навыки?
            </h3>
            <p className="mt-1 text-slate-600">
              Нет, гайд написан простым языком для школьников: бери шаблон и сразу применяй.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
