import { NextRequest, NextResponse } from "next/server";

  const data = [
        {
            id: 1,
            name: "sepatu",
            price: 100000
        },
        {
            id: 2,
            name: "sendal",
            price: 10000
        }
    ]
    
export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const DetailProduct = data.find((item) => item.id === Number(id));
        if(DetailProduct){
            return NextResponse.json({status: 200, message: "Succes", data: DetailProduct});
        }
        return NextResponse.json({status: 400, message: "Not Found", data: ""});
    }
    return NextResponse.json({status: 200, message: "Succes", data});
}