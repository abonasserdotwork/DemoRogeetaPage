import { useEffect } from "react";

function LoadingScreen({ progress, isReady, onComplete }) {
  useEffect(() => {
    if (!isReady) return;

    const timer = setTimeout(() => {
      onComplete();
    }, 150);

    return () => clearTimeout(timer);
  }, [isReady, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[1000] grid place-items-center bg-[radial-gradient(ellipse_at_50%_44%,rgba(36,112,124,0.35),transparent_38%),linear-gradient(135deg,#0c2939,#123e50_54%,#153b59)] text-[#f5fbfa] opacity-100 transition-opacity duration-[550ms] ease-in-out motion-reduce:duration-[550ms] ${
        isReady ? "pointer-events-none invisible opacity-0" : ""
      }`}
      role="status"
      aria-label="Loading Rogeeta Clinic"
      aria-live="polite"
      
    >
      <div className="flex flex-col items-center">
        <div
          className="relative mb-5 grid h-[100px] w-[100px] place-items-center rounded-full border border-[rgba(187,238,224,0.2)] shadow-[0_0_50px_rgba(73,212,173,0.09)] before:absolute before:inset-[7px] before:rounded-full before:border before:border-[rgba(187,238,224,0.12)] before:content-['']"
          aria-hidden="true"
        >
          <span className="animate-[loading-letter_1.8s_ease-in-out_infinite] pb-[7px] font-serif text-[64px] leading-none font-semibold text-[#d8fff1] [text-shadow:0_0_26px_rgba(73,212,173,0.34)] motion-reduce:animate-none">
            R
          </span>
          <i className="absolute -inset-1 animate-[loading-spin_1.4s_linear_infinite] rounded-full border-2 border-transparent border-t-[#65dfbd] border-r-[rgba(101,223,189,0.24)] [filter:drop-shadow(0_0_5px_rgba(101,223,189,0.35))]" />
        </div>
        <span className="text-[13px] font-bold tracking-[5px] text-[#f3fbfa]">
          ROGEETA
        </span>
        <span className="mt-[9px] text-[11px] tracking-[0.6px] text-[#afc9ce]">
          A moment for your care
        </span>
        <div
          className="mt-[27px] h-[3px] w-28 overflow-hidden rounded-[2px] bg-[rgba(230,249,244,0.18)]"
          role="progressbar"
          aria-label="Page loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <i
            className="block h-full rounded-[inherit] bg-[#65dfbd] shadow-[0_0_9px_rgba(101,223,189,0.65)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
