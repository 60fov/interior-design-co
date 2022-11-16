import HeaderCarousel from "./HeaderCarousel";

export default function Header({ }) {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-center uppercase my-10 sm:my-16 md:my-20">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">interior design co.</h1>
            </div>
            <HeaderCarousel />
        </div>
    )
}