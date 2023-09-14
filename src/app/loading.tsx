// next.js 的 loading 会成为一个 suspense 边界的 fallback 参数，
// 这个 suspense 将被自动添加到 layout 中并包裹 page

export default function Loading() {
  return (
    <>
      <p>Loading...</p>
    </>
  )
}
