import Link from "next/link";
import { ClassNames } from "@emotion/react";
import Card from "./Card";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function DentistList({
  dentistJson,
}: {
  dentistJson: Promise<DentistJson>;
}) {
  const dentistJsonReady = await dentistJson;

  const session = await getServerSession(authOptions);
  if(!session || !session.user.token) return null;
    
  const profile = await getUserProfile(session.user.token);
  console.log(profile);

  return (
    <div className="text-black">
      Meet our {dentistJsonReady.count} Dentists
      <div
        className="m-5 flex flex-row justify-around content-around"
      >
        {dentistJsonReady.data.map((dentistItem: DentistItem) => (
          <Card key={dentistItem.name} dentist={dentistItem} imgSrc={'/img/dentistPlaceholder.png'} />
        ))}
      </div>
    </div>
  );
}
