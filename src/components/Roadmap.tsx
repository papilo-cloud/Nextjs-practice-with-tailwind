import React from 'react'
// import line9 from '@/../public/images/Line9.svg'
import line9 from '../images/Line9.svg'
import line8 from '../images/Line8.svg'
import Gropp23 from '../images/Group23.svg'
import Image from 'next/image'
import datas from '@/data/data.json'

export const Roadmap = () => {
  return (
    <div className="roadmap relative flex w-full m-0 p-0 h-[1885px]">
          <h2 className='text-white absolute top-[32px] text-[48px] font-semibold'>Roadmap</h2>
          <div className="fle1 mt-[130px] w-[613px]">
            {datas[0].map((data, id) => 
                <div className="flex1-cont flex items-center mt-10" key={id}>
                    <div className="css-flex1-text relative rounded-xl p-[1px] w-[528px]">
                            <div className='css-gradient p-[32px] bg-[#0F1212] rounded-xl'>
                            <h4 className='css-h2 text-[24px] leading-10 font-semibold'>{data.title}</h4>
                            <p className='text-[20px] text-[#F9F9F9] mb-2 leading-9 font-medium'>{data.subtitle}</p>
                            <ul className="list-disc text-[#C1CFDA] ml-[30px] font-normal leading-7">
                                {data.text.map((txt, x ) => <li key={x}>{txt}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className='relative w-[85px] z-100'>
                        <Image src={line9} alt='right-arrow' />
                    </div>
                </div>
            )}
            </div>


          <div className="css-flex2 relative w-[70px] bg-[#0F1212] h-full">
            {/* <div className="relative h-[70px] w-[70px]"> */}
              <Image src={Gropp23} alt='arrow-down' className='absolute bottom-0' />
            {/* </div> */}
          </div>

          <div className="fle1 mt-[257px] w-[613px]">
            {datas[1].map((data, id) => 
                <div className="flex1-cont flex-row-reverse flex items-center mt-10" key={id}>
                <div className="css-flex1-text relative rounded-xl p-[1px] w-[528px] ">
                    <div className='css-gradient p-[32px] bg-[#0F1212] rounded-xl'>
                    <h4 className='css-h2 text-[24px] leading-10 font-semibold'>{data.title}</h4>
                    <p className='text-[20px] text-[#F9F9F9] mb-2 leading-9 font-medium'>{data.subtitle}</p>
                    <ul className="list-disc ml-[30px] text-[#C1CFDA] font-normal leading-7">
                    {data.text.map((txt, x ) => <li key={x}>{txt}</li>)}
                    </ul>
                    </div>
                </div>
                <div className='relative w-[85px]'>
                    <Image src={line8} alt='left-arrow' />
                </div>
                </div>
            )}
            </div>
        </div>
  )
}
