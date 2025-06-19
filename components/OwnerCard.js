import Link from "next/link";

function OwnerCard({ owner, ShowLink = true }) {
  const title = owner.name || "Propietario de Finca";
  return (
    <li className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg text-green-700">
        {ShowLink ? (
          <Link href={`/owners/${owner.id}`} className="hover:underline">
            {owner.finca || "Propietario de la finca"}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-sm text-gray-500">Dueño desde: {owner.date}</p>
      <p className="text-gray-700">{owner.charge}</p>
    </li>
  );
}

export { OwnerCard as default };
