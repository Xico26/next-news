"use client"

import {useActionState} from "react";
import {submitArticle} from "@/lib/actions";

export default function ArticleForm({originalArticle}: {originalArticle?: Article}) {
    const submitArticleWithId = submitArticle.bind(null, originalArticle?.id);

    const [state, formAction, pending] = useActionState(submitArticleWithId, null);

    return (
        <form action={formAction} className="flex flex-col gap-4 justify-center w-full">
            <label htmlFor="author">Author</label>
            <input name="author" className="border p-2 rounded-md" defaultValue={originalArticle?.author} placeholder="Author" required/>
            <label htmlFor="title">Title</label>
            <input name="title" className="border p-2 rounded-md" defaultValue={originalArticle?.title} placeholder="Title" required/>
            <label htmlFor="subtitle">Subtitle</label>
            <textarea name="subtitle" className="border p-2 rounded-md" defaultValue={originalArticle?.subtitle} placeholder="Subtitle" required/>
            <label htmlFor="content">Content</label>
            <textarea name="content" className="border p-2 rounded-md" defaultValue={originalArticle?.content} placeholder="Content" required/>
            <button type="submit" disabled={pending} className="bg-blue-500 cursor-pointer rounded-md">
                {pending ? "Submitting..." : "Submit Article"}
            </button>
        </form>
    )
}