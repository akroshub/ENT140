"use client";

import { FormEvent, useState } from "react";
import { Wallet } from "lucide-react";

// Компонент Pricing отвечает за цену и сбор email пользователя.
// Здесь же реализована простая логика "спасибо" после отправки формы.
export default function Pricing() {
  // Состояние для хранения текста из поля email.
  const [email, setEmail] = useState("");

  // Состояние для показа сообщения об успешной отправке.
  const [successMessage, setSuccessMessage] = useState("");

  // Состояние для хранения текста ошибки валидации.
  // Если строка не пустая, значит нужно показать красную подсказку под полем.
  const [emailError, setEmailError] = useState("");

  // Простая функция проверки email для MVP.
  // Эта "страшная" строка (regex) проверяет базовый формат email:
  // 1) до @ есть хотя бы один символ
  // 2) после @ есть хотя бы один символ
  // 3) после точки в конце есть хотя бы 2 символа (например: ru, com, kz)
  const isEmailValid = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(value.trim());
  };

  // Функция обработки отправки формы.
  // Она не отправляет данные на сервер (это MVP), а просто показывает успех и очищает поле.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Отменяем стандартное поведение формы (перезагрузку страницы).
    event.preventDefault();

    // Проверяем email. Если он некорректный, показываем ошибку и останавливаем отправку.
    if (!isEmailValid(email)) {
      setEmailError(
        "Пожалуйста, введи корректный email, чтобы мы знали, куда отправить гайд"
      );
      setSuccessMessage("");
      return;
    }

    // Если email корректный, убираем текст ошибки (если он был раньше).
    setEmailError("");

    // Показываем сообщение, которое ты просил для MVP.
    setSuccessMessage(
      "Спасибо! Ссылка на оплату (Kaspi) и получение гайда отправлена на ваш email. Если письмо не пришло в течение 5 минут, проверь папку Спам."
    );

    // Очищаем поле, чтобы пользователь видел, что форма обработана.
    setEmail("");
  };

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Купить гайд</h2>
        <p className="mt-2 text-slate-600">Единоразовый доступ к материалу и обновлениям.</p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-emerald-700">
          <Wallet className="h-5 w-5" />
          <span className="text-lg font-semibold">5000 KZT</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email для отправки ссылки на оплату и гайда
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => {
                // Сохраняем новый текст из поля в состояние.
                setEmail(event.target.value);

                // Когда пользователь исправляет ввод, сразу скрываем старую ошибку.
                if (emailError) {
                  setEmailError("");
                }
              }}
              placeholder="example@mail.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {/* Показываем сообщение об ошибке только если email введен неверно */}
            {emailError && <p className="mt-2 text-sm font-medium text-red-600">{emailError}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:w-auto sm:text-base"
          >
            Купить за 5000 KZT
          </button>
        </form>

        {/* Показываем сообщение только после успешной отправки формы */}
        {successMessage && (
          <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {successMessage}
          </p>
        )}
      </div>
    </section>
  );
}
