import React from 'react'

export const Presales = () => {
  return (
    <section className="css-flex1-text relative flex w-full m-0 p-0 h-[607px] p-[2px] rounded-[24px]">
        <div className='css-presales flex justify-between align-center bg-[#0F1212] w-full h-full m-0 rounded-[24px] p-[40px]'>
            <div className="w-[701px] flex justify-center flex-col align-center">
                <div className="pl-2">
                    <h2 className='text-[2.5em] text-white leading-[48px] font-semibold mb-3 '>Discover <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] ' >Streal Presales:</span> </h2>
                    <h4 className='text-[2.5em] text-[#f9f9f9] leading-[48px] font-medium opacity-80 ' >Your Pathway to Future Investments</h4>
                    <div className=" text-base text-[#C1CFDA] leading-[27.2px] font-normal opacity-80">
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
                    <div className="absolute top-0 right-0 w-[116px] h-[57px] rounded-tr-[16px] rounded-bl-[7px] flex justify-center items-center bg-gradient-to-r from-[#20a6f941] from-30% to-[#59f8f944] to-80%">
                        <p className='text-[16px] font-semibold text-center text-white opacity-100'>Phase 1</p>
                    </div>
                    <div className="m-0 p-0">
                        <p className='text-[#f9f9f9] text-xl font-medium mt-4 '>Presale ends in:</p>
                        <div className="w-[344px] h-[80px] relative flex justify-between mt-[12px] leading-none">
                            <div className='rounded bg-gradient-to-r from-[#20a6f921] from-50% to-[#59f8f924] to-100% w-[80px] h-[80px] text-[#f9f9f9] flex flex-col justify-center items-center '>
                                <p className='font-semibold text-[32px] '>120</p>
                                <p className=' font-normal opacity-80 text-sm '>days</p>
                            </div>
                            <div className='rounded bg-gradient-to-r from-[#20a6f921] from-50% to-[#59f8f924] to-100% w-[80px] h-[80px] text-[#f9f9f9] flex flex-col justify-center items-center '>
                                <p className='font-semibold text-[32px] '>23</p>
                                <p className=' font-normal opacity-80 text-sm '>hours</p>
                            </div>
                            <div className='rounded bg-gradient-to-r from-[#20a6f921] from-50% to-[#59f8f924] to-100% w-[80px] h-[80px] text-[#f9f9f9] flex flex-col justify-center items-center '>
                                <p className='font-semibold text-[32px] '>18</p>
                                <p className=' font-normal opacity-80 text-sm '>minutes</p>
                            </div>
                            <div className='rounded bg-gradient-to-r from-[#20a6f921] from-50% to-[#59f8f924] to-100% w-[80px] h-[80px] text-[#f9f9f9] flex flex-col justify-center items-center '>
                                <p className='font-semibold text-[32px] '>47</p>
                                <p className=' font-normal opacity-80 text-sm '>seconds</p>
                            </div>
                        </div>
                        <div className="my-[19px]  ">
                            <p className='font-medium text-base text-[#f5f5f5aa] leading-[30px]'>Presale supply: <span className='text-[#fff]'>80,000,000</span></p>
                            <p className='font-medium text-base text-[#f5f5f5aa] leading-[44px]'>Presale price:  <span className='line-through'>5 USDT</span> <span className='text-[#fff]'>3 USDT</span></p>
                        </div>
                        <div className='box-border'>
                            <p className='font-medium text-sm text-[#f5f5f5aa]'>How much streal do you want to buy?:</p>
                            <form className='w-full h-full box-border flex flex-col items-center gap-5'>
                                <div className='w-full h-[48px] rounded border-[1px] border-[#59f8e84d]  '><input className='w-full h-full px-3 outline-0 text-[#f5f5f5aa] font-medium text-base rounded bg-[#59f8e80a]' type="text" placeholder='52,000 Streal' /></div>
                                <div className='w-full h-[48px] rounded border-[1px] border-[#59f8e84d]  '><input className='w-full h-full px-3 outline-0 text-[#f5f5f5aa] font-medium text-base rounded bg-[#59f8e80a]' type="text" placeholder='17,333.33 USDT' /></div>
                                <button type='submit' className='w-[154px] h-[45px] rounded bg-gradient-to-r from-[#20A4F3] from-50% to-[#59F8E8] font-semibold'>Buy Streal Token</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
 