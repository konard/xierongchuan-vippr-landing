import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, BookOpen, CirclePlay, Menu, ShieldCheck, Sparkles, Video } from 'lucide-react';
import './style.css';

const heroPhotos = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Securika 2026, фото ${index + 1}`,
  image: `https://images.unsplash.com/photo-${[
    '1517048676732-d65bc937f952',
    '1521737604893-d14cc237f11d',
    '1511578314322-379afb476865',
    '1497366754035-f200968a6e72',
    '1556761175-b413da4baf72',
    '1540575467063-178a50c2df87',
    '1551836022-d5d88e9218df',
    '1505373877841-8d25f7d46678',
    '1527529482837-4698179dc6ce',
    '1556761175-5973dc0f32e7',
  ][index]}?auto=format&fit=crop&w=1800&q=80`,
}));

const aiOptions = [
  ['Детекция человека', 'Бесплатно'], ['Пересечение линии', 'Бесплатно'], ['Контроль зоны', 'Бесплатно'],
  ['Обнаружение транспорта', 'Бесплатно'], ['Саботаж камеры', 'Бесплатно'], ['Умный поиск', 'Бесплатно'],
  ['Распознавание лиц', 'Платно'], ['Подсчет посетителей', 'Платно'], ['Распознавание номеров', 'Платно'],
  ['Тепловые карты', 'Платно'], ['Детекция касок', 'Платно'], ['Аналитика очередей', 'Платно'],
];

export function App() {
  const [slide, setSlide] = useState(0);
  const current = heroPhotos[slide];
  const gallery = useMemo(() => heroPhotos.slice().reverse(), []);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/expo" aria-label="ISON"><span>ISON</span><small>Видеонаблюдение</small></a>
        <nav><a href="#video">Видео</a><a href="#catalog">Каталог</a><a href="#ai">AI</a><a href="#gallery">Фото</a></nav>
        <a className="phone" href="tel:+74956400000">+7 495 640-00-00</a>
        <button className="iconOnly" aria-label="Меню"><Menu size={22} /></button>
      </header>

      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,12,18,.9), rgba(8,12,18,.44)), url(${current.image})` }}>
        <div className="heroContent">
          <p className="eyebrow">Securika 2026</p>
          <h1>Компания ISON представила новинки бренда на главной выставке систем безопасности Securika</h1>
          <div className="actions">
            <a className="primary" href="#video"><CirclePlay size={20} />Смотреть видео с выставки</a>
            <a className="secondary" href="#catalog"><BookOpen size={20} />Полистать каталог</a>
          </div>
        </div>
        <div className="sliderPanel">
          <button aria-label="Предыдущий слайд" onClick={() => setSlide((slide + 9) % 10)}><ArrowLeft /></button>
          <span>{String(slide + 1).padStart(2, '0')} / 10</span>
          <button aria-label="Следующий слайд" onClick={() => setSlide((slide + 1) % 10)}><ArrowRight /></button>
        </div>
      </section>

      <section id="video" className="band videoBand">
        <div><p className="eyebrow">Видеоотчет</p><h2>Посмотрите видео с выставки</h2></div>
        <div className="videoFrame">
        <div className="videoFrame">
          <iframe title="Видео с выставки ISON" src="https://vkvideo.ru/video_ext.php?oid=-54731764&id=456242037&hd=2" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
          <a href="https://vkvideo.ru/video-54731764_456242037" target="_blank" rel="noreferrer"><CirclePlay size={24} />Открыть видео с выставки</a>
        </div>
          <a href="https://vkvideo.ru/video-54731764_456242037" target="_blank" rel="noreferrer"><CirclePlay size={24} />Открыть видео с выставки</a>
        </div>
      </section>

      <section id="catalog" className="catalog band">
        <div className="copy"><p className="eyebrow">Каталог ISON</p><h2>Полистайте каталог оборудования ISON</h2><p>Объемный просмотр имитирует печатный каталог: крупные страницы, понятные стрелки и подсказка для первого действия.</p><button><BookOpen size={20} />Нажмите чтобы полистать</button></div>
        <div className="book"><div className="page left">AI-аналитика<br />стр. 5</div><div className="page right">Новые камеры<br />стр. 6</div></div>
      </section>

      <section id="ai" className="band ai">
        <p className="eyebrow">24 опции искусственного интеллекта</p>
        <h2>Новинки AI в оборудовании ISON</h2>
        <div className="optionGrid">{aiOptions.map(([name, type]) => <article key={name}><Sparkles size={18} /><strong>{name}</strong><span className={type === 'Бесплатно' ? 'free' : 'paid'}>{type}</span></article>)}</div>
      </section>

      <section className="promo">
        <ShieldCheck size={46} /><div><h2>Компания ISON - участник главной международной выставки систем безопасности Securika</h2><p>Единый баннер для главной, разделов товаров, карточек, контактов и страницы заказа.</p></div><a className="primary" href="/expo">Читать подробнее</a><a className="secondary" href="#video"><Video size={20} />Смотреть видео</a>
      </section>

      <section id="gallery" className="gallery band">
        <h2>Фото с выставки</h2>
        <div className="galleryTrack">{gallery.map((item) => <img key={item.id} src={item.image} alt={item.title} />)}</div>
      </section>

      <footer><strong>ISON</strong><span>Более 15 лет на рынке РФ</span><span>Системы видеонаблюдения и безопасности</span></footer>
    </main>
  );
}

const root = document.getElementById('root');
if (root) {
  window.isonExpoRoot ??= createRoot(root);
  window.isonExpoRoot.render(<App />);
}
