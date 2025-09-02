import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background shadow-lg backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:scale-[1.03] hover:shadow-xl",
        destructive:
          "bg-gradient-to-r from-red-400 via-pink-500 to-orange-500 text-white hover:scale-[1.03] hover:shadow-xl",
        outline:
          "border border-primary bg-background/60 text-primary hover:bg-primary/10 hover:scale-[1.03]",
        secondary:
          "bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white hover:scale-[1.03] hover:shadow-xl",
        ghost: "bg-transparent text-primary hover:bg-primary/10 hover:scale-[1.03]",
        link: "text-primary underline-offset-4 hover:underline hover:text-blue-500",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-12 rounded-xl px-8 text-lg",
        icon: "h-10 w-10 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
