
export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className='text-center'>
        {params.slug}
    </div>
  )
}
