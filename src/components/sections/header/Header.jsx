import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LoadingContext } from "../../../App";

function Header({ logoSrc, navbarLists, socials }) {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("menu");

  function navigateHome(event) {
    event.preventDefault();
    setActiveSection("menu");

    if (window.location.hash !== "#menu") {
      window.history.pushState(null, "", "#menu");
    }

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };
    const updateActiveSection = () => {
      const sectionIds = navbarLists.map(({ toNav }) => toNav);
      const marker = header.getBoundingClientRect().height + 32;
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = sectionId;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };
    const updateScrolledState = () => {
      updateHeaderHeight();
      setIsScrolled(window.scrollY > 8);
      updateActiveSection();
    };
    const resizeObserver = new ResizeObserver(updateHeaderHeight);

    updateScrolledState();
    updateHeaderHeight();
    resizeObserver.observe(header);
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    window.addEventListener("resize", updateScrolledState);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateScrolledState);
      window.removeEventListener("resize", updateScrolledState);
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, [navbarLists]);

  return (
    <header
      ref={headerRef}
      
      className={`sticky top-0 z-20 mx-auto w-full border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[320ms] ease-in-out ${
        isScrolled
          ? "border-[rgba(210,239,235,0.16)] bg-[rgba(10,36,51,0.78)] shadow-[0_8px_24px_rgba(3,20,31,0.12)] backdrop-blur-[14px]"
          : "border-[rgba(255,255,255,0.12)] bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto w-[min(1140px,calc(100%_-_64px))] pt-3 max-[900px]:w-[calc(100%_-_48px)] max-[680px]:w-[calc(100%_-_40px)] max-[680px]:pt-[7px] max-[380px]:w-[calc(100%_-_32px)]">
        <section className="flex min-h-[29px] items-center justify-end gap-[23px] text-[#b4cbd1] max-[680px]:min-h-[25px] max-[680px]:gap-3" aria-label="Contact information">
          {socials.map((social) => (
            <div className="flex items-center gap-[7px] max-[680px]:gap-[5px]" key={social.icon}>
              {social.icon === "email" && <Mail className="text-[#75d8bf] max-[680px]:h-3 max-[680px]:w-3" size={14} />}
              {social.icon === "phone" && <Phone className="text-[#75d8bf] max-[680px]:h-3 max-[680px]:w-3" size={14} />}
              <p className="m-0 text-[10px] max-[680px]:text-[9px]">{social.content}</p>
            </div>
          ))}
        </section>
        <nav className="flex min-h-[74px] items-center justify-between gap-6 max-[900px]:gap-[17px] max-[680px]:min-h-[65px] max-[680px]:flex-wrap max-[680px]:gap-[10px] max-[680px]:py-2" aria-label="Main navigation">
          <a className="inline-flex shrink-0 items-center" href="#menu" aria-label="Rogeeta home" onClick={navigateHome}>
            <img className="block h-auto w-[145px] max-[900px]:w-[125px] max-[680px]:w-[115px]" src={logoSrc} alt="Rogeeta" />
          </a>
          <ul className="ml-auto flex list-none items-center justify-center gap-[clamp(13px,2.1vw,27px)] p-0 max-[900px]:gap-[13px] max-[680px]:order-3 max-[680px]:w-full max-[680px]:justify-between max-[680px]:gap-2 max-[380px]:flex-wrap max-[380px]:justify-center max-[380px]:gap-x-[10px]">
            {navbarLists.map((list) => (
              <li key={list.toNav}>
                <a
                  href={`#${list.toNav}`}
                  className={`relative inline-block py-3 text-[11px] text-[#d1dfe2] transition-colors duration-150 hover:text-white max-[900px]:text-[10px] max-[680px]:py-[5px] max-[680px]:pb-2 max-[380px]:text-[8px] after:absolute after:right-0 after:bottom-[5px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#49d4ad] after:transition-transform after:duration-150 hover:after:scale-x-100 max-[680px]:after:bottom-[3px] ${
                    activeSection === list.toNav ? "text-white after:scale-x-100" : ""
                  }`}
                  aria-current={activeSection === list.toNav ? "location" : undefined}
                  onClick={list.toNav === "menu" ? navigateHome : () => setActiveSection(list.toNav)}
                >
                  {list.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={`inline-flex min-h-[38px] shrink-0 items-center gap-[7px] rounded-md border border-[rgba(210,239,235,0.44)] px-3 text-[10px] font-semibold text-[#f3f8f8] transition-[border-color,background-color] duration-150 hover:border-[#49d4ad] hover:bg-[rgba(73,212,173,0.1)] max-[900px]:px-[9px] max-[900px]:text-[9px] max-[680px]:min-h-[34px] ${
              activeSection === "schedule" ? "border-[#49d4ad] bg-[rgba(73,212,173,0.14)]" : ""
            }`}
            href="#schedule"
            aria-current={activeSection === "schedule" ? "location" : undefined}
            onClick={() => setActiveSection("schedule")}
          >
            Book a visit <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
