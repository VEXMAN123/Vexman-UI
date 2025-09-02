import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className="relative group">
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "flex h-14 w-14 shrink-0 overflow-hidden rounded-full border-4 border-cyan-400 shadow-xl bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30",
        className
      )}
      {...props}
    />
    {/* Status indicator */}
    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white shadow-md animate-pulse"></span>
    <style>{`
      .animate-avatar-ring {
        animation: avatar-ring 2s infinite;
      }
      @keyframes avatar-ring {
        0% { box-shadow: 0 0 0 0 rgba(6,182,212,0.7); }
        70% { box-shadow: 0 0 0 10px rgba(6,182,212,0); }
        100% { box-shadow: 0 0 0 0 rgba(6,182,212,0); }
      }
    `}</style>
  </div>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
