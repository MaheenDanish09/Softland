import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Reveal from './Reveal.jsx';
import Lightbox from './Lightbox.jsx';

const images = Array.from({ length: 12 }, (_, i) => `/assets/img/app-gallery/app-gallery-${i + 1}.png`);

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="gallery" className="gallery section">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Gallery</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <Reveal animation="fade-up" delay={100} className="mx-auto w-full px-3">
        <Swiper
          className="init-swiper"
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          centeredSlides
          pagination={{ type: 'bullets', clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            992: { slidesPerView: 5, spaceBetween: 30 },
            1200: { slidesPerView: 7, spaceBetween: 30 },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={src}>
              <a
                href={src}
                onClick={(e) => {
                  e.preventDefault();
                  setLightboxIndex(i);
                }}
              >
                <img src={src} className="max-w-full" alt="" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
