import Reveal from './Reveal.jsx';

const Check = () => <i className="bi bi-check pr-1 text-[20px] text-accent" />;

const intro = (
  <p className="italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua.
  </p>
);

const longText = (
  <p className="mb-0">
    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum
  </p>
);

const listClass = 'mb-4 list-none p-0 [&>li:last-child]:pb-0 [&>li]:flex [&>li]:items-center [&>li]:pb-2.5';

const rows = [
  {
    img: 'features-1.svg',
    imgAnim: 'zoom-out',
    delay: 100,
    flip: false,
    body: (
      <>
        <h3 className="text-[26px] font-bold">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
        {intro}
        <ul className={listClass}>
          <li><Check /><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><Check /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><Check /> <span>Ullam est qui quos consequatur eos accusamus.</span></li>
        </ul>
      </>
    ),
  },
  {
    img: 'features-2.svg',
    imgAnim: 'zoom-out',
    delay: 200,
    flip: true,
    body: (
      <>
        <h3 className="text-[26px] font-bold">Corporis temporibus maiores provident</h3>
        {intro}
        {longText}
      </>
    ),
  },
  {
    img: 'features-3.svg',
    imgAnim: 'zoom-out',
    delay: 0,
    flip: false,
    body: (
      <>
        <h3 className="text-[26px] font-bold">Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
        <p>
          Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia
          voluptatem hic voluptas dolor doloremque.
        </p>
        <ul className={listClass}>
          <li><Check /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><Check /><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><Check /> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
        </ul>
      </>
    ),
  },
  {
    img: 'features-4.svg',
    imgAnim: 'zoom-out',
    delay: 0,
    flip: true,
    body: (
      <>
        <h3 className="text-[26px] font-bold">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
        {intro}
        {longText}
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <div className="bs-container">
        {rows.map((row, i) => (
          <div
            key={row.img}
            className={`grid grid-cols-12 items-center gap-x-6 gap-y-6 text-body-80 ${
              i > 0 ? 'mt-[100px] max-[640px]:mt-10' : ''
            }`}
          >
            <Reveal
              animation={row.imgAnim}
              delay={row.delay}
              className={`col-span-12 flex items-center md:col-span-5 ${row.flip ? 'order-1 md:order-2' : ''}`}
            >
              <img src={`/assets/img/${row.img}`} className="max-w-full" alt="" />
            </Reveal>
            <Reveal
              animation="fade-up"
              delay={row.delay}
              className={`col-span-12 md:col-span-7 ${row.flip ? 'order-2 md:order-1' : ''}`}
            >
              {row.body}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
