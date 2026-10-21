import { ArrowUpRight, Play } from "lucide-react";
import { heroSectionData } from "../../../staticData/homeSections.js";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { LoadingContext } from "../../../App.jsx";

function HeroSection() {
  const {
    eyebrow: eyebrowText,
    eyebrowIcon: EyebrowIcon,
    heading,
    headingAccent,
    description,
    primaryAction,
    secondaryAction,
    proof,
    image,
    availability,
    care,
  } = heroSectionData;

  const AvailabilityIcon = availability.icon;
  const CareIcon = care.icon;

  const heroRef = useRef(null);
  const heroLeftElements = useRef(null);
  const heroRightElements = useRef(null);
  const buttonCard = useRef(null);

  const isLoaded = useContext(LoadingContext);

  useGSAP(
    () => {
      if (!isLoaded) return;

      const left = heroLeftElements.current;
      const right = heroRightElements.current;
      const card = buttonCard.current;

      if (!left || !right) return;

      gsap.from(left.children, {
        rotationY: -90,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.4)",
        transformOrigin: "50% 50% -20px",
      });

      const shapes = right.querySelectorAll(".shape");

      gsap.to(shapes, {
        x: "random(-25, 25)",
        y: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      if (!card) return;

      const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(card, {
          rotateY: x * 20,
          rotateX: -y * 20,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 600,
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    {
      scope: heroRef,
      dependencies: [isLoaded],
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={heroRef}
      className="relative isolate -mt-[var(--site-header-height)] overflow-hidden bg-[radial-gradient(ellipse_at_75%_55%,rgba(41,115,151,0.38),transparent_34%),radial-gradient(ellipse_at_8%_100%,rgba(42,157,147,0.18),transparent_38%),linear-gradient(118deg,#123e50_0%,#154c65_49%,#1a4276_100%)] pt-[var(--site-header-height)] pb-12 text-white"
    >
      <div className="pointer-events-none absolute -top-[310px] -right-[180px] -z-10 h-[680px] w-[680px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -right-[180px] -bottom-[355px] -z-10 h-[720px] w-[720px] rounded-full border border-white/[0.07]" />

      <section
        id="menu"
        className="mx-auto grid min-h-[525px] w-[min(100%_-_40px,500px)] grid-cols-1 items-center gap-[18px] px-0 py-[42px] pb-11 min-[681px]:w-[min(100%_-_48px,760px)] min-[681px]:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] min-[681px]:gap-[25px] min-[681px]:py-[34px] min-[681px]:pb-[60px] min-[901px]:w-[min(1140px,calc(100%_-_64px))] min-[901px]:grid-cols-[minmax(0,0.94fr)_minmax(400px,1.06fr)] min-[901px]:gap-[52px]"
      >
        <div
          ref={heroLeftElements}
          className={`${isLoaded ? "visible" : "invisible"} relative z-[1] max-w-[540px] pb-0 min-[681px]:pb-3`}
        >
          <div className="mb-[17px] inline-flex items-center gap-[9px] text-[10px] font-bold tracking-[2px] text-[#b9d7dc] min-[681px]:mb-[22px] min-[681px]:text-[11px]">
            <span className="grid h-[27px] w-[27px] place-items-center rounded-full border border-[rgba(73,212,173,0.55)] text-[#49d4ad]">
              <EyebrowIcon size={14} />
            </span>
            {eyebrowText}
          </div>

          <h1 className="m-0 max-w-[500px] text-[clamp(42px,11vw,58px)] leading-[1.08] font-medium tracking-[-2.5px] text-white min-[681px]:max-w-[570px] min-[681px]:text-[clamp(40px,6vw,56px)] min-[901px]:text-[clamp(42px,5.2vw,66px)] min-[901px]:tracking-[-3.3px]">
            {heading}{" "}
            <span className="font-[650] text-[#8ce4ce]">
              {headingAccent}
            </span>
          </h1>

          <p className="mt-[17px] mb-0 max-w-[440px] text-[14px] leading-[1.8] text-[#c4d6dd] min-[681px]:mt-[23px] min-[681px]:text-[15px]">
            {description}
          </p>

          <div
            ref={buttonCard}
            className="mt-[23px] flex items-center gap-4 min-[681px]:mt-[31px] min-[681px]:gap-[23px] max-[380px]:items-start max-[380px]:flex-col max-[380px]:gap-3"
          >
            <a
              className="inline-flex min-h-[45px] items-center justify-center gap-[10px] rounded-[7px] bg-[#49d4ad] px-[17px] text-xs font-[650] text-[#103d4c] shadow-[0_10px_24px_rgba(4,26,37,0.18)] transition-[background-color,color] duration-150 hover:bg-[#74e5c4] min-[681px]:min-h-12 min-[681px]:text-[13px]"
              href={primaryAction.href}
            >
              {primaryAction.label}
              <ArrowUpRight size={17} />
            </a>

            <a
              className="inline-flex min-h-[45px] items-center justify-center gap-[10px] rounded-[7px] text-xs font-[650] text-[#e6f0f0] transition-colors duration-150 hover:text-[#49d4ad] min-[681px]:min-h-12 min-[681px]:text-[13px]"
              href={secondaryAction.href}
            >
              <span className="grid h-[29px] w-[29px] place-items-center rounded-full border border-white/[0.48]">
                <Play size={12} fill="currentColor" />
              </span>
              {secondaryAction.label}
            </a>
          </div>

          <div className="mt-[25px] flex items-center gap-[13px] min-[681px]:mt-[38px]">
            <div className="flex pl-[5px]" aria-hidden="true">
              {proof.avatars.map((avatar, index) => (
                <span
                  className={`-ml-[5px] grid h-[30px] w-[30px] place-items-center rounded-full border-2 border-[#174c63] text-[10px] font-[750] ${
                    index === 1
                      ? "bg-[#f0c9a8] text-[#544032]"
                      : index === 2
                        ? "bg-[#d3d9eb] text-[#37475e]"
                        : "bg-[#c5e8de] text-[#173b4b]"
                  }`}
                  key={`${avatar}-${index}`}
                >
                  {avatar}
                </span>
              ))}
            </div>

            <div>
              <strong className="text-[11px] font-[650] text-[#f2f7f7]">
                {proof.headline}
              </strong>
              <p className="mt-1 mb-0 text-[10px] text-[#a9c3cb]">
                {proof.detail}
              </p>
            </div>
          </div>
        </div>

        <div
          ref={heroRightElements}
          className="relative mx-[3px] flex min-h-0 flex-col items-center justify-center gap-[10px] min-[681px]:mx-0 min-[681px]:min-h-[400px] min-[681px]:flex-row min-[681px]:gap-0 min-[901px]:min-h-[430px]"
          aria-label={image.label}
        >
          <div className="shape pointer-events-none absolute top-1 right-0 hidden h-[330px] w-[330px] rounded-full border border-[rgba(131,220,210,0.28)] min-[681px]:top-[18px] min-[681px]:right-[-8px] min-[681px]:block min-[681px]:h-[400px] min-[681px]:w-[400px] min-[901px]:right-[-13px]" />

          <div className="shape pointer-events-none absolute right-[-15px] bottom-[-10px] hidden h-[230px] w-[230px] rounded-full border border-white/[0.13] min-[681px]:right-[-15px] min-[681px]:bottom-0 min-[681px]:block min-[681px]:h-[270px] min-[681px]:w-[270px] min-[901px]:right-[-53px]" />

          <div className="relative z-[1] h-[305px] w-[min(83%,335px)] overflow-hidden rounded-[47%_47%_10px_10px/36%_36%_10px_10px] border border-white/[0.22] bg-[linear-gradient(180deg,rgba(147,211,202,0.18),rgba(14,61,77,0.04)),#abd0cc] shadow-[0_28px_70px_rgba(5,29,45,0.28)] min-[381px]:h-[340px] min-[681px]:h-[390px] min-[681px]:w-[min(100%,405px)] min-[901px]:h-[412px]">
            <img
              className="h-full w-full object-cover object-[center_23%]"
              src={image.src}
              alt={image.alt}
            />

            <span className="pointer-events-none absolute inset-x-0 top-[45%] bottom-0 bg-[linear-gradient(180deg,transparent,rgba(13,54,69,0.22))]" />
          </div>

          <div className="relative z-[2] flex w-[min(100%,335px)] items-center gap-2 rounded-[11px] border border-white/[0.58] bg-white/[0.96] p-[10px] text-[#173847] shadow-[0_16px_38px_rgba(8,34,48,0.22)] min-[681px]:absolute min-[681px]:top-[400px] min-[681px]:right-[-8px] min-[681px]:w-auto min-[681px]:gap-[11px] min-[681px]:p-[12px_14px] min-[901px]:top-[72px] min-[901px]:right-[-18px]">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#e3f7ef] text-[#147a71] min-[681px]:h-9 min-[681px]:w-9">
              <AvailabilityIcon size={18} />
            </span>

            <div>
              <strong className="block text-[10px] font-[750] min-[681px]:text-[11px]">
                {availability.headline}
              </strong>
              <span className="mt-1 block max-w-[155px] text-[8px] text-[#738892] min-[681px]:text-[9px]">
                {availability.detail}
              </span>
            </div>
          </div>

          <div className="relative z-[2] flex w-[min(100%,335px)] items-center gap-2 rounded-[11px] border border-white/[0.58] bg-white/[0.96] p-[10px] text-[#173847] shadow-[0_16px_38px_rgba(8,34,48,0.22)] min-[681px]:absolute min-[681px]:bottom-[43px] min-[681px]:left-[-14px] min-[681px]:w-auto min-[681px]:gap-[11px] min-[681px]:p-[13px_15px] min-[901px]:bottom-[62px] min-[901px]:left-[-29px]">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#e8f2f7] text-[#2e6784] min-[681px]:h-9 min-[681px]:w-9">
              <CareIcon size={19} />
            </span>

            <div>
              <strong className="block text-[10px] font-[750] min-[681px]:text-[11px]">
                {care.headline}
              </strong>
              <span className="mt-1 block max-w-[155px] text-[8px] text-[#738892] min-[681px]:text-[9px]">
                {care.detail}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;