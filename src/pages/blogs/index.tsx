import Link from 'next/link'
import React from 'react'

export default () => {
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
  return (
    <div className=' w-[300px] text-2xl border-2 sm:w-100 md:w-[500px] p-3 bg-white text-sky-400 font-medium rounded-lg shadow-2xl mt-3'>
        <h3>Blogs nested route</h3>
        <ul>{data.map(dat => <li key={dat.id}>
          <Link href={{
            pathname: '/blogs/[name]',
            query: {name: dat.name}
          }}>{dat.title}</Link>
       </li> )}
       </ul>
       <button className='hover:bg-blue-700 bg-green-900 font-bold text-center text-white py-3 px-4 rounded-lg'>Click me</button>
    </div>
  )
}
