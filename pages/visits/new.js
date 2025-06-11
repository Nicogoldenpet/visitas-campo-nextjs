import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHome,
  faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

function Nueva() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4 text-cyan-400">
        <FontAwesomeIcon icon={faCalendar} className="me-2" />
        Agregar nueva cita
      </h1>
      <div className="flex gap-4">
        <Link href="/" className="text-blue-600 underline">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Volver al Home
        </Link>
        <Link href="/visits" className="text-orange-400 underline">
          <FontAwesomeIcon icon={faSquareCaretLeft} className="me-2" />
          Volver a listado de visitas
        </Link>
      </div>
    </main>
  );
}

export default Nueva;
