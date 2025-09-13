import Kabinet from "./kabinet";
import { motion } from "framer-motion";

export default function HeaderMenko({ Kemenkoan, deskripsi, nama, jabatan, foto }) {
    return (
        <>
            <div className="flex flex-col items-center bg-[linear-gradient(-175deg,#000,#0D2456,#5F8EC2,#8ECBFF,#5F8EC2,#0D2456,#000,#000)] min-h-screen px-4 py-10 md:py-20">
                {/* Logo atau Kabinet */}
                <div className="mt-5 scale-75 md:scale-100 mb-5 md:mb-16">
                    <Kabinet />
                </div>

                {/* Konten */}
                <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-7xl gap-10">
                    {/* Deskripsi */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 30, damping: 20 }}
                        className="text-white text-justify max-w-md md:max-w-xl"
                    >
                        <p className="inter text-4xl md:text-8xl text-shadow-lg/30">{Kemenkoan}</p>
                        <p className="poppins text-xs md:text-lg text-shadow-lg/30 mt-2">{deskripsi}</p>
                    </motion.div>

                    {/* Foto + Nama */}
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 30, damping: 20 }}
                        className="relative w-60 md:w-80"
                    >
                        {/* Info */}
                        <div className="absolute bottom-0 right-0 w-full md:w-72 px-4 py-2 bg-blue-500 text-white rounded-[25px] z-30">
                            <p className="poppins text-xs md:text-lg text-shadow-lg">{nama}</p>
                            <p className="poppins text-xs md:text-lg text-shadow-lg">{jabatan}</p>
                        </div>
                        {/* Foto */}
                        <img
                            className="w-full h-auto z-20 relative rounded-xl object-cover"
                            loading="lazy"
                            src={foto}
                            alt={nama}
                        />
                    </motion.div>
                </div>
            </div>

        </>
    );
}