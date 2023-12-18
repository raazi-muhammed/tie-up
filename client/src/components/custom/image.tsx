"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const ImageContainer = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex aspect-square h-auto w-auto shrink-0 overflow-hidden rounded",
            className
        )}
        {...props}
    />
));
ImageContainer.displayName = AvatarPrimitive.Root.displayName;

const Image = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn(
            "aspect-square object-cover h-full w-full border bg-card",
            className
        )}
        {...props}
    />
));
Image.displayName = AvatarPrimitive.Image.displayName;

const ImageFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded bg-muted",
            className
        )}
        {...props}
    >
        <p>Loading</p>
    </AvatarPrimitive.Fallback>
));
ImageFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { ImageContainer, Image, ImageFallback };
