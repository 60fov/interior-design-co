import space_joy_01 from "../public/images/space_joy_01.jpg"
import space_joy_02 from "../public/images/space_joy_02.jpg"
import space_joy_03 from "../public/images/space_joy_03.jpg"
import space_joy_04 from "../public/images/space_joy_04.jpg"
import space_joy_05 from "../public/images/space_joy_05.jpg"
import space_joy_06 from "../public/images/space_joy_06.jpg"
import space_joy_07 from "../public/images/space_joy_07.jpg"
import space_joy_08 from "../public/images/space_joy_08.jpg"
import space_joy_09 from "../public/images/space_joy_09.jpg"

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'

/*
 TODO: 
    various mouse controls (drag, hover scroll speed, etc.)
    portait landscape (maybe)
 */

type HeaderCarouselProps = {
    speed?: number
}

export default function HeaderCarousel({ speed = 50 }: HeaderCarouselProps) {

    const images = [
        space_joy_01,
        space_joy_02,
        space_joy_03,
        space_joy_04,
        space_joy_05,
        space_joy_06,
        space_joy_07,
        space_joy_08,
        space_joy_09,
    ]

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