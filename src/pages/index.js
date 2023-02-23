import { Layout, Dropzone } from '@/components'

export default function Home () {
  return (
    <Layout>
      <section className='md:max-w-lg mx-auto flex flex-col justify-center items-center py-20'>
        <p className='text-center text-gray-400 md:px-16 p-6'>
          Remove background from images with this simple tool. Just drag and drop
        </p>
        <Dropzone />
      </section>
    </Layout>
  )
}
