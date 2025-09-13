import { div } from "framer-motion/client";
import "/src/App.css";
import { motion } from "framer-motion";

export default function Cardkementerian({ logokementrian, judul1, judul2, warna, bwarna, hover, back, Fbph, deskripsi, proker, staf }) {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-30 md:mt-50">
            <div
                className="flex">
                <img className="h-15 md:h-30" loading="lazy" src={logokementrian} alt="" />
                <div className="text-white text-2xl md:text-6xl">
                    <p className="inter">{judul1}</p>
                    <p className="inter">{judul2}</p>
                </div>
            </div>
            <div className="w-full md:px-40">
                <div className={`relative w-full h-60 md:h-120 p-10 bg-gradient-to-t from-black ${warna} to-white rounded-t-[70px] md:rounded-t-[100px] mt-10`}>
                    <div className="flex justify-center text-wrap">
                        <p className="absolute bottom-20 md:bottom-30 z-10 inter text-white text-[80px] md:text-[240px] text-shadow-lg/30">{back}</p>
                    </div>
                    <motion.div
                        initial={{ y: 150 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        className="absolute z-20 flex inset-x-0 bottom-5">
                        <div className="relative flex justify-center items-center w-full md:h-100">
                            <img className="h-50 md:h-120" src={Fbph} loading="lazy" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-10 md:mt-30 justify-around items-start w-full gap-10 px-5 md:px-20 bg-black">
                {/* Deskripsi dan Program Kerja */}
                <div className="w-full md:w-1/2">
                    {/* Deskripsi */}
                    <div className="text-justify mb-8">
                        <p className={`inter text-2xl md:text-5xl text-center ${bwarna}`}>Deskripsi</p>
                        <p className="poppins text-white text-[10px] md:text-xl">{deskripsi}</p>
                    </div>

                    {/* Program Kerja */}
                    <div className="text-justify">
                        <p className={`inter text-2xl md:text-5xl text-center ${bwarna}`}>Program Kerja</p>
                        <ul className="mt-4 space-y-2">
                            {proker.map((item, index) => (
                                <li
                                    key={index}
                                    className={`poppins text-white text-[10px] md:text-xl bg-white/30 backdrop-blur-sm border-1 p-2 md:p-4 rounded-[8px] md:rounded-[15px] hover:scale-105 ${hover} duration-300`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Staff Ahli */}
                <div className="w-full md:w-1/3 relative">
                    <p className={`inter text-2xl md:text-5xl text-center ${bwarna}`}>Staff Ahli</p>
                    <ul className="mt-4 space-y-2">
                        {staf.map((item, index) => (
                            <li
                                key={index}
                                className={`group relative poppins text-white text-[10px] md:text-xl text-center bg-white/30 backdrop-blur-sm border-1 p-2 md:p-4 rounded-[8px] md:rounded-[15px] hover:scale-105 ${hover} duration-300`}
                            >
                                {item}

                                {/* Tampilkan popup jika nama cocok */}
                                {item === "Mohammad David Nur Syahfrudin" && (
                                    <div className="absolute hidden group-hover:block -top-48 left-1/2 -translate-x-1/2 z-50">
                                        <a href="https://www.instagram.com/davv_id._?igsh=MjRmN2lsdzV3azV0&utm_source=qr">
                                        <img
                                            src="/proker/david.jpg"
                                            alt="foto david"
                                            className="w-full h-50 object-cover rounded-xl shadow-xl/30 border-2 border-white"
                                        />
                                        </a>
                                    </div>
                                )}

                                {item === "Djibril rangga deja" && (
                                    <div className="absolute hidden group-hover:block -top-48 left-1/2 -translate-x-1/2 z-50">
                                        <a href="https://www.instagram.com/broskiezx?igsh=MXB2OGJoaG80dnJkOA==">
                                        <img
                                            src="/proker/dije.jpg"
                                            alt="Foto dije"
                                            className="w-full h-50 object-cover rounded-xl shadow-xl/30 border-2 border-white"
                                        />
                                        </a>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}