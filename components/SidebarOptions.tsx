'use client'

import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOptions( {href, id}: {
    href: string;
    id: string;
}) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";

  if (!data) return null;

  return (
    <Link href={href} className={`border p-2 rounded-md ${isActive ? "bg-gray-300 font-bold border-black" : "border-gray-400"}`}>
        <p className="truncate">{data.title}</p>
    </Link>
  )
}
export default SidebarOptions