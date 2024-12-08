import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Newarrival = () => {
  return (
    <>
    <div className='font-extrabold text-4xl text-center mt-[3rem]'>
<h1>NEW ARRIVALS</h1>
    </div>
    <div className="overflow-x-auto mb-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex space-x-4 p-4 justify-center items-center">
                            {/* Card 1 */}
                            <div className="flex-shrink-0 w-[260px]  rounded-lg p-4 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer">
                                <div className="relative">
                                    <img src="Frame 32.png" alt="Product 1" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">T-SHIRT WITH TAPE DETAILS</h3>
                                <img src="Frame 35.png" alt="" />
                                <div className="mt-2 text-black font-semibold">$120</div>
                                
                            </div>

                            {/* Card 2 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg p-4 transition-transform duration-500 ease-in-out cursor-pointer hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 33.png" alt="Product 2" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">SKINNY FIT JEANS</h3>
                                <img src="Frame 35.png" alt="" />
                                <div className="mt-2 flex gap-2 text-black font-semibold">$240<span className="line-through text-gray-500">$1160</span>
                                <div className='bg-red-400 w-[58px] h-[28] rounded-[25px] text-center'
                                >-20%</div>
                                </div>
                               
                                {/**  <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button> */}
                            </div>

                            {/* Card 3 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg p-4 transition-transform duration-500 ease-in-out cursor-pointer hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 34.png" alt="Product 3" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">CHECKERED SHIRT</h3>
                                <img src="Frame 39.png" alt="" />
                                <div className="mt-2 text-black font-semibold">$180 </div>
                              
                            </div>

                            {/* Card 4 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg cursor-pointer p-4 transition-transform duration-500 ease-in-out hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 38.png" alt="Product 4" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">SLEEVE STRIPED T-SHIRT</h3>
                                <img src="Frame 41.png" alt="" />
                                <div className="mt-2 flex gap-2 text-black font-semibold">$130 <span className="line-through text-gray-500">$160</span>
                                <div className='bg-red-400 w-[58px] h-[28] rounded-[25px] text-center'
                                >-30%</div>
                            </div>
                          </div>
                          </div>
                          <div className="flex justify-center items-center">
  <button className="mt-4  w-[270px] h-[52px] bg-white text-black py-3 border border-gray-500 rounded-[100px] transition-transform duration-500 ease-in-out hover:scale-110 ">
    view all
  </button></div>
  <div className="flex justify-center items-center">
  <div className="h-[1px] w-[80%] bg-gray-300 mb-4 mt-7 justify-center items-center"  ></div>

  </div>


  <div className='font-extrabold text-4xl text-center mt-[3rem]'>
<h1>NEW ARRIVALS</h1>
    </div>

    <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex space-x-4 p-4 justify-center items-center">
                            {/* Card 1 */}
                            <div className="flex-shrink-0 w-[260px]  rounded-lg p-4 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer">
                                <div className="relative">
                                    <img src="Frame 32 (1).png" alt="Product 1" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">VERTICAL STRIPED SHIRT</h3>
                                <img src="Frame 35.png" alt="" />
                              <div className="mt-2 flex gap-2 text-black font-semibold">$212 <span className="line-through text-gray-500">$232</span>
                                <div className='bg-red-400 w-[58px] h-[28] rounded-[25px] text-center'
                                >-30%</div>
                            </div> </div>
                            {/* Card 2 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg p-4 transition-transform duration-500 ease-in-out cursor-pointer hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 33 (1).png" alt="Product 2" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">COURAGE GRAPHIC T-SHIRT</h3>
                                <img src="Frame 35.png" alt="" />
                               
                                <div className="mt-2 text-black font-semibold">$145 </div>
                              
                             
  
                               
                                {/**  <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button> */}
                            </div>

                            {/* Card 3 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg p-4 transition-transform duration-500 ease-in-out cursor-pointer hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 34.png" alt="Product 3" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">LOOSE FIT BERMUDA SHORTS</h3>
                                <img src="Frame 39 (1).png" alt="" />
                                <div className="mt-2 text-black font-semibold">$80 </div>
                              
                            </div>

                            {/* Card 4 */}
                            <div className="flex-shrink-0 w-[260px] rounded-lg cursor-pointer p-4 transition-transform duration-500 ease-in-out hover:scale-110">
                                <div className="relative">
                                    <img src="Frame 38 (1).png" alt="Product 4" className="w-full h-auto rounded-md" />

                                </div>
                                <h3 className="mt-4 font-bold text-gray-800">FADED SKINNY JEANS</h3>
                                <img src="Frame 41.png" alt="" />
                        
                                <div className="mt-2 text-black font-semibold">$210 </div>
                              
                            
  
                          </div>
                          </div>
                          <div className="flex justify-center items-center">
  <button className="mt-4  w-[270px] h-[52px] bg-white text-black py-3 border border-gray-500 rounded-[100px] transition-transform duration-500 ease-in-out hover:scale-110 ">
    view all
  </button></div>
  <div className="flex justify-center items-center">
  <div className="h-[1px] w-[80%] bg-gray-300 mb-4 mt-7 justify-center items-center"  ></div>

  </div>
  </div>

 














<div>
<div className='flex justify-center items-center h-screen mt-[11rem] mb-10'>
  <div className='bg-[#f0f0f0] w-[90%] border rounded-lg'>
    <div className='font-extrabold text-4xl text-center mt-[3rem]'>
      <h1>BROWSE BY DRESS STYLE</h1>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='flex flex-wrap gap-7 mt-9'>
          <Link href="/new-page" passHref>
            <Image
              src="/Frame 61.png"
              alt="Frame 61"
              width={407}
              height={289}
              className="object-contain"
            />
          </Link>
          <Link href="/new-page" passHref>
            <Image
              src="/Frame 62.png"
              alt="Frame 62"
              width={684}
              height={289}
              className="object-contain"
            />
          </Link>
        </div>
        <div className='flex flex-wrap gap-7 mt-4 mb-[4rem]'>
          <Link href="/new-page" passHref>
            <Image
              src="/Frame 64.png"
              alt="Frame 64"
              width={684}
              height={289}
              className="object-contain"
            />
          </Link>
          <Link href="/new-page" passHref>
            <Image
              src="/Frame 63.png"
              alt="Frame 63"
              width={407}
              height={289}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>


</>)}
  export default Newarrival;