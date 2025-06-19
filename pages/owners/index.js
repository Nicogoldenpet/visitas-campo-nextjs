import "@/lib/owners"
import OwnerCard from "@/components/OwnerCard";
import { getAllOwners } from "@/lib/owners";
import Head from "next/head";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquarePlus, faHome } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  const owners = await getAllOwners();
  return {
    props: {
      owners,
    },
    revalidate: 10, // Revalidar cada 10 segundos ISR
  };
}

export default function Duenos({ owners }) {
  return (
    <>
      <Head>
        <title>Owners</title>
      </Head>
      <main className="p-6">
        <h1 className="text-xl font-bold mb-4">Dueños de las fincas</h1>
        <ul className="space-y-4">
          {owners.map((dueno) => (
            <OwnerCard key={dueno.id} owner={dueno} />
          ))}
        </ul>
      </main>
    </>
  );
}
