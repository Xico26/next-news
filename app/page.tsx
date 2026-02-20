import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default async function Home() {
  const data = await fetch("https://69983289d66520f95f16d3e3.mockapi.io/api/article")
  const articles = await data.json();

  return (
      <main className="flex min-h-screen min-w-screen max-w-3xl flex-col items-center justify-center bg-white dark:bg-black sm:items-start p-2">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Your place for news.
          </p>
          <Link className="bg-blue-500 p-2 rounded-md" href={"/new"}>Add Article</Link>
          <div className="flex flex-wrap items-center gap-4 text-center sm:items-start sm:text-left ">
            {
              articles.map((article: Article) => (
                  <ArticleCard article={article} key={article.id} />
              ))
            }
          </div>
        </div>
      </main>
  );
}
