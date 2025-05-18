import { useEffect, useRef, useState } from "react";

function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.backgroundColor = "#0c1524";
        headerRef.current.style.padding = "10px 0px";
      } else {
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.padding = "60px 0px";
      }
    });
  }, []);
  const [links] = useState(["Features", "Team", "Sign In"]);

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row px-[50px]">
        <a href="/">
          <img
            src="/assets/images/logo.svg"
            alt="Logo-image"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <nav>
          <ul className="flex justify-end gap-8 items-center text-[16px] font-[500]">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
