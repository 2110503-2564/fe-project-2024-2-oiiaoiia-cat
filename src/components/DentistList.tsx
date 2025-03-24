import Link from "next/link";
import { ClassNames } from "@emotion/react";
import Card from "./Card";

export default async function DentistList({
  dentistJson,
}: {
  dentistJson: Promise<DentistJson>;
}) {
  const dentistJsonReady = await dentistJson;

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
