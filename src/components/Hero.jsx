import Reveal from './Reveal.jsx';

const buttonClass =
  'download-btn flex items-center justify-center rounded-[3px] bg-body-10 px-[30px] pb-2.5 pt-2 font-heading text-[15px] font-medium text-body transition-all duration-500 hover:bg-accent hover:text-contrast max-md:px-5 max-md:text-[14px]';

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="bs-container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <Reveal
            animation="zoom-out"
            className="hero-img col-span-12 lg:order-last lg:col-span-4"
          >
            <img src="/assets/img/phone_1.png" alt="Phone 1" className="phone-1" />
            <img src="/assets/img/phone_2.png" alt="Phone 2" className="phone-2" />
          </Reveal>

          <Reveal
            animation="fade-up"
            className="col-span-12 flex flex-col justify-center text-center md:text-left lg:col-span-8"
          >
            <h2 className="m-0 text-[48px] font-bold leading-[56px] max-md:text-[28px] max-md:leading-[36px]">
              Promote Your App with SoftLand
            </h2>
            <p className="mb-2.5 mt-[5px] text-[20px] font-normal text-body-70 max-md:mb-[30px] max-md:text-[18px] max-md:leading-6">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a href="#" className={buttonClass}>
                <i className="bi bi-google-play mr-2 text-[16px] leading-[0]" /> <span>Google Play</span>
              </a>
              <a href="#" className={`${buttonClass} ml-5`}>
                <i className="bi bi-apple mr-2 text-[16px] leading-[0]" /> <span>App Store</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
