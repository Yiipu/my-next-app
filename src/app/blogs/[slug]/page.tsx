export default function Blog({
  params
}: {
  params: { slug: string }
}) {
  return (
    <div>
      My Post: {params.slug}
    </div>
  )
}