import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

  const data = [
        {
            id: 1,
            title: "sepatu",
            price: 100000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/e9215dd7-6728-4411-952a-4e5a997b55a8/W+NIKE+AIR+SUPERFLY+LX.png"
        },
        {
            id: 2,
            title: "sendal ijo",
            price: 10000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da2e417c-f0f1-4089-bbe0-c45d6db187be/WMNS+JORDAN+NOLA+SLIDE.png"      
        },
        {
            id: 3,
            title: "shoes",
            price: 1580000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/b576c6ca-56b5-4d64-9c3c-2a3146edd1cc/W+NIKE+AIR+MAX+PHENOMENA.png"      
        },
        {
            id: 4,
            title: "gofly",
            price: 1580000,
            image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/247616b5-1d3b-4777-abbb-d5e08a924b78/NIKE+GO+FLYEASE.png"      
        },
        
    ]
    
    
export async function GET(request : NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const DetailProduct = await retrieveDataById("products", id);
        if(DetailProduct){
            return NextResponse.json({status: 200, message: "Succes", data: DetailProduct});
        }
        return NextResponse.json({status: 400, message: "Not Found", data: ""});
    }
    const products = await retrieveData("products");
    return NextResponse.json({status: 200, message: "Succes", data: products});
}