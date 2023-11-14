import Link from "next/link"

// export default ({datas}: {datas: any}) => {
//   console.log(datas)
//   return (
//     <div>
//       <h3>blog</h3>
//       <Link href='/'>home</Link>
//     </div>
//   )
// }
// // GetS
// export async function getStaticProps () {
//   const res = await fetch(`https://randomuser.me/api/?results=20`)
//   const post = await res.json()
//   const datas = post.results
//   return{
//     props: {
//       datas
//     }
//   }
// }

const blog = () => {
  return (
    <div>
      <h1>blog</h1>
      <Link href='/'>home</Link>
    </div>
  )
}

export default blog