import { CardPost } from "@/components/CardPost";

import logger from "@/logger";

import S from "./page.module.css";
import Link from "next/link";

async function getAllPosts (page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)

  if (!response.ok) {
    logger.error("Droga, algo deu erro.")
    return []
  }

  logger.info('Posts obtidos com sucesso!')
  return response.json();
}

export default async function Home( { searchParams } ) {

  const currentPage = searchParams?.page || 1;

  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={S.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
    </main>
  );
}