import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { footerSectionData } from "../../../staticData/homeSections.js";
import { logoSrc, navbarLists, socials } from "../../../staticData/navbar.js";

function FooterSection() {
  const phone = socials.find(({ icon }) => icon === "phone");
  const email = socials.find(({ icon }) => icon === "email");

  return (
    <footer className="relative overflow-hidden  bg-[radial-gradient(ellipse_at_8%_0%,rgba(36,91,112,0.22),transparent_38%),linear-gradient(115deg,#041323,#071b2d_58%,#061525)] text-[#bdcbd4] ">
      <div className="mx-auto w-[calc(100%_-_40px)] min-[601px]:w-[min(100%_-_48px,760px)] min-[901px]:w-[min(1140px,calc(100%_-_64px))]">
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 py-[39px] pb-[29px] min-[351px]:grid-cols-[repeat(2,minmax(0,1fr))] min-[601px]:grid-cols-[minmax(220px,1.4fr)_repeat(2,minmax(130px,1fr))] min-[601px]:gap-8 min-[601px]:py-[54px] min-[601px]:pb-[39px] min-[901px]:grid-cols-[minmax(230px,1.6fr)_repeat(3,minmax(130px,1fr))] min-[901px]:gap-[42px]">
          <div className="col-span-full max-w-[275px] min-[601px]:col-span-1">
            <a className="inline-flex items-center" href="#menu" aria-label="Rogeeta home">
              <img className="block h-auto w-[120px] min-[601px]:w-32" src={logoSrc} alt="Rogeeta" />
            </a>
            <p className="mt-[15px] mb-[5px] text-xs font-semibold text-[#eef4f5]">{footerSectionData.tagline}</p>
            <p className="m-0 max-w-[245px] text-[10px] leading-[1.7] text-[#92a6b2]">{footerSectionData.address}</p>
            <div className="mt-4 grid gap-[9px]">
              {phone && (
                <a className="inline-flex w-fit items-center gap-2 text-[10px] text-[#aebec7] transition-colors hover:text-[#83e4c7]" href={`tel:${phone.content.replace(/[^\d+]/g, "")}`}>
                  <Phone className="text-[#75d8bf]" size={13} />
                  {phone.content}
                </a>
              )}
              {email && (
                <a className="inline-flex w-fit items-center gap-2 text-[10px] text-[#aebec7] transition-colors hover:text-[#83e4c7]" href={`mailto:${email.content}`}>
                  <Mail className="text-[#75d8bf]" size={13} />
                  {email.content}
                </a>
              )}
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[10px]" aria-label={footerSectionData.supportTitle}>
            <h2 className="my-[3px] mb-1 text-xs font-[650] text-[#f2f6f7]">{footerSectionData.supportTitle}</h2>
            {footerSectionData.supportLinks.map(({ label, href }) => (
              <a className="text-[10px] leading-[1.4] text-[#9bafba] transition-colors hover:text-[#83e4c7]" href={href} key={label}>{label}</a>
            ))}
          </nav>

          <nav className="flex flex-col items-start gap-[10px]" aria-label={footerSectionData.navigationTitle}>
            <h2 className="my-[3px] mb-1 text-xs font-[650] text-[#f2f6f7]">{footerSectionData.navigationTitle}</h2>
            {navbarLists.map(({ name, toNav }) => (
              <a className="text-[10px] leading-[1.4] text-[#9bafba] transition-colors hover:text-[#83e4c7]" href={`#${toNav}`} key={toNav}>{name}</a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-[10px] min-[901px]:col-auto min-[601px]:col-start-2 min-[601px]:col-end-[-1] min-[901px]:col-auto">
            <h2 className="my-[3px] mb-1 text-xs font-[650] text-[#f2f6f7]">{footerSectionData.contactTitle}</h2>
            <p className="m-0 max-w-[185px] text-[10px] leading-[1.7] text-[#9bafba]">Questions about your care or an upcoming visit?</p>
            {email && (
              <a href={`mailto:${email.content}`} className="mt-[3px] inline-flex items-center gap-[5px] text-[10px] font-[650] text-[#7be0c2] transition-colors hover:text-[#83e4c7]">
                Send me a message <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="flex min-h-[54px] items-center justify-between gap-4 border-t border-[rgba(201,222,229,0.13)] text-[8px] text-[#8096a2] min-[601px]:min-h-[50px] min-[601px]:text-[9px]">
          <span>© {new Date().getFullYear()} {footerSectionData.copyright}</span>
          <a className="text-[#a5b7c0] transition-colors hover:text-[#83e4c7]" href="#menu" aria-label="Back to top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
