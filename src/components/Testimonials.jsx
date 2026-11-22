import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Reveal from './Reveal.jsx';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <Reveal animation="fade-up" delay={100} className="bs-container">
        <Swiper
          className="init-swiper"
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ type: 'bullets', clickable: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.name}>
              <div className="text-center">
                <img
                  src={`/assets/img/testimonials/testimonials-${i + 1}.jpg`}
                  className="mx-auto w-[120px] rounded-full border-4 border-page"
                  alt=""
                />
                <h3 className="mb-[5px] mt-2.5 text-[20px] font-bold">{t.name}</h3>
                <h4 className="mb-[15px] mt-0 text-[14px] text-body-60">{t.role}</h4>
                <div className="mb-[15px]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <i key={s} className="bi bi-star-fill mx-px text-star" />
                  ))}
                </div>
                <p className="mx-auto mb-[15px] italic lg:w-4/5">
                  <i className="bi bi-quote relative -left-[5px] inline-block text-[26px] leading-[0] text-accent-50" />
                  <span>{t.text}</span>
                  <i className="bi bi-quote relative -right-[5px] top-2.5 inline-block text-[26px] leading-[0] text-accent-50 [transform:scale(-1,-1)]" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
}
