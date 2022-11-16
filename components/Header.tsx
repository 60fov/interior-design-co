import HeaderCarousel from "./HeaderCarousel";

export default function Header({ }) {
    return (
        <>
            <div className="my-20 flex items-center justify-center uppercase">
                <h1 className="text-6xl font-serif">interior design co.</h1>
            </div>
            <HeaderCarousel />
        </>
    )
}