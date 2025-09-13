import "../App.css";

export default function Boxlogo({ img, alt, p1, p2 }) {
    return (
        <>
            <div className="z-20 h-35 md:h-60 w-25 md:w-45 -mx-3 md:mx-0 p-5 flex flex-col items-center justify-center text-wrap bg-white/30 backdrop-blur-sm rounded-[20px] border-2 border-white">
                <img className="h-10 md:h-20" loading="lazy" src={img} alt={alt} />
                <p className="poppins text-white text-center mt-5 md:mt-10 text-[7px] md:text-sm">{p1}</p>
                <p className="poppins text-white text-center text-[7px] md:text-sm">{p2}</p>
            </div>
        </>
    )
}