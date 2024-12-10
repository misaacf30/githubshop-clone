import Link from "next/link";


export default function NotFound() {
  return (
    <div className='px-[16px] pt-[30px] pb-[40px] max-w-[1390px] mx-auto text-center'>
        <h1 className='text-[70px] text-[#23282e] font-extrabold mt-[70px] mb-[20px]'>
            404
        </h1>
        <p className='text-[15px] text-[#4a4a4a] mb-[100px]'>
            You might want to check that URL again or head over to our&nbsp;
            <Link
                href={'/'}
                className='text-[#000000] underline hover:no-underline'
            >
            homepage.
            </Link>
        </p>
    </div>
  )
}
