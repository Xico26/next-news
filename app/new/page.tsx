"use client"

import ArticleForm from "@/components/ArticleForm";

export default function NewArticle() {
    return (
        <div className="p-16 w-full">
            <div className="flex justify-center">
                <div className="flex flex-col w-1/3">
                    <h1 className="text-4xl font-bold">Create Article</h1>
                    <ArticleForm />
                </div>
            </div>
        </div>
    )

}

