import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface CustomLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const CustomLink = ({ className, ...props }: CustomLinkProps) => {
  return (
    <Link
      className={className || "text-neutral-400 hover:text-white border-b-[1px] border-neutral-400 pb-0.5 hover:border-white transition duration-200"}
      {...props}
    >
      {props.children}
    </Link>
  );
};
