import { ImageContextProvider } from '../components/ImageContext';

import Header from "../components/Header"
import Ideals from "../components/Ideals"


export default function Home() {
  return (
    <ImageContextProvider>
      <Header />
      <Ideals />
    </ImageContextProvider>
  )
}