import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full border font-sans whitespace-nowrap", className)}
      {...props}
    />
  );
}
