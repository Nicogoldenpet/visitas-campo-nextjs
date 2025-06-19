import { getAllVisits } from "@/lib/visits";
import VisitCard from "@/components/VisitCard";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticPaths() {
  const visits = await getAllVisits();
  const paths = visits.map((visit) => ({
    params: { id: visit.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Si no encuentra el ID, mostrará una página 404
  };
}

export async function getStaticProps({ params }) {
  //SSG
  const visits = await getAllVisits();
  const visit = visits.find((v) => v.id.toString() === params.id);
  return {
    props: {
      visit,
    },
  };
}

export default function VisitDetail({ visit }) {
  const router = useRouter();
  const { id } = router.query;

  if (!visit) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Visits</title>
      </Head>
      <main className="p-8">
        <h2 className="font-semibold text-lg">Visit #{id}</h2>
        <ul>
          <VisitCard visit={visit} ShowLink={false} />
        </ul>
      </main>
    </>
  );
}
