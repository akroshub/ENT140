import { MessageCircle } from "lucide-react";

// Плавающая кнопка связи через WhatsApp.
// Она фиксируется в правом нижнем углу и всегда остается видимой при прокрутке.
export default function WhatsAppButton() {
  // Готовый текст, который автоматически подставится в сообщение WhatsApp.
  const message = "Привет! У меня есть вопрос по гайду ENT 140-Prompt";

  // Кодируем текст, чтобы он корректно передавался в ссылке.
  const encodedMessage = encodeURIComponent(message);

  // Ссылка на WhatsApp с шаблоном сообщения.
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
