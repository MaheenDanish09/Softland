export default function Footer() {
  const social = ['bi-twitter-x', 'bi-facebook', 'bi-instagram', 'bi-skype', 'bi-linkedin'];

  return (
    <footer id="footer" className="footer dark-background relative bg-page px-0 py-[30px] text-center text-[14px] text-body">
      <div className="bs-container">
        <h3 className="relative mb-[15px] mt-0 p-0 text-[36px] font-bold">SoftLand</h3>
        <p className="mb-[30px] p-0 italic">
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
        </p>

        <div className="mb-[30px] flex justify-center">
          {social.map((icon) => (
            <a
              key={icon}
              href=""
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-center text-[16px] leading-none text-contrast transition-all duration-300 hover:bg-accent-80 hover:text-contrast"
            >
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>

        <div className="bs-container">
          <div className="border-t border-body-10 pt-[25px]">
            <span>Copyright</span> <strong className="px-1">SoftLand</strong> <span>All Rights Reserved</span>
          </div>
          <div className="pt-[5px] text-[13px]">
            {/* Licensing: these credit links must stay unless you bought the Pro version.
                https://bootstrapmade.com/license/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> &amp;{' '}
            <a href="https://foliopage.com">FolioPage</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
