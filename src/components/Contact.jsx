import { useState } from 'react';
import Reveal from './Reveal.jsx';

// To receive real messages, set VITE_CONTACT_ENDPOINT in a .env file
// (it should accept a JSON POST with name, email, subject and message).
// Without it the form just simulates a successful send.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const info = [
  { icon: 'bi-geo-alt', title: 'Address', text: 'A108 Adam Street, New York, NY 535022', delay: 200 },
  { icon: 'bi-telephone', title: 'Call Us', text: '+1 5589 55488 55', delay: 300 },
  { icon: 'bi-envelope', title: 'Email Us', text: 'info@example.com', delay: 400 },
];

const inputClass =
  'block w-full rounded-none border border-body-20 bg-page-50 px-[15px] py-2.5 text-[14px] leading-normal text-body shadow-none placeholder:text-body-30 focus:border-accent focus:shadow-none focus:outline-none focus:ring-0';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('loading');
    setError('');

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <Reveal animation="fade-up" className="section-title bs-container">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Reveal>

      <Reveal animation="fade" delay={100} className="bs-container">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          <div className="col-span-12 lg:col-span-4">
            {info.map((item, i) => (
              <Reveal
                key={item.title}
                animation="fade-up"
                delay={item.delay}
                className={`group flex ${i > 0 ? 'mt-10' : ''}`}
              >
                <i
                  className={`bi ${item.icon} mr-[15px] flex h-11 w-11 shrink-0 items-center justify-center rounded-[50px] bg-accent-8 text-[20px] text-accent transition-all duration-300 ease-in-out group-hover:bg-accent group-hover:text-contrast`}
                />
                <div>
                  <h3 className="mb-[5px] p-0 text-[18px] font-bold">{item.title}</h3>
                  <p className="mb-0 p-0 text-[14px]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-8">
            <Reveal
              as="form"
              animation="fade-up"
              delay={200}
              onSubmit={handleSubmit}
              className="h-full"
            >
              <div className="grid grid-cols-12 gap-x-6 gap-y-6">
                <div className="col-span-12 md:col-span-6">
                  <input type="text" name="name" className={inputClass} placeholder="Your Name" required />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input type="email" name="email" className={inputClass} placeholder="Your Email" required />
                </div>
                <div className="col-span-12">
                  <input type="text" name="subject" className={inputClass} placeholder="Subject" required />
                </div>
                <div className="col-span-12">
                  <textarea name="message" rows={6} className={inputClass} placeholder="Message" required />
                </div>

                <div className="col-span-12 text-center">
                  {status === 'loading' && <div className="form-message-loading">Loading</div>}
                  {status === 'error' && (
                    <div className="mb-6 bg-[#df1529] p-[15px] text-left font-semibold text-white">{error}</div>
                  )}
                  {status === 'sent' && (
                    <div className="mb-6 bg-ok p-[15px] text-center font-semibold text-white">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  <button
                    type="submit"
                    className="rounded-[50px] border-0 bg-accent px-[30px] py-2.5 text-contrast transition-all duration-[400ms] hover:bg-accent-75"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
