import Link from 'next/link'
import { TbMenu2, TbSearch } from "react-icons/tb"

export default function Header() {
  return (
    <div className='flex-row flex items-center justify-between transform transition-all py-4'>
      <Link
        href={""}
        className="hover:underline"
      >
        <TbMenu2 className=' text-3xl' />
      </Link>

      <h2 className="md:text-4xl sm:text-6xl font-bold tracking-tighter leading-tight md:pr-8 italic">
        <Link href="/" className="hover:underline">
          sonora.
        </Link>
      </h2>

      <Link
        href={""}
        className="hover:underline"
      >
        <TbSearch className=' text-3xl' />
      </Link>

    </div>
  )
}
