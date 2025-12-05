"use client";

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=1231`,{
            method: "POST",
        });

        if (!res.ok) {
            setStatus("Revalidate Failed");
        }else {
            const response = await res.json();
            if (response.revalidate) {
                setStatus("Revalidate Success");
            }
        }
    };
    return (
        <div className="w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center mr-5">
            <h1>{status}</h1>
            <button className="p-3 m-5 bg-violet-950 text-violet-400" onClick={() => revalidate()}>Revalidate</button>
        </div>
    );
}