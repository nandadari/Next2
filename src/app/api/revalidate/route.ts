import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");
    const secret = request.nextUrl.searchParams.get("secret");

    if (secret !== "123") {
        return NextResponse.json({status: 401, message: "Invalid Secret"}, {status: 401});
    }

    if (!tag) {
        return NextResponse.json({status: 400, message: "Missing tag Params"}, {status: 400});
    }
    //
    // @ts-ignore  // <-- Tambahkan komentar ini di atas baris yang bermasalah
    revalidateTag(tag);
    return NextResponse.json({revalidate: true, now: Date.now});
}
