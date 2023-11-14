import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const news = () => {
  const router = useRouter()
  type queries = string | undefined | string[]
  let id: queries = router.query.news
  console.log(router)

  const data = [
    {
        id: 1,
        name: 'abuBlog',
        title: 'How to draw',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime assumenda, alias eum ipsum, rem recusandae neque dolorem nulla labore exercitationem deleniti voluptatibus. Ratione,
         blanditiis hic labore asperiores eaque doloremque!`
    },
    {
        id: 2,
        name: 'saniBlog',
        title: 'How to Cook',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime assumenda, alias eum ipsum, rem recusandae neque dolorem nulla labore exercitationem deleniti voluptatibus. Ratione,
         blanditiis hic labore asperiores eaque doloremque!`
    },
    {
        id: 3,
        name: 'soloBlog',
        title: 'How to make money online',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime assumenda, alias eum ipsum, rem recusandae neque dolorem nulla labore exercitationem deleniti voluptatibus. Ratione,
         blanditiis hic labore asperiores eaque doloremque!`
    },
    {
        id: 4,
        name: 'habibBlog',
        title: 'Say no to Drugs',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime assumenda, alias eum ipsum, rem recusandae neque dolorem nulla labore exercitationem deleniti voluptatibus. Ratione,
         blanditiis hic labore asperiores eaque doloremque!`
    }
]
   const news = data.find(id => id.name == router.query.news)
   console.log(news)
  return (
    <div>
      <h1>{news?.name}</h1>
        <h2>{news?.title}</h2>
       <p>{news?.content}</p>
    </div>
  )
}

export default news