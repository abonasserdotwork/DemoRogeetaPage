
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutSectionData } from "../../../staticData/homeSections.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutSection() {
  const { eyebrow, title, description, values } = aboutSectionData;
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".grid-item");

      // Scroll reveal animation
      gsap.from(cards, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 0.6,
          from: "top",
        },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
          once: true,
        },
      });

      // 3D mouse tilt for every card
      cards.forEach((card) => {
        const handleMouseMove = (event) => {
          const rect = card.getBoundingClientRect();

          const x =
            (event.clientX - rect.left) / rect.width - 0.5;
          const y =
            (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotationY: x * 12,
            rotationX: -y * 12,
            scale: 1.02,
            transformPerspective: 800,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Clean up listeners when the GSAP context is reverted
        return () => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    },
    {
      scope: aboutRef,
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={aboutRef}
      className="scroll-mt-6 bg-[radial-gradient(ellipse_at_0_50%,rgba(73,212,173,0.08),transparent_42%),#fff] py-[58px] min-[681px]:py-[88px]"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-[min(100%_-_40px,500px)] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-9 max-[680px]:grid-cols-1 max-[680px]:gap-[25px] min-[681px]:w-[min(100%_-_48px,760px)] min-[901px]:w-[min(1080px,calc(100%_-_64px))] min-[901px]:gap-[78px]">
        {/* About content */}
        <div>
          <span className="text-[10px] font-[750] tracking-[1.8px] text-[#258b7c]">
            {eyebrow}
          </span>

          <h2
            id="about-title"
            className="my-[12px] mb-[14px] text-[32px] leading-[1.15] font-[620] tracking-[-1.5px] text-[#173546] min-[681px]:text-[clamp(30px,4vw,44px)]"
          >
            {title}
          </h2>

          <p className="m-0 text-[14px] leading-[1.85] text-[#667d87]">
            {description}
          </p>
        </div>

        {/* Value cards */}
        <div className="about-grid grid gap-3">
          {values.map(
            (
              {
                icon: Icon,
                title: valueTitle,
                description: valueDescription,
              },
              index
            ) => (
              <article
                key={valueTitle}
                className="grid-item flex items-start gap-[15px] rounded-[11px] border border-[#e6efed] bg-white/86 p-[18px] shadow-[0_6px_20px_rgba(20,56,68,0.045)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="grid h-[39px] w-[39px] shrink-0 place-items-center rounded-[10px] bg-[#e5f6ef] text-[#187967]">
                  <Icon size={20} />
                </span>

                <div>
                  <span className="text-[9px] tracking-[1px] text-[#5c9a90]">
                    0{index + 1}
                  </span>

                  <h3 className="my-1 text-[14px] font-[650] text-[#173546]">
                    {valueTitle}
                  </h3>

                  <p className="m-0 text-[11px] leading-[1.6] text-[#71848d]">
                    {valueDescription}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
