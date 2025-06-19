import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTractor,
  faCirclePlus,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <nav className="bg-green-700 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Agrotracking
          </Link>
          <div className="space-x-5">
            <Link href="/visits" className="hover:underline">
              <FontAwesomeIcon icon={faTractor} className="me-1" />
              Visits
            </Link>
            <Link href="/visits/new" className="hover:underline">
              <FontAwesomeIcon icon={faCirclePlus} className="me-1" />
              New
            </Link>
            <Link href="/visits/live" className="hover:underline">
              <FontAwesomeIcon icon={faSatelliteDish} className="me-1" />
              Live
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-4xl mx-auto p-6">{children}</main>
      <footer className="bg-green-700 text-white p-2 text-center">
        <small>
          &copy; {new Date().getFullYear()} AgroTracking. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}
