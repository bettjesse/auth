import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";




export const  POST = async (req: Request) => {

    const session =  await auth()
    const userId = session?.user?.id
    
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
        const { body} =  await req.json()
        const post = await db.post.create({
            data: {
                userId,
                body
            }
        })

return NextResponse.json(post)
    } catch (error ) {
        return new NextResponse("internal Error" , {status: 500})
    }

}