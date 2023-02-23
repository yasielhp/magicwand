import Image from 'next/image'

export function Footer () {
  return (
    <footer className='w-full opacity-40'>
      <div className='flex justify-center items-center max-w-7xl mx-auto p-4 gap-2'>
        <small className='font-semibold text-gray-500'>Hackathon by </small>
        <a href='https://midu.dev/' target='_blank' rel='noreferrer'><Image className='w-28' src='/midudev.png' alt='Midudev' width={569} height={162} /></a>
        <a href='https://cloudinary.com/' target='_blank' rel='noreferrer'><Image className='w-28' src='/cloudinary.svg' alt='Cloudinary' width={160} height={30} /></a>
      </div>
    </footer>
  )
}
