import DentistList from "@/components/DentistList";
import getDentists from "@/libs/getDentists";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function dentistsPage() {
  const dentists = getDentists();

  return (
    <main className="text-center p-5">
      <Suspense
        fallback={
          <p className="text-black">
            Loading ... <LinearProgress />
          </p>
        }
      >
        <DentistList dentistJson={dentists} />
      </Suspense>
    </main>
  );
}
