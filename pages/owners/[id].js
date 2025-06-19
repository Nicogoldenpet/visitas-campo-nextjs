import { getAllOwners } from "@/lib/owners";
import OwnerCard from "@/components/OwnerCard";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticPaths() {
  const owners = await getAllOwners();
  const paths = owners.map((owner) => ({
    params: { id: owner.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Si no encuentra el ID, mostrará una página 404
  };
}

export async function getStaticProps({ params }) {
  //SSG
  const owners = await getAllOwners();
  const owner = owners.find((f) => f.id.toString() === params.id);
  return {
    props: {
      owner,
    },
  };
}

export default function OwnerDetail({ owner }) {
  const router = useRouter();
  const { id } = router.query;

  if (!owner) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Owners</title>
      </Head>
      <main className="p-8">
        <h2 className="font-semibold text-lg">Owner #{id}</h2>
        <ul>
          <OwnerCard owner={owner} ShowLink={false} />
        </ul>
      </main>
    </>
  );
}
