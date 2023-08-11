import menuList from "@/_mock/menuList";
import Image from "next/image";
import Link from "next/link";

const MenuList = () => {
  return (
    <ul className="list">
      {menuList.map(({ href, src, alt, text }, index) => (
        <li key={index}>
          <Link href={href}>
            <Image src={src} alt={alt} /> {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
