import "/src/App.css";
import ScrollToTop from "../scrolltotop";

export default function Crea() {
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen bg-[url(/assets/BG2.svg)] bg-cover flex flex-col pt-20 md:pt-25 p-5 md:p-15">
                <div className="relative bg-[url(/proker/crea.jpg)] bg-fixed bg-cover bg-bottom rounded-[8px] md:rounded-[15px] shadow-xl/30">
                    <div className='w-full h-full flex flex-col items-center py-30'>
                        <p className='poppins font-bold text-5xl md:text-9xl text-white text-shadow-lg/30 text-shadow-orange-400'>CREANOMIC</p>
                        <p className='poppins text-xs md:text-3xl text-orange-500 text-shadow-lg/30'>"CREATIVE ECONOMY INNOVATION CENTRE"</p>
                    </div>
                </div>
                <div className='relative flex gap-5 mt-7 md:mt-10 h-fit w-full'>
                    <div className='h-fit w-full bg-white/10 backdrop-blur-xs rounded-[8px] md:rounded-[15px] p-8 md:p-15 border-2 border-white'>
                        <div className='flex flex-col justify-center items-center w-full mb-10'>
                            <p className='poppins font-bold text-3xl md:text-6xl text-white'>CREANOMIC</p>
                            <p className='poppins text-[10px] md:text-2xl text-white'>"CREATIVE ECONOMY INNOVATION CENTRE"</p>
                        </div>
                        <p className='poppins text-justify text-sm md:text-xl text-white'>Progam kerja besar dari Kementerian Dalam Negeri yang berfokus pada kreatifitas dan keterampilan mahasiswa fakultas Vokasi. Creanomic akan menyelenggarakan lomba kewirausahaan dan keterampilan mahasiswa pada beberapa progam studi yang ada pada fakultas Vokasi, tidak hanya perlombaan saja, Creanomic juga akan ada pameran dan kreatifitas karya dari Mahasiswa-mahasiswa fakultas Vokasi. Creanomic juga akan mengundang industri terkait kejuaraan atau yang lagi hangat, dan tak lupa akan mengundang kalangan umum.</p>
                        <div className='snap-x scroll-pl-2 md:scroll-pl-6 overflow-x-auto flex -space-x-12 md:space-x-4 scroll-smooth hide-scrollbar h-fit w-full md:mt-10 p-10'>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/crea.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/crea.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/crea.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/crea.jpg" alt="" />
                            </div>
                            <div className='snap-start shrink-0 min-w-[250px]'>
                                <img className='h-35 md:h-80 rounded-[8px] md:rounded-[15px] shadow-xl/20 hover:-translate-y-2 duration-300' src="/proker/crea.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}