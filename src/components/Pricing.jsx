import Reveal from './Reveal.jsx';

const features = [
  'Quam adipiscing vitae proin',
  'Nec feugiat nisl pretium',
  'Nulla at volutpat diam uteera',
  'Pharetra massa massa ultricies',
  'Massa ultricies mi quis hendrerit',
];

const plans = [
  { name: 'Free Plan', icon: 'bi-box', price: '0', featured: false, included: 3 },
  { name: 'Business Plan', icon: 'bi-rocket', price: '29', featured: true, included: 5 },
  { name: 'Developer Plan', icon: 'bi-send', price: '49', featured: false, included: 5 },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section pb-[120px]">
      <Reveal animation="fade-up" className="section-title bs-container mb-10">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <Reveal animation="zoom-in" delay={100} className="bs-container">
        <div className="grid grid-cols-12 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="col-span-12 lg:col-span-4">
              <div
                className={`relative h-full rounded-[15px] bg-surface px-10 py-[60px] shadow-[0_3px_20px_-2px_rgba(0,0,0,0.1)] ${
                  plan.featured ? 'z-10 border-[3px] border-accent lg:scale-[1.15]' : ''
                }`}
              >
                <h3 className="mb-[15px] text-center text-[20px] font-semibold">{plan.name}</h3>

                <div className="icon mx-auto mb-5 mt-[30px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-accent transition-all duration-300">
                  <i className={`bi ${plan.icon} text-[28px] leading-[0] text-page transition-all duration-300`} />
                </div>

                <h4 className="mb-[25px] text-center font-heading text-[48px] font-bold text-accent">
                  <sup className="text-[28px]">$</sup>
                  {plan.price}
                  <span className="text-[18px] font-normal text-body-50"> / month</span>
                </h4>

                <ul className="mb-4 list-none px-0 py-5 text-left leading-5 text-body-80">
                  {features.map((text, i) => {
                    const na = i >= plan.included;
                    return (
                      <li key={text} className={`flex items-center py-2.5 ${na ? 'text-body-30' : ''}`}>
                        <i
                          className={`bi ${na ? 'bi-x text-body-30' : 'bi-check text-ok'} pr-[3px] text-[24px]`}
                        />{' '}
                        <span className={na ? 'line-through' : ''}>{text}</span>
                      </li>
                    );
                  })}
                </ul>

                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block rounded-[50px] border border-body-20 px-10 pb-2.5 pt-2 font-heading text-[16px] font-semibold text-body-80 transition-all duration-300 hover:bg-accent hover:text-contrast"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
