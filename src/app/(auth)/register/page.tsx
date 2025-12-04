'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const {push} = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState('false');
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setError('');
    setIsLoading('true');
   const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    })
    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push ('/login');
    }else{
      setError('Email Already Exist');
      setIsLoading(false);
      
    }
  };


 return(
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">Sin Up your account</h2>
  </div>
  {error !== '' && (
    <div className="text-red-600 font-bold  mt-5 mx-auto items-center">{error}</div>
  )}

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  method="POST" className="space-y-6" onSubmit={(e) => handleSubmit(e)} >
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Email address</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
        </div>
      </div>
        <div>
        <label htmlFor="fullname" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Your Fullname</label>
        <div className="mt-2">
          <input id="fullname" type="text" name="fullname" required  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" required  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">Sign Up</button>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Do You Have Acccount ? {" "} 
        <Link href="/login" className="text-blue-700 hover:underline dark:text-blue-300">Sign In Here !</Link>
      </div>
    </form>
  </div>
</div>
    )
}