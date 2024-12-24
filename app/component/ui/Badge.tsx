import React from "react";

interface BadgeProps {
  variant?: "default" | "secondary" | "outline";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", children }) => {
  const baseStyles = "px-3 py-1 rounded-full text-sm font-medium";
  let variantStyles = "";

  switch (variant) {
    case "secondary":
      variantStyles = "bg-gray-200 text-gray-700";
      break;
    case "outline":
      variantStyles = "border border-gray-300 text-gray-700";
      break;
    default:
      variantStyles = "bg-blue-500 text-white";
      break;
  }

  return <span className={`${baseStyles} ${variantStyles}`}>{children}</span>;
};
