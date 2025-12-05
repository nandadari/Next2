import { error } from "console";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:'Home',
  description: 'Aplikasi menggunakan Next.Js',
  authors: [{name: 'aprillia', url:'http://localhost:3000/' }],
  icons: {
    icon: "image/ic1.png"
  },
  openGraph: {
    title:'Home', 
  }
};

export default function Home() {
  return (
      <main className="flex min-h-screen p-24 flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black ">
        <h1> hello word</h1>
      </main>
  );
}
