import Buttons from "@/components/Buttons";

export default async function ArticlePage ({ params } : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const article = await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`)
        .then(res => {
            if (res.ok) return res.json();
        }
    )

    return (
        <div className="p-16">
            <h1 className="text-4xl">{article.title}</h1>
            <p className="text-2xl text-gray-300">{article.subtitle}</p>
            <br/>
            <p>Posted by {article.author} on {new Date(article.createdAt).toLocaleString("en-GB")}</p>
            <hr/>
            {article.content}
            <hr/>
            <Buttons id={id} />
        </div>
    )
}