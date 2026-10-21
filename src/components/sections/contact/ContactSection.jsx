import { ArrowUpRight, Mail, Phone } from "lucide-react";
import WhatsAppIcon from "../../ui/WhatsAppIcon.jsx";
import { contactSectionData } from "../../../staticData/homeSections.js";

function ContactSection() {
  const { eyebrow, title, description, phone, email, whatsappNumber, whatsappLabel } =
    contactSectionData;
  const whatsappDigits = whatsappNumber.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent("Hello, I have a question about your clinic.");

  return (
    <section
      className="scroll-mt-6 bg-[#0a2433de] py-[55px] min-[681px]:py-[72px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid w-[min(100%_-_40px,500px)] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[35px] max-[680px]:grid-cols-1 max-[680px]:gap-[22px] min-[681px]:w-[min(100%_-_48px,760px)] min-[901px]:w-[min(1080px,calc(100%_-_64px))] min-[901px]:gap-16">
        <div>
          <span className="text-[10px] font-[750] tracking-[1.8px] text-[#79dfc1]">{eyebrow}</span>
          <h2 id="contact-title" className="my-[12px] mb-[14px] max-w-[430px] text-[32px] leading-[1.15] font-[620] tracking-[-1.5px] text-[#f4f8f8] min-[681px]:text-[clamp(30px,4vw,44px)]">{title}</h2>
          <p className="m-0 text-[14px] leading-[1.85] text-[#c0d2d8]">{description}</p>
        </div>
        <div className="grid gap-[10px]">
          <a className="flex min-h-[62px] items-center gap-3 rounded-[9px] border border-[rgba(225,239,239,0.15)] bg-white/[0.06] px-[14px] py-[10px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[rgba(121,223,193,0.6)]" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
            <Phone className="shrink-0 text-[#79dfc1]" size={18} />
            <span className="grid flex-1 gap-1"><small className="text-[9px] text-[#b7cbd1]">Call the clinic</small><strong className="text-xs font-[650] text-[#f2f7f8]">{phone}</strong></span>
            <ArrowUpRight className="text-[#8baeb7]" size={16} />
          </a>
          <a className="flex min-h-[62px] items-center gap-3 rounded-[9px] border border-[rgba(225,239,239,0.15)] bg-white/[0.06] px-[14px] py-[10px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[rgba(121,223,193,0.6)]" href={`mailto:${email}`}>
            <Mail className="shrink-0 text-[#79dfc1]" size={18} />
            <span className="grid flex-1 gap-1"><small className="text-[9px] text-[#b7cbd1]">Send an email</small><strong className="text-xs font-[650] text-[#f2f7f8]">{email}</strong></span>
            <ArrowUpRight className="text-[#8baeb7]" size={16} />
          </a>
          <a
            className="mt-[3px] inline-flex min-h-[42px] w-fit items-center gap-2 rounded-[7px] bg-[#49d4ad] px-[14px] text-[11px] font-bold text-[#103d4c] transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#70e2c1] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(121,223,193,0.55)]"
            href={`https://wa.me/${whatsappDigits}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={17} />
            {whatsappLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
