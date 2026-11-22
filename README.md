# SoftLand – React + Tailwind + Flowbite + GSAP

A rebuild of the BootstrapMade **SoftLand** landing page. Colours, fonts, spacing,
text, section order and every image come from the original template files.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Stack

| Piece | Used for |
| --- | --- |
| React 18 + Vite | Components, one per section (`src/components`) |
| Tailwind CSS 3 | Layout and styling. Breakpoints are set to Bootstrap's (576/768/992/1200/1400) so the layout switches at the same widths as the original |
| Flowbite | Tailwind plugin + the Flowbite **Modal** powers the gallery lightbox |
| GSAP + ScrollTrigger | Scroll reveal animations (`Reveal.jsx`), replacing AOS with the same distances, scales, timing and offset |
| Swiper | Gallery and testimonial sliders (same settings as the original) |
| Plain CSS | The template's colour variables, the nav menu, hero, pricing rings and Swiper tweaks (`src/index.css`) |

## Colours

Change the whole palette from the `:root` block in `src/index.css`
(`--accent-color`, `--heading-color`, etc.). Tailwind classes such as
`bg-accent`, `text-heading` and `text-body-60` read from those variables.

## Images

All images are the originals, in `public/assets/img`. To swap one, replace the
file with the same name (or edit the path in the component).

## Contact form

Without a backend the form simulates a successful send. To receive messages,
create `.env` with `VITE_CONTACT_ENDPOINT=https://your-endpoint` (receives a
JSON POST with name, email, subject, message).

## Licence note

The free SoftLand template requires the "Designed by BootstrapMade" credit in
the footer (`src/components/Footer.jsx`). Remove it only with the Pro licence:
https://bootstrapmade.com/license/
