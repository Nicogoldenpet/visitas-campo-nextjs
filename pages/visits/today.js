import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faHome } from "@fortawesome/free-solid-svg-icons";

async function getServerSideProps() {
  //SSR
  const todayVisits = [
    {
      id: 1,
      name: "Finca Santa María",
      date: "2023-10-01",
      description: "Visita a la finca para inspección de cultivos.",
    },
    {
      id: 2,
      name: "Finca El Paraíso",
      date: "2023-10-01",
      description: "Revisión de sistemas de riego y fertilización.",
    },
  ];

  return {
    props: {
      visits: todayVisits,
    },
  };
}

function TodayVisits({ visits }) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Listado de Visitas</h1>
      <ul className="space-y-4">
        {visits.map((finca) => (
          <li key={finca.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{finca.name}</h2>
            <p className="text-sm text-gray-500">Fecha visita: {finca.date}</p>
            <p className="text-gray-700">{finca.description}</p>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Volver al Home
        </Link>
        <Link href="/visits/new" className="text-green-600 underline">
          Registrar nueva visita
          <FontAwesomeIcon icon={faSquarePlus} className="ms-2" />
        </Link>
      </div>
    </main>
  );
}

export { TodayVisits as default, getServerSideProps };
