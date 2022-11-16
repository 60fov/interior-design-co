import { useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
            {/* TODO: slider + dots */}
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
                        <motion.p
                            className="relative font-header w-11/12 mx-auto tracking-tighter z-20 text-7xl"
                        >
                            {slide.text}
                        </motion.p>

                        <div className="relative w-full z-10 h-[420px] -mt-6">
                            {/* TODO: use context to provide image data */}
                            <motion.div
                                className="absolute w-7/12"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ amount: 'some', once: true }}
                                transition={{ duration: 0.5, ease: 'circOut'}}
                            >
                                <Image
                                    className="h-full"
                                    src={images[slide.imageIndices[0]]}
                                    alt="showcase of interior design" />
                            </motion.div>
                            <motion.div
                                className="absolute w-1/2 top-[10%] right-0"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ amount: 'all', once: true }}
                                transition={{ duration: 0.5, ease: 'circOut'}}
                            >
                                <Image
                                    className="w-full h-auto"
                                    src={images[slide.imageIndices[1]]}
                                    alt="showcase of interior design" />
                            </motion.div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}