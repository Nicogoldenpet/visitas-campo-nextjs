import Link from "next/link";

function VisitCard({ visit, ShowLink = true }) {
  const title = visit.name || "Visita al campo";
  return (
    <li className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg text-green-700">
        {ShowLink ? (
          <Link href={`/visits/${visit.id}`} className="hover:underline">
            {visit.title || "Visita a la finca"}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-sm text-gray-500">{visit.date}</p>
      <p className="text-gray-700">{visit.description}</p>
    </li>
  );
}

export { VisitCard as default };
