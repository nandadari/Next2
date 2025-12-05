import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col items-center min-h-screen justify-center">
            <h1 className="text-7xl">404</h1>
            <h2 className="mb-5 text-xl">Page Not Fond</h2>
            <Link href='/' className="bg-blue-800 text-white p-3 ">Back To Home</Link>
        </div>
    );
}