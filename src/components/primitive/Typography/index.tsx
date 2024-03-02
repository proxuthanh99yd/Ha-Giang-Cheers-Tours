import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const typography = cva("typography", {
  variants: {
    intent: {
      primary: ["text-primary"],
      secondary: ["text-brown"],
    },
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      base: ["text-base"],
      lg: ["text-lg"],
      "2xl": ["text-2xl"],
      "4xl": ["text-4xl"],
      "5xl": ["text-5xl"],
      "6xl": ["text-6xl"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "base",
    weight: "normal",
  },
});

interface ITypographyProps extends VariantProps<typeof typography> {
  children: ReactNode;
  className?: string;
  variant?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Typography({
  variant: Tag = "p",
  intent,
  size,
  weight,
  className,
  children,
}: ITypographyProps) {
  return (
    <Tag className={typography({ intent, size, weight, className })}>
      {children}
    </Tag>
  );
}
