import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IconDelete, IconMagic, IconUpload } from './'

export function Dropzone () {
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(false)

  const onDrop = (acceptedFiles) => {
    setLoading(true)
    const url = 'https://api.cloudinary.com/v1_1/gobantech/image/upload'
    const formData = new FormData()
    const file = acceptedFiles[0]
    formData.append('file', file)
    formData.append('upload_preset', 'magicWand')
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setImage([{
          preview: data.secure_url
        }])
        setLoading(false)
      })
  }
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    open,
    isDragActive
  } = useDropzone({
    noClick: true,
    onDrop,
    maxFiles: 1,
    accept: 'image/png, image/jpeg'
  })
  if (loading) {
    return (
      <div className='w-full flex flex-col items-center justify-center border-2 border-dashed bg-gray-50 text-gray-400 border-lime-300 shadow-2xl rounded-lg aspect-video'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-lime-500' />
      </div>
    )
  }
  if (image.length > 0) {
    return (
      <div className='w-full flex flex-col items-center justify-center border-2 border-dashed bg-gray-50 text-gray-400 border-lime-500 shadow-2xl rounded-lg aspect-video p-4'>
        <img className='rounded-lg' src={image[0]?.preview} alt='preview' />
        <div>
          <button className='bg-lime-500 flex justify-center gap-2 items-center rounded-full font-medium text-white text-lg px-6 py-4 max-w-xs w-full mt-4'><IconMagic height={34} width={34} />Remove background</button>
          <button className='bg-red-500 flex justify-center gap-2 items-center rounded-full font-medium text-white text-lg px-6 py-4 max-w-xs w-full mt-4' onClick={() => setImage([])}><IconDelete height={34} width={34} /> Remove image</button>
        </div>
      </div>
    )
  }
  return (
    <div
      className={`w-full flex flex-col items-center justify-center border-2 border-transparent border-dashed bg-gray-50 text-gray-400 transition duration-300 ease-in-out hover:border-gray-300 focus:border-gray-300 shadow-2xl rounded-lg aspect-video ${
      isDragActive ? (isDragReject ? 'border-red-500' : 'border-lime-500') : ''
    }`} {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className='flex flex-col items-center justify-center w-full mt-10'>
        {isDragActive
          ? (
            <div className='flex flex-col justify-center items-center'>
              <IconUpload />
              <p className='mb-10'>Drop your image files here</p>
            </div>
            )
          : (
            <div className='flex flex-col justify-center items-center w-full'>
              <button className='bg-lime-500 flex justify-center gap-2 items-center rounded-full font-medium text-white text-lg px-6 py-4 max-w-xs w-full' onClick={open}><IconUpload height={34} width={34} />Upload image</button>
              <small className='p-2 mb-4 text-base text-gray-400'>
                or drag a file
              </small>
            </div>
            )}
      </div>
    </div>
  )
}
