import React from 'react';
export default function Name() {
    return (
        <div id='name'>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'></div>
                <div className='col-span-8 h-[500px]'>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-2 lg:pl-10 xl:pl-20'>
                            <img
                                style={{ borderRadius: '50%',border:'2px solid black' }}
                                className='col-span-2 rounded-full shadow-2xl sm:w-[100px] sm:h-[100px] sm:mt-12 lg:w-[150px] lg:h-[150px]'
                                src="https://dailychevrolet.vn/wp-content/uploads/2022/11/HC3ACnh-siC3AAu-xe-Lamborghini-cE1BBB1c-C491E1BAB9p-scaled.jpg" alt="" />

                        </div>
                        <div className='col-span-4 '>
                            <h1
                                className='col-span-2 font-bold sm:text-xl sm:mt-16 lg:text-2xl'
                            >Nhật Phi</h1>
                            <hr className='mt-2' style={{border:'1px solid'}} />  
                            <h2 className='mt-2 font-bold sm:text-lg lg:text-xl'>Lập trình viên PHP </h2>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'></div>
            </div>
        </div>
    )
}