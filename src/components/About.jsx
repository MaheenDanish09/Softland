import Reveal from './Reveal.jsx';

const boxes = [
  {
    icon: 'bi-buildings',
    title: 'Eius provident',
    text: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem',
    delay: 200,
  },
  {
    icon: 'bi-clipboard-pulse',
    title: 'Rerum aperiam',
    text: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia',
    delay: 300,
  },
  {
    icon: 'bi-command',
    title: 'Veniam omnis',
    text: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti',
    delay: 400,
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Delares sapiente',
    text: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda',
    delay: 500,
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <Reveal animation="fade-up" delay={100} className="bs-container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 xl:items-center">
          <div className="content col-span-12 xl:col-span-5">
            <h3 className="mb-2 inline-block rounded-[7px] bg-accent-5 px-5 py-2.5 text-[16px] font-medium leading-[19px] text-accent">
              About Us
            </h3>
            <h2 className="font-bold">Ducimus rerum libero reprehenderit cumque</h2>
            <p>
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus
              et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
              tempora deleniti soluta.
            </p>
            <a
              href="#"
              className="group inline-flex items-center justify-center rounded-[5px] bg-accent px-6 py-3 font-heading text-[16px] font-medium tracking-[1px] text-contrast transition-all duration-300 hover:bg-accent-80 hover:pr-[19px]"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ml-[5px] text-[18px] leading-[0] transition-all duration-300 group-hover:ml-2.5" />
            </a>
          </div>

          <div className="col-span-12 xl:col-span-7">
            <div className="icon-boxes grid grid-cols-12 gap-x-6 gap-y-6">
              {boxes.map((box, i) => (
                <Reveal
                  key={box.title}
                  animation="fade-up"
                  delay={box.delay}
                  className="col-span-12 md:col-span-6"
                >
                  <div
                    className={`group rounded-[10px] bg-surface px-10 py-[50px] shadow-[0px_10px_50px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${
                      i === 1 || i === 3 ? 'md:-mt-10' : ''
                    }`}
                  >
                    <i
                      className={`bi ${box.icon} mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent-5 text-[32px] leading-[0] text-accent transition-all duration-[400ms] ease-out group-hover:bg-accent group-hover:text-contrast`}
                    />
                    <h3 className="mb-2.5 text-[24px] font-bold">{box.title}</h3>
                    <p className="mb-0">{box.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
