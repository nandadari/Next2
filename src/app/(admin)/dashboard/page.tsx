'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Dashboardpage() {

    return(
        <div  className="w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center">
            <h1>Dashboard</h1>
        </div>
    );
}