import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] text-sm font-medium font-mono uppercase slashed-zero ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-flamingo-500 text-primary-foreground hover:bg-primary/90 px-2 py-[6px] lg:px-3 py-2 text-sm  ",
        destructive:
          "bg-red-600 text-white hover:bg-destructive/90 px-2 py-[6px] lg:px-3 py-2 text-sm  ",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground px-2 py-[6px] lg:px-3 py-2 text-sm  ",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-[6px] lg:px-3 py-2 text-sm  ",
        ghost:
          "hover:bg-accent hover:text-accent-foreground px-2 py-[6px] lg:px-3 py-2 text-sm  ",
        link: "text-flamingo-700 underline-offset-4 hover:underline px-2 py-[6px] lg:px-3 py-2 text-sm  ",
      },
      size: {
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
