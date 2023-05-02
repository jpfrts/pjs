import Link from 'next/link';
import { CMS_NAME, CMS_URL } from '../lib/constants'
import { TbMenu2, TbSearch } from "react-icons/tb";

export default function Intro() {
  return (
    <section className="flex-row flex items-center justify-between transform transition-all py-4">
      <Link
        href={""}
        className="hover:underline"
      >
        <TbMenu2 className=' text-3xl' />
      </Link>
      <Link
        href={"/"}
      >
        <h1 className="md:text-4xl sm:text-6xl font-bold tracking-tighter leading-tight md:pr-8 italic">
          sonora.
        </h1>
      </Link>
      <Link
        href={""}
        className="hover:underline"
      >
        <TbSearch className=' text-3xl' />
      </Link>
    </section>
  )
}
