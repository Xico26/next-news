import Buttons from "@/components/Buttons";
import Image from "next/image"

export default async function ArticlePage ({ params } : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const article = await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`)
        .then(res => {
            if (res.ok) return res.json();
        }
    )

    return (
        <div className="p-16 w-full">
            <div className="flex justify-center">
                <div className="flex flex-col w-1/3">
                    <h1 className="py-2 text-4xl font-bold">{article.title}</h1>
                    <p className="py-1 text-zinc-400">Posted on {new Date(article.createdAt).toLocaleString("en-GB")}</p>
                    <p className="py-1 text-zinc-800 font-bold font-2xl">{article.author}</p>
                    <Image
                        src="/news.jpg"
                        width={500}
                        height={500}
                        alt="News image"
                        className="rounded-lg py-4 w-full"
                    />
                    <p className="text-2xl text-zinc-800">{article.subtitle}</p>
                    <br/>
                    <div className="mb-16 pt-4">
                        <p>{article.content}</p>
                    </div>
                    <hr/>
                    <div className="py-2 flex flex-col gap-4">
                        <p>Admin Actions</p>
                        <Buttons id={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}