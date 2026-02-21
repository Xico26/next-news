"use client"

import { useRouter } from "next/navigation"
import {deleteArticle} from "@/lib/actions";

export default function Buttons ({id}: {id: string}) {
    const router = useRouter()

    const handleDelete = async () => {
        const hasConfirmed = confirm("Are you sure you want to delete this article?")
        if (hasConfirmed) {
            await deleteArticle(id)
        }
    }

    const editArticle = async () => {
        router.push(`/edit/${id}`)
    }

    return (
        <div className="flex flex-row gap-4 my-16">
            <button className="p-2 rounded-md bg-blue-500 h-10 cursor-pointer" onClick={editArticle}>Update Article</button>
            <button className="p-2 rounded-md bg-red-500 h-10 cursor-pointer" onClick={handleDelete}>Delete Article</button>
        </div>
    )
}