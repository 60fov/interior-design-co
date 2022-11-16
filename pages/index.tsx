import { ImageContextProvider } from '../components/ImageContext';

import Header from "../components/Header"
import Ideals from "../components/Ideals"

/* 
TODO: 
  display loading animation while loading images
  scroll indicator
*/

export default function Home() {
  return (
    <ImageContextProvider>
      <Header />
      <Ideals />
    </ImageContextProvider>
  )
}