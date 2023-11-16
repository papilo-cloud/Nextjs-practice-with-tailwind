import Image from 'next/image'
import React from 'react'
import x from '@/images/social-x.svg'
import linkedIn from '@/images/social-linkedIn.svg'
import discord from '@/images/social-discord.svg'

export const Footer = () => {
  return (
    <footer className='w-full relative h-[29px] mb-10 mt-16 flex justify-between items-center'>
        <div className="w-[63px] font-normal text-[#f9f9f9] text-2xl"><p>Streal</p></div>
        <nav className='w-[770px] h-[19px]  '>
            <ul role='list' className='flex text-[#f9f9f9] opacity-80 gap-8 text-base font-normal'>
                <li>Terms and Conditions</li>
                <li>User Agreement</li>
                <li>Privacy Policy</li>
                <li>Whitepaper</li>
                <li>Lite Paper</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <div className="gap-[19px] flex h-[25px] w-[124px] justify-between">
            <Image height={25} width={27.11} src={x} alt='social-icon' />
            <Image height={25} width={25.94} src={linkedIn} alt='social-icon' />
            <Image height={25} width={31.74} src={discord} alt='social-icon' />
        </div>
    </footer>
  )
}
