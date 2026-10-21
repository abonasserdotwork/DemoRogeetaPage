import { CalendarDays, MessageCircle } from "lucide-react";
import WhatsAppIcon from "../../ui/WhatsAppIcon.jsx";
import { appointmentSectionData } from "../../../staticData/homeSections.js";

function AppointmentsSection() {
  const {
    eyebrow,
    title,
    description,
    formLabels,
    genderOptions,
    whatsappNumber,
    privacyNotice,
    availabilityNote,
  } = appointmentSectionData;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = {
      name: formData.get("name"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      email: formData.get("email"),
    };
    const message = [
      "Hello, I would like to request an appointment.",
      "",
      `Name: ${details.name}`,
      `Age: ${details.age}`,
      `Gender: ${details.gender}`,
      `Email: ${details.email}`,
    ].join("\n");
    const phone = whatsappNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.assign(whatsappUrl);
  }

  return (
    <section
      className="scroll-mt-6 bg-[radial-gradient(ellipse_at_90%_20%,rgba(73,212,173,0.11),transparent_36%),#f3f8f7] px-0 py-[58px] min-[681px]:py-[88px]"
      id="schedule"
      aria-labelledby="appointments-title"
    >
      <div className="mx-auto grid w-[min(100%_-_40px,500px)] grid-cols-1 items-center gap-6 min-[681px]:w-[min(100%_-_48px,760px)] min-[681px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[681px]:gap-[35px] min-[901px]:w-[min(1080px,calc(100%_-_64px))] min-[901px]:gap-[70px]">
        <div>
          <span className="text-[10px] font-[750] tracking-[1.8px] text-[#258b7c]">{eyebrow}</span>
          <h2 id="appointments-title" className="my-[12px] mb-[14px] text-[32px] leading-[1.15] font-[620] tracking-[-1.5px] text-[#173546] min-[681px]:text-[clamp(30px,4vw,44px)]">{title}</h2>
          <p className="m-0 max-w-[410px] text-[14px] leading-[1.85] text-[#667d87]">{description}</p>
          <div className="mt-[26px] flex items-center gap-[11px] text-xs leading-[1.6] text-[#476672]">
            <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] bg-[#e0f3eb] text-[#187967]"><CalendarDays size={18} /></span>
            <span>{availabilityNote}</span>
          </div>
        </div>

        <form className="rounded-2xl border border-[#e2ece9] bg-white p-[21px_17px] shadow-[0_18px_50px_rgba(18,62,80,0.09)] min-[381px]:p-6 min-[901px]:p-[29px]" onSubmit={handleSubmit}>
          <div className="mb-[23px] flex items-center gap-3">
            <span className="grid h-[41px] w-[41px] shrink-0 place-items-center rounded-[11px] bg-[#e5f6ef] text-[#147a71]"><WhatsAppIcon size={19} /></span>
            <div>
              <h3 className="m-0 text-[15px] font-[680] text-[#173546]">Your appointment request</h3>
              <p className="mt-1 mb-0 text-[10px] leading-[1.5] text-[#71848d]">Fill in your details to continue securely to WhatsApp.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-[14px] gap-y-4 min-[381px]:grid-cols-2">
            <label className="grid gap-[7px] text-[11px] font-[650] text-[#395562]">
              <span>{formLabels.name}</span>
              <input
                className="min-h-[43px] w-full rounded-[7px] border border-[#dce7e6] bg-[#fbfdfc] px-3 text-xs font-normal text-[#173546] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#9aaab0] focus:border-[#42b997] focus:shadow-[0_0_0_3px_rgba(73,212,173,0.15)]"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="e.g. Alex Morgan"
                maxLength={100}
                required
              />
            </label>
            <label className="grid gap-[7px] text-[11px] font-[650] text-[#395562]">
              <span>{formLabels.age}</span>
              <input
                className="min-h-[43px] w-full rounded-[7px] border border-[#dce7e6] bg-[#fbfdfc] px-3 text-xs font-normal text-[#173546] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#9aaab0] focus:border-[#42b997] focus:shadow-[0_0_0_3px_rgba(73,212,173,0.15)]"
                type="number"
                name="age"
                min="1"
                max="120"
                inputMode="numeric"
                placeholder="Your age"
                required
              />
            </label>
            <label className="grid gap-[7px] text-[11px] font-[650] text-[#395562]">
              <span>{formLabels.gender}</span>
              <select className="min-h-[43px] w-full rounded-[7px] border border-[#dce7e6] bg-[#fbfdfc] px-3 text-xs font-normal text-[#173546] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#42b997] focus:shadow-[0_0_0_3px_rgba(73,212,173,0.15)]" name="gender" defaultValue="" required>
                <option value="" disabled>Select an option</option>
                {genderOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="grid gap-[7px] text-[11px] font-[650] text-[#395562] min-[381px]:col-span-full">
              <span>{formLabels.email}</span>
              <input
                className="min-h-[43px] w-full rounded-[7px] border border-[#dce7e6] bg-[#fbfdfc] px-3 text-xs font-normal text-[#173546] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#9aaab0] focus:border-[#42b997] focus:shadow-[0_0_0_3px_rgba(73,212,173,0.15)]"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </label>
          </div>

          <button className="mt-5 flex min-h-[47px] w-full cursor-pointer items-center justify-center gap-[9px] rounded-[7px] border-0 bg-[#49d4ad] text-xs font-bold text-[#103d4c] transition-[transform,background-color] duration-150 hover:-translate-y-px hover:bg-[#70e2c1] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(23,121,103,0.35)]" type="submit">
            {formLabels.submit} <WhatsAppIcon size={17} />
          </button>
          <p className="mt-3 mb-0 text-[10px] leading-[1.65] text-[#74878f]">{privacyNotice}</p>
        </form>
      </div>
    </section>
  );
}

export default AppointmentsSection;
