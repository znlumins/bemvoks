import "/src/App.css";
import ScrollToTop from "../scrolltotop";

export default function Stifo() {
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen bg-[url(/assets/BG2.svg)] bg-cover flex flex-col pt-20 md:pt-25 p-5 md:p-15">
                <div className="relative bg-[url(/proker/pesona.jpg)] bg-fixed bg-cover bg-bottom rounded-[8px] md:rounded-[15px] shadow-xl/30">
                    <div className='w-full h-full flex flex-col items-center py-30'>
                        <p className='poppins font-bold text-5xl md:text-9xl text-white text-shadow-lg/30 text-shadow-yellow-400'>STIFOFEST</p>
                        <p className='poppins text-xs md:text-3xl text-yellow-300 text-shadow-lg/30'>"SPORT AND CREATIVITY VOKASI COMPETITION"</p>
                    </div>
                </div>
                <div className='relative flex gap-5 mt-7 md:mt-10 h-fit w-full'>
                    <div className='h-fit w-full bg-white/10 backdrop-blur-xs rounded-[8px] md:rounded-[15px] p-8 md:p-15 border-2 border-white'>
                        <div className='flex flex-col justify-center items-center w-full mb-10'>
                            <p className='poppins font-bold text-3xl md:text-6xl text-white'>STIFOFEST</p>
                            <p className='poppins text-[10px] md:text-2xl text-white'>"SPORT AND CREATIVITY VOKASI COMPETITION"</p>
                        </div>
                        <p className='poppins text-justify text-sm md:text-xl text-white'>Program kerja ini bertujuan untuk memotivasi serta memberikan wadah bagi mahasiswa Fakultas Vokasi dan siswa SMA/SMK di Kota Malang dalam mengembangkan minat dan bakat mereka. Melalui kompetisi ini, peserta dapat mengasah dan mengukur kemampuan dalam bidang seni dan olahraga.</p>
                        <div className='snap-x scroll-pl-2 md:scroll-pl-6 overflow-x-auto flex -space-x-7 md:space-x-4 scroll-smooth hide-scrollbar h-fit w-full md:mt-10 p-10'>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/stifo1.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/stifo2.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/pesona.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/stifo3.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/pesona.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}