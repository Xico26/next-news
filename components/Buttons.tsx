"use client"

import { useRouter } from "next/navigation"

export default function Buttons ({id}: {id: string}) {
    const router = useRouter()

    const deleteArticle = async () => {
        const hasConfirmed = confirm("Are you sure you want to delete this article?")
        if (hasConfirmed) {
            try {
                await fetch(`https://69983289d66520f95f16d3e3.mockapi.io/api/article/${id}`, {
                    method: "DELETE"
                })
                router.push("/")
            } catch (e) {
                console.log(e)
            }
        }
    }
    const editArticle = async () => {
        router.push(`/edit/${id}`)
    }
    return (
        <div className="flex flex-row gap-4 my-16">
            <button className="p-2 rounded-md bg-blue-500 h-10 cursor-pointer" onClick={editArticle}>Update Article</button>
            <button className="p-2 rounded-md bg-red-500 h-10 cursor-pointer" onClick={deleteArticle}>Delete Article</button>
        </div>
    )
}