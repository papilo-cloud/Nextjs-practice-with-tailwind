import React from 'react'

export const Presales = () => {
  return (
    <section className="css-flex1-text relative flex w-full m-0 p-0 h-[607px] p-[2px] rounded-[24px]">
        <div className='css-presales flex justify-between align-center bg-[#0F1212] w-full h-full m-0 rounded-[24px] p-[40px]'>
            <div className="w-[701px] flex justify-center flex-col align-center">
                <div className="pl-2">
                    <h2 className='text-[2.5em] text-white leading-[48px] font-semibold mb-3 '>Discover <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] ' >Streal Presales:</span> </h2>
                    <h4 className='text-[2.5em] text-[#f9f9f9] leading-[48px] font-medium opacity-80 ' >Your Pathway to Future Investments</h4>
                    <div className=" text-[1em] text-[#C1CFDA] leading-[27.2px] font-small opacity-80">
                        <p className='leading-[27.2px] mt-6'>Do not miss the thrilling opportunity to 
                            become a part of our project right from its 
                            inception. Streal's presale program is divided into 
                            three distinct phases, each signaling the launch of a
                            new blockchain era.</p>
                        <p className='leading-[27.2px] mt-6'>Each phase consists of three rounds, where our coin will be available
                            at exclusive discounts of 80%, 40%, and 20%.
                            This is your opportunity to secure your investment in a rapidly evolving
                            landscape.</p>
                        <p className='leading-[27.2px] mt-6'>Stay tuned for more updates – the future is just a few clicks
                            away with Streal!</p>
                    </div>
                </div>
            </div>
            <div className="css-presale p-[1px] relative w-[408px] h-[511px] rounded-[16px]">
                <div className="relative css-presale-box w-full h-full bg-[#0F1212] rounded-[16px] p-[31px] over-flow-hidden">
                    <div className="absolute top-0 right-0 w-[116px] h-[57px] rounded-tr-[16px] rounded-bl-[7px] flex justify-center items-center bg-gradient-to-r from-[#20a6f941] from-30% to-[#59f8f949] to-100%">
                        <p className='text-[16px] font-semibold text-center text-white opacity-100'>Phase 1</p>
                    </div>
                    <div className="m-0 p-0">
                        <p>Presale ends in:</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
