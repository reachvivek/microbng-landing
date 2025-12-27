import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface GlassButtonProps extends ComponentProps<"a"> {
  variant?: "primary" | "secondary" | "accent";
}

export function GlassButton({
  className,
  variant = "primary",
  children,
  ...props
}: GlassButtonProps) {
  const variantStyles = {
    primary: "before:bg-[#39ff14] after:bg-[#39ff14] before:shadow-[0_0_5px_#39ff14,0_0_15px_#39ff14,0_0_30px_#39ff14,0_0_60px_#39ff14] after:shadow-[0_0_5px_#39ff14,0_0_15px_#39ff14,0_0_30px_#39ff14,0_0_60px_#39ff14]",
    secondary: "before:bg-[#2bd2ff] after:bg-[#2bd2ff] before:shadow-[0_0_5px_#2bd2ff,0_0_15px_#2bd2ff,0_0_30px_#2bd2ff,0_0_60px_#2bd2ff] after:shadow-[0_0_5px_#2bd2ff,0_0_15px_#2bd2ff,0_0_30px_#2bd2ff,0_0_60px_#2bd2ff]",
    accent: "before:bg-[#ff1f71] after:bg-[#ff1f71] before:shadow-[0_0_5px_#ff1f71,0_0_15px_#ff1f71,0_0_30px_#ff1f71,0_0_60px_#ff1f71] after:shadow-[0_0_5px_#ff1f71,0_0_15px_#ff1f71,0_0_30px_#ff1f71,0_0_60px_#ff1f71]",
  };

  return (
    <div className={cn("relative w-[155px] h-[50px] group", className)}>
      <a
        {...props}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.2)] border-t border-white/10 border-b border-white/10 rounded-[30px] text-white z-10 font-normal tracking-[1px] no-underline overflow-hidden transition-all duration-700 backdrop-blur-[15px] group-hover:tracking-[3px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-gradient-to-l before:from-white/15 before:to-transparent before:transform before:skew-x-[45deg] before:translate-x-0 before:transition-transform before:duration-700 group-hover:before:translate-x-[200%] group-hover:before:skew-x-[45deg]"
      >
        {children}
      </a>
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-[30px] h-[10px] rounded-[10px] transition-all duration-700 delay-0 group-hover:bottom-0 group-hover:h-1/2 group-hover:w-4/5 group-hover:rounded-[30px] group-hover:delay-500",
        variantStyles[variant]
      )} />
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 top-[-5px] w-[30px] h-[10px] rounded-[10px] transition-all duration-700 delay-0 group-hover:top-0 group-hover:h-1/2 group-hover:w-4/5 group-hover:rounded-[30px] group-hover:delay-500",
        variantStyles[variant]
      )} />
    </div>
  );
}
