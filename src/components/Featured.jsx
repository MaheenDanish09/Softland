import Reveal from './Reveal.jsx';

const cards = [
  {
    img: 'cards-4.png',
    icon: 'bi-hdd-stack',
    title: 'Explore Your Team',
    text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    delay: null,
  },
  {
    img: 'cards-2.png',
    icon: 'bi-brightness-high',
    title: 'Digital Whiteboard',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    delay: 200,
  },
  {
    img: 'cards-6.png',
    icon: 'bi-calendar4-week',
    title: 'Design To Development',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    delay: 300,
  },
];

function Card({ card }) {
  return (
    <div className="group relative mb-5 flex h-full flex-col break-words border-0 bg-surface text-body shadow-[0px_2px_12px_rgba(0,0,0,0.1)]">
      <div className="relative px-5 pb-0 pt-5">
        <img src={`/assets/img/${card.img}`} alt="" className="max-w-full" />
        <div
          className="absolute bottom-[-36px] flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-page bg-accent-soft text-center text-[28px] leading-[0] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-contrast"
          style={{ left: 'calc(50% - 32px)' }}
        >
          <i className={`bi ${card.icon}`} />
        </div>
      </div>
      <h2 className="mb-3 mt-[50px] p-0 text-center text-[24px] font-bold">{card.title}</h2>
      <p className="mb-0 px-[30px] pb-[30px] text-[14px] leading-6">{card.text}</p>
    </div>
  );
}

export default function Featured() {
  return (
    <section id="featured" className="featured section">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Save your time to using SoftLand</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <div className="bs-container">
        <Reveal animation="fade-up" delay={100} className="grid grid-cols-12 gap-x-6 gap-y-6">
          {cards.map((card) =>
            card.delay === null ? (
              <div key={card.title} className="col-span-12 md:col-span-4">
                <Card card={card} />
              </div>
            ) : (
              <Reveal
                key={card.title}
                animation="fade-up"
                delay={card.delay}
                className="col-span-12 md:col-span-4"
              >
                <Card card={card} />
              </Reveal>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}
