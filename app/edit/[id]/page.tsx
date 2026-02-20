import ArticleForm from "@/components/ArticleForm";

export default async function EditArticle({ params } : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const article: Article = await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`)
        .then(res => {
            if (res.ok) return res.json();
    })

    return (
        <div className="w-full p-2">
            <h1 className="text-2xl">Edit Article</h1>
            <ArticleForm originalArticle={article}/>
        </div>
    )
}

