import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.png";

export function Logo({
  className = "",
  width = 116,
  priority = false,
}: {
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="Food Allergy Certified — home" className={className}>
      <Image
        src={logo}
        alt="Food Allergy Certified"
        width={width}
        height={Math.round((logo.height / logo.width) * width)}
        priority={priority}
      />
    </Link>
  );
}
