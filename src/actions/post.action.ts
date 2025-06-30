"use server"

import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, imageURL?: string) {
    try {
        const userId = await getDbUserId();
        const post = await prisma.post.create({
            data: {
                content,
                image: imageURL || null,
                authorId: userId,
            },
        });
        revalidatePath("/");

        return { success: true, post };
    } catch (error) {
        console.error("Error creating post:", error);
        return { success: false, error: "Failed to create post" };
    }
}