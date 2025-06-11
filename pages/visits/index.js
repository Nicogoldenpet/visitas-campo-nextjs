import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faHome } from "@fortawesome/free-solid-svg-icons";

function Visitas() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Listado de Visitas</h1>
      <ul className="list-dict ml-5 mb-4">
        <li>Visita a finca "La Esperanza"</li>
        <li>Inspección técnica en zona rural</li>
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

export default Visitas;
