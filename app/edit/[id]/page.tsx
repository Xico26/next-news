import ArticleForm from "@/components/ArticleForm";

export default async function EditArticle({ params } : {params: Promise<{id: string}>}) {
    const {id} = await params;
    const article: Article = await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`)
        .then(res => {
            if (res.ok) return res.json();
    })

    return (
        <div className="p-16 w-full">
            <div className="flex justify-center">
                <div className="flex flex-col w-1/3">
                    <h1 className="text-4xl font-bold">Edit Article</h1>
                    <ArticleForm />
                </div>
            </div>
        </div>
    )
}

