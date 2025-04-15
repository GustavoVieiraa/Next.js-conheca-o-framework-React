import { CardPost } from "@/components/CardPost";

import logger from "@/logger";

import S from "./page.module.css";

async function getAllPosts () {
  const response = await fetch('http://localhost:3042/posts')

  if (!response.ok) {
    logger.error("Droga, algo deu erro.")
    return []
  }

  logger.info('Posts obtidos com sucesso!')
  return response.json();
}

export default async function Home() {

  const posts = await getAllPosts();

  return (
    <main className={S.grid}>
      {posts.map(post => <CardPost post={post} />)}
    </main>
  );
}