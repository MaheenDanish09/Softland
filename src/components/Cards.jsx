import Reveal from './Reveal.jsx';

const items = [
  {
    num: '01',
    title: 'Sign Up',
    link: false,
    text: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    delay: 100,
  },
  {
    num: '02',
    title: 'Repellat Nihil',
    link: true,
    text: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest',
    delay: 200,
  },
  {
    num: '03',
    title: 'Ad ad velit qui',
    link: true,
    text: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis',
    delay: 300,
  },
];

export default function Cards() {
  return (
    <section id="cards" className="cards section">
      <div className="bs-container">
        <Reveal animation="zoom-out" className="steps-img mb-4 text-center">
          <img src="/assets/img/steps.svg" alt="" className="max-w-[575px] max-sm:max-w-full" />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {items.map((item) => (
            <Reveal
              key={item.num}
              animation="fade-up"
              delay={item.delay}
              className="col-span-12 lg:col-span-4"
            >
              <div className="group relative h-full bg-body-3 px-[30px] py-[50px] transition-all duration-300 ease-in-out hover:bg-accent hover:pb-[70px] hover:pt-[30px]">
                <span className="block text-[28px] font-bold text-accent group-hover:text-contrast">
                  {item.num}
                </span>
                <h4 className="my-5 p-0 text-[24px] font-semibold">
                  {item.link ? (
                    <a
                      href=""
                      className="text-heading after:absolute after:inset-0 after:z-[1] after:content-[''] group-hover:text-contrast"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h4>
                <p className="m-0 p-0 text-[15px] text-body-60 group-hover:text-contrast">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
