import Image from 'next/image'

export default function Ideals({ }) {

    const sliderData = [
        { text: "Our goal is to provide a truly beautiful living experience.", imageIndices: [5, 6] },
        { text: "We believe our environment greatly infulences our mind.", imageIndices: [6, 7] },
        { text: "So we design living spaces for the eye of the beholder.", imageIndices: [8, 9] },
    ]


    return (
        <div className="w-full bg-white">
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
    return (
        <>
            {
                slides.map(slide => (
                    <div key={slide.text} className="w-2/3 mx-auto py-20">
                        <p className="font-serif w-full text-7xl">{slide.text}</p>
                        <div>
                            {/* TODO: use context to provide image data */}
                            <Image src={""} alt="showcase of interior design" />
                            <Image src={""} alt="showcase of interior design" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}