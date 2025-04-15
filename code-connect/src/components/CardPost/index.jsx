import Image from "next/image";

import { Avatar } from "../Avatar";

import S from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={S.link}>
      <article className={S.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={S.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              fill
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
    </Link>
  );
};
