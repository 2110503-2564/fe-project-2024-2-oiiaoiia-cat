import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Link from 'next/link';

export default async function TopMenu(){

    const session = await getServerSession(authOptions);

    return(
        <div className="h-12 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-gray-300 flex flex-row-reverse items-center px-4">
            <Image src={'/img/logo.png'} className="h-full w-auto" alt='logo'
            width={0} height={0} sizes='100vh'/>
            <TopMenuItem title='booking' pageRef='/booking'/>
            <div className='flex flex-row-reverse absolute left-0 h-full'>
            <TopMenuItem title='my booking' pageRef='/mybooking'/>
            {
                session? 
                <Link href="/api/auth/signout"> 
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out
                    </div>
                </Link>
                :<Link  href="/api/auth/signin">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-In
                    </div>
                </Link>
            }
            </div>
        </div>
    );
}