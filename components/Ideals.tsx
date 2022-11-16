import { useContext } from 'react'
import Image from 'next/image'

import ImageContext from './ImageContext'

export default function Ideals({ }) {

    const sliderData = [
        { text: "Our goal is to provide a truly beautiful living experience.", imageIndices: [5, 12] },
        { text: "We believe our environment greatly infulences our mind.", imageIndices: [14, 7] },
        { text: "So we design living spaces for the eye of the beholder.", imageIndices: [15, 16] },
    ]


    return (
        <div className="w-full bg-white py-12">
            <Slider slides={sliderData} />
            {/* TODO: slider dots */}
        </div>
    )
}


// QUESTION: how to specify array size
type SliderProps = {
    slides: { text: string, imageIndices: number[] }[]
}

const Slider = ({ slides }: SliderProps) => {
    const images = useContext(ImageContext);

    return (
        <>
            {
                slides.map(slide => (
                    <div key={slide.text} className="w-3/5 mx-auto py-20">
                        <p className="relative font-header w-11/12 mx-auto tracking-tighter z-20 text-7xl">{slide.text}</p>
                        <div className="relative w-full z-10 h-96 -mt-6">
                            {/* TODO: use context to provide image data */}
                            <Image
                                className="absolute w-7/12 h-auto max-h-full"
                                src={images[slide.imageIndices[0]]}
                                alt="showcase of interior design" />
                            <Image
                                className="absolute top-[10%] right-0 w-1/2 h-auto"
                                src={images[slide.imageIndices[1]]}
                                alt="showcase of interior design" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}