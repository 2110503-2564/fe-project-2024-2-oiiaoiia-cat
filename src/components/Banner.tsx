'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner(){
    const router = useRouter();

    const{data:session} = useSession();

    console.log(session);

    return (
        <div className="w-screen h-[60vh] relative p-1">
            <Image src={'/img/cover.jpg'} 
            alt='cover' 
            fill={true}
            priority
            className='object-cover'/>
            <div className="relative top-[200px] z-20 text-center">
                <h1 className='text-3xl font-medium text-black' >Your best life begins with a smile.</h1>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/dentists')}}
            >
                Select Dentists
            </button>
        </div>
    )
}