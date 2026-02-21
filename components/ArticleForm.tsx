"use client"

import {useRouter} from "next/navigation";
import {ChangeEvent, SubmitEvent, useState} from "react";
import {createArticle, updateArticle} from "@/lib/actions";

export default function ArticleForm({originalArticle}: {originalArticle?: Article}) {
    const router = useRouter();
    let editMode: boolean = false;

    const [article, setArticle] = useState({
        author: originalArticle?.author || '',
        title: originalArticle?.title || '',
        subtitle: originalArticle?.subtitle || '',
        content: originalArticle?.content || '',
    });

    if (originalArticle !== undefined && originalArticle !== null) {
        editMode = true;
    }

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setArticle(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        if (editMode && originalArticle?.id) {
            await updateArticle(article, originalArticle?.id)
        } else {
            await createArticle(article)
        }
        setIsSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center w-full">
            <label htmlFor="author">Author</label>
            <input name="author" className="border p-2 rounded-md" value={article.author} onChange={handleChange} placeholder="Author" required/>
            <label htmlFor="title">Title</label>
            <input name="title" className="border p-2 rounded-md" value={article.title} onChange={handleChange} placeholder="Title" required/>
            <label htmlFor="subtitle">Subtitle</label>
            <textarea name="subtitle" className="border p-2 rounded-md" value={article.subtitle} onChange={handleChange} placeholder="Subtitle" required/>
            <label htmlFor="content">Content</label>
            <textarea name="content" className="border p-2 rounded-md" value={article.content} onChange={handleChange} placeholder="Content" required/>
            <button type="submit" disabled={isSubmitting} className="bg-blue-500 cursor-pointer rounded-md">
                {isSubmitting ? "Submitting..." : "Submit Article"}
            </button>
        </form>
    )
}