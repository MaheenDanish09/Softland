import { useState } from 'react';
import Reveal from './Reveal.jsx';

const faqs = [
  {
    q: 'Non consectetur a erat nam at lectus urna duis?',
    a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    q: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    q: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    a: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
  },
  {
    q: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    q: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
    a: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
  },
  {
    q: 'Perspiciatis quod quo quos nulla quo illum ullam?',
    a: 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.',
  },
];

export default function Faq() {
  // Items open independently (like the original); the first one starts open.
  const [open, setOpen] = useState(() => new Set([0]));

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="faq" className="faq section">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <div className="bs-container">
        <div className="grid grid-cols-12 gap-x-6">
          <Reveal animation="fade-up" delay={100} className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div>
              {faqs.map((item, i) => {
                const active = open.has(i);
                return (
                  <div
                    key={item.q}
                    className={`relative mb-[15px] overflow-hidden rounded-[5px] border p-5 last:mb-0 ${
                      active ? 'border-accent-20 bg-accent-3' : 'border-body-15 bg-surface'
                    }`}
                  >
                    <h3
                      onClick={() => toggle(i)}
                      className={`mb-0 mr-[30px] mt-0 flex cursor-pointer items-center text-[16px] font-semibold leading-6 transition-all duration-300 hover:text-accent ${
                        active ? 'text-accent' : ''
                      }`}
                    >
                      {item.q}
                    </h3>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        active ? 'visible grid-rows-[1fr] pt-2.5 opacity-100' : 'invisible grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <p className="mb-0 overflow-hidden">{item.a}</p>
                    </div>
                    <i
                      onClick={() => toggle(i)}
                      className={`bi bi-chevron-right absolute right-5 top-5 cursor-pointer text-[16px] leading-[0] transition-all duration-300 hover:text-accent ${
                        active ? 'rotate-90 text-accent' : ''
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
