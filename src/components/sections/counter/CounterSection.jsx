
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { counterSectionData } from "../../../staticData/homeSections.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function CounterSection() {
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray(".counter-value");

      counters.forEach((el) => {
        const target = Number(el.dataset.value);
        if (!Number.isFinite(target)) return;

        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 2,
          ease: "power2.out",
          snap: { val: 1 },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toLocaleString();
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: counterRef }
  );

  return (
    <section
      ref={counterRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_50%,rgba(91,212,178,0.1),transparent_29%),radial-gradient(circle_at_88%_50%,rgba(120,177,220,0.11),transparent_30%),linear-gradient(110deg,#102e40,#123d53_52%,#153a60)] py-[27px] text-white min-[681px]:py-[37px] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(rgba(216,241,238,0.17)_1px,transparent_1px)] before:bg-[length:22px_22px] before:bg-center before:[mask-image:linear-gradient(90deg,#000,transparent_40%,transparent_60%,#000)] before:content-['']"
      aria-label={counterSectionData.label}
    >
      <div className="relative mx-auto grid w-[min(100%_-_40px,500px)] grid-cols-2 gap-y-[18px] min-[681px]:w-[min(100%_-_48px,760px)] min-[681px]:grid-cols-4 min-[901px]:w-[min(1140px,calc(100%_-_64px))]">
        {counterSectionData.items.map(({ value, label }) => {
          const numericValue = Number(String(value).replace(/[^0-9.-]/g, ""));

          return (
            <article
              className="flex min-h-[58px] flex-col items-center justify-center gap-[7px] text-center min-[681px]:min-h-[69px] [&:nth-child(2)]:border-l [&:nth-child(2)]:border-[rgba(221,242,240,0.19)] [&:nth-child(3)]:border-l [&:nth-child(3)]:border-[rgba(221,242,240,0.19)] [&:nth-child(4)]:border-l [&:nth-child(4)]:border-[rgba(221,242,240,0.19)] max-[680px]:[&:nth-child(3)]:border-l-0"
              key={label}
            >
              <strong
                className="counter-value text-[27px] leading-none font-[650] tracking-[-1px] text-white min-[681px]:text-[clamp(25px,3vw,34px)]"
                data-value={numericValue}
              >
                0
              </strong>

              <span className="text-[10px] text-[#bfd2d8] min-[681px]:text-[11px]">
                {label}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CounterSection;
