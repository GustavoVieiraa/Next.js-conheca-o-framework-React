import Image from "next/image";

import { Avatar } from "../Avatar";

import S from "./cardpost.module.css";

export const CardPost = ({ post }) => {
  return (
    <article className={S.card}>
      <header className={S.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>
      <section className={S.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={S.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
