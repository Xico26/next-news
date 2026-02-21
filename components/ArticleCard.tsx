import Link from "next/link";

export default function ArticleCard({article}: { article: Article }) {
    return (
        <div className="bg-zinc-100 text-black p-2 my-2 rounded-md w-lg h-48">
            <Link href={`/article/${article.id}`} className="h-full">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">{article.title}</p>
                    <p>{article.subtitle}</p>
                    <p className="text-zinc-400 text-sm">{new Date(article.createdAt).toLocaleString("en-GB")}</p>
                </div>
            </Link>
        </div>
    )
}