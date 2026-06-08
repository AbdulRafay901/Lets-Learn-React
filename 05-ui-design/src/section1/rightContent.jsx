import React from 'react'
import { ArrowRight } from 'lucide-react'
export const RightContent = () => {
  return (
    <div className='flex justify-end h-full px-20 mt-[200px]'>  
          <div className="text-white flex flex-col gap-10">
                <h1 className='text-[50px] font-bold leading-15'>Build a better <br></br> business & faster</h1>
          <p className='font-sans'>
            Subdue creature does face signs evening good sixth foreign <br></br> gaered one. Fruit. Third every fruitful multiply subdue creature <br></br> doesn't face signs evening good sixth tyou're </p>
            <button className='flex justify-between px-5 items-center bg-[#f84b67] w-50 h-12 text-[12px] font-medium'>BEGIN FREE TRIAL
                <ArrowRight className='size-5'/>
            </button>
          </div>
    </div>
  )
}

