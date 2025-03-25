"use client"

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { useRouter } from 'next/navigation'

export default function Card({
  dentist,
  imgSrc,
}: {
  dentist: DentistItem;
  imgSrc: string;
}) {
  const router = useRouter();
  return (
    <InteractiveCard>
      <div className="w-full h-[60%] relative rounded-t-lg text-left">
        <Image
          src={imgSrc}
          alt="Dentist Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full text-black px-[10px]">
        <div className="text-left">Name: {dentist.name}</div>
        <div className="text-left">Experience: {dentist.yearsOfExp} years</div>
        <div className="text-left">Expertise: {dentist.areaOfExpertise}</div>
      </div>
      {/* <button className="mt-3 w-[70%] bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            onClick={(e)=>{e.stopPropagation(); router.push(`/booking?did=${dentist._id}&dname=${dentist.name}`)}}
            >
                Select Dentist
            </button> */}
      
    </InteractiveCard>
  );
}
