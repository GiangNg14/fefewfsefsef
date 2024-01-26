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
                                src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/342219769_5866793426776449_3457779003855535600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeELYbRRv0o7q_yq5xu4c-KPc-RMzyy6Aftz5EzPLLoB-6Ul_yfv2ssuhXH1ah66Iqzs4bSrkEmX6J4hT1VPKfM6&_nc_ohc=AO_nBU1p7lcAX_AY84I&_nc_oc=AQnYGk-hKW5LruZOlZnMAA3py4WN4cLV41yl642kX0rYiUgHi3E7ZB_PDWuahoR8k04&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDcSyUuCe4aNzHPt1rxD32znBNGpLqJXCRC8POtbWFMZA&oe=65B3CA92" alt="" />

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