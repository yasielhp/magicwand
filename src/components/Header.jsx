import Link from 'next/link'
import { IconGithub } from './IconGithub'

export function Header () {
  return (
    <header className='w-full shadow-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto  p-4'>
        <Link href='/'><h1 className='uppercase text-xl text-gray-500'>Magic<span className='font-bold text-lime-500'>wand</span></h1></Link>
        <a href='#' target='_blank'><IconGithub /></a>
      </div>
    </header>
  )
}
