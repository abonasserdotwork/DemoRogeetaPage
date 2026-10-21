import { useRef } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesSectionData } from "../../../staticData/homeSections.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ServicesSection() {
  const { eyebrow, title, description, note, items } = servicesSectionData;
  const servicesRef = useRef(null);

  useGSAP(
    () => {
      const section = servicesRef.current;
      const cards = gsap.utils.toArray(".service-card");

      if (!section || !cards.length) return;

      gsap.set(cards, {
        autoAlpha: 0,
        y: 40,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top+=180",
          end: `+=${cards.length * 300}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card) => {
        timeline.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "none",
        });
      });
    },
    { scope: servicesRef },
  );

  return (
    <section
      ref={servicesRef}
      id="services"
      aria-labelledby="services-title"
      className="relative z-[1] mt-[78px] bg-[#f1f7f6] px-0 py-10 min-[681px]:py-14"
    >
      <div className="mx-auto w-[min(100%_-_40px,500px)] min-[681px]:w-[min(100%_-_48px,760px)] min-[901px]:w-[min(1140px,calc(100%_-_64px))]">
        <header className="mx-auto mb-6 text-center min-[681px]:mb-8">
          <span className="text-[10px] font-[750] tracking-[1.8px] text-[#258b7c]">
            {eyebrow}
          </span>

          <h2
            id="services-title"
            className="my-[9px] mb-2 text-[27px] font-semibold tracking-[-1.1px] text-[#173546] min-[681px]:text-[clamp(25px,3vw,34px)]"
          >
            {title}
          </h2>

          <p className="mx-auto max-w-[330px] text-[12px] leading-[1.65] text-[#6a7f89] min-[681px]:max-w-none min-[681px]:text-[13px]">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-[9px] min-[681px]:grid-cols-2 min-[901px]:grid-cols-3 min-[681px]:gap-[11px] min-[901px]:gap-4">
          {items.map(
            (
              {
                icon: Icon,
                title: itemTitle,
                description: itemDescription,
              },
              index,
            ) => (
              <article
                key={`${itemTitle}-${index}`}
                className="service-card flex min-h-[100px] items-center gap-[10px] rounded-[11px] border border-[#e7eeee] bg-white px-[15px] py-[13px] shadow-[0_5px_16px_rgba(21,57,70,0.07)] min-[681px]:min-h-[120px] min-[681px]:px-3 min-[681px]:py-[19px] min-[901px]:gap-[13px] min-[901px]:px-[18px]"
              >
                <span className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-[9px] bg-[#e5f6ef] text-[#187967]">
                  {Icon && <Icon size={20} />}
                </span>

                <div className="min-w-0 flex-1">
                  <span className="text-[9px] tracking-[1px] text-[#5c9a90]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="my-1 text-[12px] font-[650] text-[#173546]">
                    {itemTitle}
                  </h3>

                  <p className="text-[10px] leading-[1.5] text-[#71848d]">
                    {itemDescription}
                  </p>
                </div>

                <ArrowRight
                  className="shrink-0 text-[#278c79]"
                  size={17}
                />
              </article>
            ),
          )}
        </div>

        
      </div>
    </section>
  );
}

export default ServicesSection;