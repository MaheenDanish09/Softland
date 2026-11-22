import { useEffect, useState } from 'react';

const SPY_LINKS = ['#hero', '#about', '#features', '#pricing', '#contact'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');
  const [dropdowns, setDropdowns] = useState({ main: false, deep: false });

  // Adds .scrolled to <body> after 100px (header background + shadow)
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle('scrolled', window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: body class locks scrolling and shows the overlay
  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileOpen);
    return () => document.body.classList.remove('mobile-nav-active');
  }, [mobileOpen]);

  // Scroll-spy: highlights the nav link of the section currently in view
  useEffect(() => {
    const onScroll = () => {
      let current = null;
      SPY_LINKS.forEach((hash) => {
        const section = document.querySelector(hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          current = hash;
        }
      });
      setActiveHash(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const toggleDropdown = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation(); // don't let the parent link close the mobile menu
    setDropdowns((d) => ({ ...d, [key]: !d[key] }));
  };

  const linkClass = (hash) => (activeHash === hash ? 'active' : '');

  return (
    <header id="header" className="header fixed inset-x-0 top-0 flex items-center">
      <div className="bs-container-xl relative flex items-center justify-between">
        <a href="#" className="logo flex items-center">
          <h1 className="sitename">SoftLand</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className={linkClass('#hero')} onClick={closeMobile}>Home</a></li>
            <li><a href="#about" className={linkClass('#about')} onClick={closeMobile}>About</a></li>
            <li><a href="#features" className={linkClass('#features')} onClick={closeMobile}>Features</a></li>
            <li><a href="#pricing" className={linkClass('#pricing')} onClick={closeMobile}>Pricing</a></li>
            <li className="dropdown">
              <a href="#" className={dropdowns.main ? 'active' : ''} onClick={closeMobile}>
                <span>Dropdown</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown" onClick={toggleDropdown('main')} />
              </a>
              <ul className={dropdowns.main ? 'dropdown-active' : ''}>
                <li><a href="#" onClick={closeMobile}>Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#" className={dropdowns.deep ? 'active' : ''} onClick={closeMobile}>
                    <span>Deep Dropdown</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown" onClick={toggleDropdown('deep')} />
                  </a>
                  <ul className={dropdowns.deep ? 'dropdown-active' : ''}>
                    <li><a href="#" onClick={closeMobile}>Deep Dropdown 1</a></li>
                    <li><a href="#" onClick={closeMobile}>Deep Dropdown 2</a></li>
                    <li><a href="#" onClick={closeMobile}>Deep Dropdown 3</a></li>
                    <li><a href="#" onClick={closeMobile}>Deep Dropdown 4</a></li>
                    <li><a href="#" onClick={closeMobile}>Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#" onClick={closeMobile}>Dropdown 2</a></li>
                <li><a href="#" onClick={closeMobile}>Dropdown 3</a></li>
                <li><a href="#" onClick={closeMobile}>Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact" className={linkClass('#contact')} onClick={closeMobile}>Contact</a></li>
          </ul>
          <i
            className={`mobile-nav-toggle bi xl:hidden ${mobileOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileOpen((o) => !o)}
          />
        </nav>
      </div>
    </header>
  );
}
