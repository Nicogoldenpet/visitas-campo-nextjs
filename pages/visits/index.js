import "@/lib/visits"
import VisitCard from "@/components/VisitCard";
import { getAllVisits } from "@/lib/visits";
import Head from "next/head";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquarePlus, faHome } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  const visits = await getAllVisits();
  return {
    props: {
      visits,
    },
    revalidate: 10, // Revalidar cada 10 segundos ISR
  };
}

export default function Visitas({ visits }) {
  return (
    <>
      <Head>
        <title>Visits</title>
      </Head>
      <main className="p-6">
        <h1 className="text-xl font-bold mb-4">Listado de Visitas</h1>
        <ul className="space-y-4">
          {visits.map((finca) => (
            <VisitCard key={finca.id} visit={finca} />
          ))}
        </ul>
      </main>
    </>
  );
}
