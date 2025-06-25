import Link from "next/link";
import LogoImage from "../../../public/images/new-logo.svg";
import Image from "next/image";

const Logo = ({ href, onClick }) => {
  return (
    <Link href={href} className="w-fit" onClick={onClick}>
      <Image
        src={LogoImage}
        alt="htt logo"
        className=" h-fit w-[30px]"
      />
    </Link>
  );
};

export default Logo;
