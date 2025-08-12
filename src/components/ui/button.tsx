import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/25 active:bg-primary-700",
        destructive: "bg-destructive text-destructive-foreground hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 active:bg-red-700",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-800 hover:shadow-lg active:bg-secondary-900",
        ghost: "hover:bg-secondary/80 hover:text-secondary-foreground text-muted-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-600",
        success: "bg-success text-success-foreground hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25",
        warning: "bg-warning text-warning-foreground hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500/25",
      },
      size: {
        xs: "h-8 px-3 py-2 text-xs",
        sm: "h-9 px-4 py-2 text-sm",
        default: "h-11 px-6 py-3 text-base",
        lg: "h-12 px-8 py-3 text-lg",
        xl: "h-14 px-10 py-4 text-xl",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
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
