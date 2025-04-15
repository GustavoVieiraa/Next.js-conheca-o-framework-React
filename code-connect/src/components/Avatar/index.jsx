import Image from "next/image";
import S from "./avatar.module.css";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={S.avatar}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
