import { useRef, useEffect, useState, useContext } from 'react'
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'

import Image from 'next/image'

import ImageContext from '../components/ImageContext';
/*
 TODO: 
    various mouse controls (drag, hover scroll speed, etc.)
    portait landscape (maybe)
 */

type HeaderCarouselProps = {
    speed?: number
}

export default function HeaderCarousel({ speed = 50 }: HeaderCarouselProps) {
    const images = useContext(ImageContext);

    const html = images.map(imageData => (
        <Image
            key={imageData.src}
            src={imageData}
            alt="showcase of interior design"
            className="w-auto h-full inline-block" />
    ))

    const imageGroup = useRef<HTMLDivElement | null>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    useEffect(() => {
        setCarouselWidth(imageGroup?.current?.scrollWidth || 0);
    }, []);

    const x = useMotionValue(0);
    const nx = useTransform(x, v => -wrap(0, carouselWidth / 2, v));

    useAnimationFrame((time, delta) => {
        const dx = speed * delta / 1000;
        x.set(x.get() + dx);
    });


    return (
        <div className="overflow-hidden">
            <motion.div
                className=""
                style={{ x: nx }}
            >
                {/* TODO: images sizes https://nextjs.org/docs/api-reference/next/image#sizes */}
                <div ref={imageGroup} className="inline-flex w-auto gap-5 h-[200px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
                    {html}
                    {html}
                </div>
            </motion.div>
        </div>
    )
}

// yeet'd from https://github.com/motiondivision/motionone/tree/main/packages/utils
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}