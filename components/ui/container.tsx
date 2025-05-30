import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "small" | "medium" | "large" | "full";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        {
          "max-w-screen-xl": size === "default",
          "max-w-screen-lg": size === "large",
          "max-w-screen-md": size === "medium",
          "max-w-screen-sm": size === "small",
          "w-full": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}