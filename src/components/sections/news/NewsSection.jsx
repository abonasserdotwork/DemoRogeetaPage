import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { newsSectionData } from "../../../staticData/homeSections.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function NewsSection() {
  const newsRef = useRef(null);
  const { eyebrow, title, description, items } = newsSectionData;
  const [selectedArticle, setSelectedArticle] = useState(null);
  const dialogRef = useRef(null);
  const SelectedArticleIcon = selectedArticle?.icon;
  const artworkStyles = {
    "news-art-heart": "bg-[linear-gradient(135deg,#287f7b,#174e68)]",
    "news-art-visit": "bg-[linear-gradient(135deg,#4d7891,#254b69)]",
    "news-art-events": "bg-[linear-gradient(135deg,#3b8d79,#1d5e66)]",
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedArticle && !dialog.open) {
      dialog.showModal();
    } else if (!selectedArticle && dialog.open) {
      dialog.close();
    }
  }, [selectedArticle]);

  useGSAP(
  () => {
    const cards = gsap.utils.toArray(".news-card");

    gsap.set(cards, {
      opacity: 0,
      y: 50,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: newsRef.current,
        start: "top top+=100",
        end: `+=${cards.length * 300}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card) => {
      timeline.to(card, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "none",
      });
    });
  },
  { scope: newsRef },
);

  return (
    <section
      ref={newsRef}
      className="bg-white px-0 py-[55px] pb-[62px] min-[681px]:py-[76px] min-[681px]:pb-[86px]"
      id="news"
      aria-labelledby="news-title"
    >
      <div className="mx-auto w-[min(100%_-_40px,500px)] min-[681px]:w-[min(100%_-_48px,760px)] min-[901px]:w-[min(1140px,calc(100%_-_64px))]">
        <header className="mx-auto mb-[22px] max-w-[600px] text-center min-[681px]:mb-8">
          <span className="text-[10px] font-[750] tracking-[1.8px] text-[#258b7c]">
            {eyebrow}
          </span>
          <h2
            id="news-title"
            className="my-[9px] mb-2 text-[27px] font-semibold tracking-[-1.1px] text-[#173546] min-[681px]:text-[clamp(25px,3vw,34px)]"
          >
            {title}
          </h2>
          <p className="m-0 text-xs leading-[1.65] text-[#6a7f89] min-[681px]:text-[13px]">
            {description}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-[13px] min-[681px]:gap-3 min-[901px]:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] min-[901px]:grid-rows-[repeat(3,minmax(0,1fr))] min-[901px]:gap-x-[18px] min-[901px]:gap-y-[14px]">
          {items.map((item, index) => {
            const {
              category,
              title: itemTitle,
              description: itemDescription,
              icon: Icon,
              artwork,
              image,
              imageAlt,
            } = item;
            const isFeatured = index === 0;

            return (
              <article
                className={`news-card min-w-0 overflow-hidden rounded-xl border border-[#e7eeee] bg-white shadow-[0_5px_17px_rgba(21,57,70,0.06)] transition-[transform,box-shadow] duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(21,57,70,0.11)] ${
                  isFeatured
                    ? "flex flex-col min-[681px]:max-[900px]:grid min-[681px]:max-[900px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] min-[901px]:col-start-1 min-[901px]:row-span-3 min-[901px]:row-start-1 min-[901px]:self-start"
                    : "flex items-start gap-3 p-[15px] min-[681px]:gap-[15px] min-[681px]:p-[17px] min-[901px]:col-start-2 min-[901px]:row-auto"
                }`}
                key={itemTitle}
              >
                {isFeatured ? (
                  <div className="h-[180px] w-full shrink-0 overflow-hidden bg-[#d8e8e4] min-[681px]:h-[210px] min-[681px]:max-[900px]:h-full min-[681px]:max-[900px]:min-h-[210px] min-[901px]:h-[230px]">
                    <img
                      className="block h-full w-full object-cover object-[center_55%]"
                      src={image}
                      alt={imageAlt}
                    />
                  </div>
                ) : (
                  <div
                    className={`relative grid h-[43px] w-[43px] shrink-0 place-items-center overflow-hidden rounded-[10px] text-white ${artworkStyles[artwork] ?? "bg-[linear-gradient(135deg,#287f7b,#174e68)]"}`}
                    aria-hidden="true"
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                )}
                <div
                  className={`min-w-0 flex-1 p-[17px_18px_19px] min-[681px]:p-4 min-[901px]:p-[19px_20px_21px] ${!isFeatured ? "p-0 min-[681px]:p-0 min-[901px]:p-0" : ""}`}
                >
                  <span className="text-[9px] font-[750] tracking-[1.3px] text-[#258b7c]">
                    {category}
                  </span>
                  <h3
                    className={`my-[5px] text-[13px] leading-[1.4] font-[650] text-[#173546] min-[681px]:text-[14px] min-[901px]:my-[9px] min-[901px]:mb-2 min-[901px]:text-base ${!isFeatured ? "min-[901px]:my-[5px] min-[901px]:mb-1 min-[901px]:text-sm" : ""}`}
                  >
                    {itemTitle}
                  </h3>
                  <p
                    className={`m-0 text-[12px] leading-[1.7] text-[#6a7f89] min-[681px]:text-[11px] min-[901px]:text-xs ${!isFeatured ? "text-[11px] leading-[1.55]" : ""}`}
                  >
                    {itemDescription}
                  </p>
                  <button
                    className={`mt-[15px] inline-flex cursor-pointer items-center gap-[5px] border-0  p-0 text-[11px] font-bold text-[#187967] hover:text-[#10594d] ${
                      isFeatured
                        ? "mt-[17px] min-h-[35px] rounded-[5px] bg-[#176174] px-3 text-white hover:bg-[#104a5c] hover:text-white"
                        : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedArticle(item)}
                    aria-haspopup="dialog"
                  >
                    {isFeatured ? "Read full article" : "Read more"}{" "}
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <dialog
        className="m-auto max-h-[calc(100%_-_24px)] w-[calc(100%_-_24px)] max-w-[650px] overflow-auto rounded-[17px] border border-white/[0.76] bg-white p-0 text-[#173546] shadow-[0_32px_100px_rgba(4,24,38,0.34),0_3px_12px_rgba(4,24,38,0.08)] [scrollbar-color:#b9d7d2_transparent] [scrollbar-width:thin] backdrop:bg-[rgba(8,27,39,0.72)] backdrop:backdrop-blur-[8px] min-[681px]:max-h-[min(820px,calc(100%_-_32px))] min-[681px]:w-[min(650px,calc(100%_-_32px))] min-[681px]:rounded-[21px]"
        ref={dialogRef}
        aria-labelledby="news-dialog-title"
        onClose={() => setSelectedArticle(null)}
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") dialogRef.current?.close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        {selectedArticle && (
          <article className="overflow-hidden rounded-[inherit] bg-[linear-gradient(180deg,#fff,#fbfdfc)]">
            <div
              className={`relative grid min-h-[150px] place-items-center overflow-hidden bg-[linear-gradient(130deg,#287f7b,#174e68)] text-[#ddfff3] before:pointer-events-none before:absolute before:inset-x-0 before:top-[35%] before:bottom-0 before:z-[1] before:bg-[linear-gradient(180deg,transparent,rgba(10,37,48,0.48))] before:content-[''] min-[681px]:min-h-[175px] min-[901px]:min-h-[190px] ${artworkStyles[selectedArticle.artwork] ?? ""}`}
            >
              {selectedArticle.image ? (
                <img
                  className="absolute inset-0 h-full w-full object-cover object-[center_54%]"
                  src={selectedArticle.image}
                  alt={selectedArticle.imageAlt}
                />
              ) : (
                <SelectedArticleIcon
                  className="drop-shadow-[0_12px_24px_rgba(8,34,48,0.25)]"
                  size={56}
                  strokeWidth={1.25}
                />
              )}
              <span className="absolute bottom-[13px] left-[18px] z-[1] rounded-full border border-white/[0.31] bg-[rgba(14,52,64,0.45)] px-3 py-2 text-[9px] font-[750] tracking-[1.2px] text-white backdrop-blur-[9px] min-[681px]:bottom-[19px] min-[681px]:left-7">
                {selectedArticle.category}
              </span>
              <button
                className="absolute top-3 right-3 z-[2] grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/[0.55] bg-[rgba(11,43,55,0.44)] text-white backdrop-blur-[9px] transition-[transform,background-color] duration-150 hover:rotate-90 hover:bg-[rgba(11,43,55,0.72)] focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-[#8ce4ce] min-[681px]:top-[17px] min-[681px]:right-[18px] min-[681px]:h-10 min-[681px]:w-10"
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close article"
                autoFocus
              >
                <X size={19} />
              </button>
            </div>
            <div className="p-[23px_21px_24px] min-[681px]:p-[27px_28px_29px] min-[901px]:p-[31px_38px_34px]">
              <span className="text-[9px] font-[750] tracking-[1.9px] text-[#258b7c]">
                A NOTE FROM MY CLINIC
              </span>
              <h2 className="my-[10px] mb-[10px] max-w-[540px] text-[27px] leading-[1.16] font-[680] tracking-[-1.2px] text-[#173546] min-[681px]:text-[clamp(27px,4vw,38px)]">
                {selectedArticle.title}
              </h2>
              <p className="m-0 text-[13px] leading-[1.75] text-[#516d78] min-[681px]:text-sm">
                {selectedArticle.description}
              </p>
              <div className="mt-5 grid gap-[13px] border-t border-[#e7eeee] pt-[18px]">
                {selectedArticle.details.map((paragraph) => (
                  <p
                    className="m-0 text-xs leading-[1.85] text-[#607781] min-[681px]:text-[13px]"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <footer className="mt-6 flex flex-col items-start gap-[5px] border-t border-[#e7eeee] pt-[17px] min-[681px]:flex-row min-[681px]:items-center min-[681px]:justify-between min-[681px]:gap-4">
                <span className="text-[11px] font-[650] text-[#258b7c]">
                  Here for your health, every step of the way.
                </span>
                {selectedArticle.action && (
                  <a
                    className="inline-flex shrink-0 items-center gap-[5px] text-[11px] font-bold text-[#187967] hover:text-[#10594d]"
                    href={selectedArticle.action.href}
                  >
                    {selectedArticle.action.label} <ArrowUpRight size={15} />
                  </a>
                )}
              </footer>
            </div>
          </article>
        )}
      </dialog>
    </section>
  );
}

export default NewsSection;
