import { createContext, ReactNode } from 'react'


/* 
QUESTION: is there a better way?
    - don't know performance implications of static imports "everywhere"
    - cant use dynamic imports for next image CLS or whatever (?)
    - js macros where? (s/o Nim, macros op)
    - tbh I don't feel like this is terrible 🤷
    - is getStaticProps meaningfully different? (performance / ergonomics)
*/
import space_joy_01 from "../public/images/space_joy_01.jpg"
import space_joy_02 from "../public/images/space_joy_02.jpg"
import space_joy_03 from "../public/images/space_joy_03.jpg"
import space_joy_04 from "../public/images/space_joy_04.jpg"
import space_joy_05 from "../public/images/space_joy_05.jpg"
import space_joy_06 from "../public/images/space_joy_06.jpg"
import space_joy_07 from "../public/images/space_joy_07.jpg"
import space_joy_08 from "../public/images/space_joy_08.jpg"
import space_joy_09 from "../public/images/space_joy_09.jpg"
import space_joy_10 from "../public/images/space_joy_10.jpg"
import space_joy_11 from "../public/images/space_joy_11.jpg"
import space_joy_12 from "../public/images/space_joy_12.jpg"
import space_joy_13 from "../public/images/space_joy_13.jpg"
import space_joy_14 from "../public/images/space_joy_14.jpg"
import space_joy_15 from "../public/images/space_joy_15.jpg"
import space_joy_16 from "../public/images/space_joy_16.jpg"
import space_joy_17 from "../public/images/space_joy_17.jpg"
import space_joy_18 from "../public/images/space_joy_18.jpg"
import space_joy_19 from "../public/images/space_joy_19.jpg"
import space_joy_20 from "../public/images/space_joy_20.jpg"
import space_joy_21 from "../public/images/space_joy_21.jpg"
import space_joy_22 from "../public/images/space_joy_22.jpg"
import space_joy_23 from "../public/images/space_joy_23.jpg"
import space_joy_24 from "../public/images/space_joy_24.jpg"
import space_joy_25 from "../public/images/space_joy_25.jpg"
import space_joy_26 from "../public/images/space_joy_26.jpg"

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
    space_joy_10,
    space_joy_11,
    space_joy_12,
    space_joy_13,
    space_joy_14,
    space_joy_15,
    space_joy_16,
    space_joy_17,
    space_joy_18,
    space_joy_19,
    space_joy_20,
    space_joy_21,
    space_joy_22,
    space_joy_23,
    space_joy_24,
    space_joy_25,
    space_joy_26,
]

export const ImageContext = createContext(images);

export const ImageContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ImageContext.Provider value={images}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;