import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const NoUnderlineLink = ({ href, children }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default NoUnderlineLink;
