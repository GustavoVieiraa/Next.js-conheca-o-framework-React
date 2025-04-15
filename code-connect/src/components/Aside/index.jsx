import Image from "next/image";
import S from "./aside.module.css";

import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={S.aside}>
      {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
};
