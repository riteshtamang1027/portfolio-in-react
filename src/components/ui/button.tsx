import type { ButtonHTMLAttributes, ReactNode } from "react"

type buttonProps = ButtonHTMLAttributes <HTMLButtonElement> &{
  icon ?:ReactNode;
}

export default function Button({children, icon, className, ...props}:buttonProps) {
  return (
    <button {...props} className={`font-sans ${className ?? ""}`}>
      {icon}
      {children}
    </button>
  )
}
