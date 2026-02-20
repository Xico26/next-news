import Link from "next/link";

export default function ArticleCard({article}: { article: Article }) {
    return (
        <div className="bg-zinc-800 text-slate-200 p-2 my-2 rounded-md w-lg h-48 flex flex-col">
            <Link href={`/article/${article.id}`} className="h-full">
                <p className="text-2xl">{article.title}</p>
                <hr/>
                <p>{article.subtitle}</p>
                <p className="text-zinc-400 text-sm">{new Date(article.createdAt).toLocaleString("en-GB")}</p>
            </Link>
        </div>
    )
}