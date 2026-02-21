"use server"

import {redirect} from "next/navigation";

const baseUrl = "https://69983289d66520f95f16d3e3.mockapi.io/api/article"

export async function createArticle(data: any) {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    if (res.ok) {
        const article = await res.json();
        redirect(`/article/${article.id}`);
    }
}

export async function updateArticle(data: any, id?: string) {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        redirect(`/article/${id}`);
    }
}

export async function submitArticle(id: string | undefined, previous: any, formData: FormData) {
    const rawFormData = {
        author: formData.get("author"),
        title: formData.get("title"),
        subtitle: formData.get("subtitle"),
        content: formData.get("content"),
    }

    if (id) {
        await updateArticle(rawFormData, id)
    } else {
        await createArticle(rawFormData)
    }
}

export async function deleteArticle(id?: string) {
    const res = await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`, {
        method: "DELETE"
    })

    if (res.ok) {
        redirect("/")
    }
}