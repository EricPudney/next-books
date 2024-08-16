'use client'

import Summary from './Summary';
import React, { useState } from 'react'

export default function Carousel ({ data }: {
    data: {
        text: string, value: number;
    }[]
}) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const containerStyle = {
        transform: `translateX(-${currentSlide * 100}%)`
    }

    return (
        <div>
            <div className='w-full h-60 rounded-md overflow-hidden relative'>
                <div
                    style={containerStyle}
                    className='w-96 h-full flex transition-all duration-300'>
                    {data.map((item, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Summary
                                text={item.text}
                                value={item.value}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center mt-3'>
                <button
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentSlide === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentSlide === data.length - 1}
                    onClick={() => setCurrentSlide(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${currentSlide === data.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}

