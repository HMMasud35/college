import React from 'react'
import Image from 'next/image'
import { GrDocumentPdf } from "react-icons/gr";
import Link from 'next/link';

const Notice = () => {
  return (
    <section className='relative'>
      <Image className='w-full h-110' width={800} height={800} src="/image-2.jpeg" alt='image-2.png' />
      <div className="bg-gray-950 py-30">
        <div className="container">
          <div className='p-10 bg-black/50 rounded-2xl w-200 absolute top-10'>
            <h5 className='text-teal-600 text-2xl font-semibold uppercase mb-3 text-shadow-md my-5 text-shadow-black'>বিজ্ঞপ্তি</h5>
            <h2 className='text-white text-6xl font-bold uppercase leading-15 mb-8'>বিজ্ঞপ্তি<span className='text-teal-600 text-shadow-md my-5 text-shadow-black'> সমূহ</span></h2>
            <p className='text-justify w-170 text-lg text-white/80 relative left-5 after:w-1.5 after:h-20 after:bg-teal-600 after:absolute after:top-1 after:-left-5 after:rounded-full text-shadow-md my-5 text-shadow-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore in id recusandae perspiciatis sit fugit molestias velit  consequuntur et quo, esse in repellendus nihil voluptatem. Fugit, qui.</p>
          </div>
          
          <div className='flex justify-between  w-full bg-gray-800 mb-5 p-5 rounded-2xl'>
            <div className='w-full grid grid-cols-8 gap-3'>
              <input className="col-span-4 bg-gray-800 py-2 px-5 text-white border-2 border-teal-600" type="search" name="search" id="search" placeholder='Search' />
              <button className='col-start-7 bg-gray-800 py-2 px-5 text-white border-2 border-teal-600'>Filter</button>
              <button className=' col-start-8 bg-gray-800 py-2 px-5 text-white border-2 border-teal-600'>Export</button>
            </div>
          </div>

          <div className='grid grid-cols-8 gap-3 h-18 bg-gray-800 p-3 rounded-t-xl rounded-br-xl mb-2'>
            <h4 className='w-10 border-2 border-teal-600 text-teal-600 text-xl text-center p-2'>০১</h4>
            <h2 className='w-267 -ml-30 col-span-5 border-2 border-teal-600 text-white/80 text-xl p-2'>পরিক্ষার রুটিন</h2>
            <h3 className='w-full ml-30 border-2 border-teal-600 text-white/80 text-xl text-center p-2'>০১/০৩/২৫ ইং</h3>
            <Link href={"https://react-icons.github.io/react-icons/search/#q=pdf"} target='_blank' className='w-11 ml-29 border-2 border-teal-600 p-1 cursor-pointer bg-teal-600 hover:bg-black group'>
              <GrDocumentPdf className='text-black text-3xl group-hover:text-teal-600' />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Notice