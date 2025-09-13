import Kabinet from "../../../componens/kabinet";
import Boxlogo from "../../../componens/boxlogo";
import Cardkementerian from "../../../componens/cardkementrian";
import "/src/App.css"
import { motion } from "framer-motion";


export default function Spi() {

    const Kementrian = [
        {
            logononwarna: "/logokementrian/warna/BJMO.svg",
            logowarna: "/logokementrian/nonWarna/BJMO.svg",
            p1: "BADAN JAMINAN",
            p2: "MUTU ORGANISASI",
            judul1: "BADAN JAMINAN",
            judul2: "MUTU ORGANISASI",
            warna: "via-[#FFFF00]",
            bwarna: "text-yellow-300",
            hover: "hover:text-yellow-300",
            back: "BJMO",
            Fbph: "/fotobph/bjmoo.webp",
            deskripsi: "BJMO adalah Badan Jaminan Mutu Organisasi yang berperan sebagai penjamin mutu suatu keharmonisan internal dalam Bem FV UB dengan melakukan upaya pengevaluasian & penilaian terhadap tiap kinerja yang dilakukan oleh fungsionaris Bem FV UB secara terstruktur & terintegrasi.",
            proker: ["OPEN RECRUITMENT STAFF AHLI & MAGANG", "FIRST GATHERING STAFF AHLI & MAGANG", "TRAINING ORGANIZATION", "HERE’S YOUR SUMMARY (HORAS)", "LAPORAN 100 HARI KERJA (LASTURI)", "SENANDHIKA BERCERITA", "LAPORAN PERTANGGUNGJAWABAN AKHIR TAHUN", "FAREWELL PARTY"],
            staf: ["Lewi Narwastu Gabriella Keisha", "SimatupangHana", "Melati Portman Tobing", "Melati Portman Tobing", "Aleena Mahdiya Syarif", "Adelia Adinda Putri", "Putri Cahyarani Aurelia Salam", "Amanda Cristian Wijaya", "Brilian Pratama Putra C", "Muhammad Zacky Musyaffa", "Dewi Rahmawati", "Faza Maulidia M", "Ghatan Naufal Daniyal Ariefin", "Raja Shaka Quranique", "Rio Pratama Putra", "Aisda Gita Sari"],
        },
        {
            logononwarna: "/logokementrian/warna/kesektariatan.svg",
            logowarna: "/logokementrian/nonWarna/kesektariatan.svg",
            p1: "BIRO",
            p2: "KESEKRETARIATAN",
            judul1: "BIRO",
            judul2: "KESEKREATRIATAN",
            warna: "via-[#7AE7AB]",
            bwarna: "text-[#7AE7AB]",
            hover: "hover:text-emerald-300",
            back: "KESTARI",
            Fbph: "/fotobph/kestari.webp",
            deskripsi: "Biro Kesekretariatan merupakan salah satu supporting sistem Badan Eksekutif Mahasiswa, yang bertanggung jawab terhadap administrasi kesekretariatan internal BEM Vokasi. Biro Kesekretariatan bertugas mengelola administrasi seperti pembuatan proposal, surat - menyurat, pengarsipan, notulensi, dan pengelolaan inventaris Badan Eksekutif Mahasiswa Fakultas Vokasi.",
            proker: ["BIRO CLASS", "LINGKAR SEKBEN", "SEKRE CLASS"],
            staf: ["Almira Callista Trixie Amadea", "Sahda Qonita", "Tiara Kusuma Hapsari Baroro", "Lina Alfiyah", "Risa Rahma Rifada", "Muhammad Dika Saputra", "Irma Putriani Hariyanti Pratiwi",
            ],
        },
        {
            logononwarna: "/logokementrian/warna/keu.svg",
            logowarna: "/logokementrian/nonWarna/KEUANGAN.svg",
            p1: "BIRO",
            p2: "KEUANGAN",
            judul1: "BIRO",
            judul2: "KEUANGAN",
            warna: "via-[#D366F8]",
            bwarna: "text-[#D366F8]",
            hover: "hover:text-fuchsia-300",
            back: "KEU",
            Fbph: "/fotobph/keu.webp",
            deskripsi: "Biro Keuangan adalah unit kerja yang bertugas dan bertanggung jawab dalam mengelola, mengatur, dan memantau administrasi keuangan. Biro Keuangan biasanya terdapat di sebuah instansi lembaga atau organisasi yang ada di Universitas maupun Fakultas.",
            proker: ["BIRO CLASS", "FINANCIAL CREATIVE TIME (FCT)"],
            staf: ["Haura Insia Andini", "A’yun Farah Al Mecca", "Poetri Soraya", "Nada Naura Al-Mumtaz", "Amanda Aurelia"],
        }
    ]

    return (
        <>
            <div className="flex flex-col px-5 items-center bg-[linear-gradient(-175deg,#000,#0D2456,#5F8EC2,#8ECBFF,#5F8EC2,#0D2456,#000,#000)] min-h-screen">
                <div className="mt-20 md:mt-25 scale-75 md:scale-100">
                    <Kabinet />
                </div>

                <div className="flex flex-col md:flex-row justify-around w-full mt-10 gap-10 md:gap-0 px-4 md:px-20">
                    {/* Kiri */}
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 30, damping: 20 }}
                        className="w-full md:w-1/4 text-justify text-white space-y-2">
                        <p className="inter text-4xl md:text-8xl text-shadow-lg/30">SPI 1</p>
                        <p className="poppins text-xs md:text-base text-shadow-lg/30">
                           unit dalam BEM Fakultas Vokasi UB yang bertugas mengawasi, mengevaluasi, serta memastikan transparansi dalam program kerja, administrasi, dan keuangan organisasi. SPI berperan sebagai pengawas internal agar setiap kebijakan dan kegiatan berjalan sesuai dengan SOP, kode etik, serta visi dan misi BEM.
                        </p>
                    </motion.div>

                    {/* Tengah (Foto) */}
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 30, damping: 20 }}
                        className="flex flex-row justify-center items-end gap-4 w-full md:w-1/2"
                    >
                        {/* Foto SPI 1 */}
                        <div className="relative">
                            <img
                                className="mb-5 h-auto md:h-80 z-20"
                                src="/assets/spi1.webp"
                                alt="SPI 1"
                            />
                            <div className="absolute bottom-0 left-0 w-fit px-4 py-1 bg-blue-500 text-white text-[10px] md:text-base rounded-[20px] z-30">
                                <p className="poppins">Natasya T.A. / Adbis ‘23</p>
                                <p className="poppins">SPI 1</p>
                            </div>
                        </div>

                        {/* Foto SPI 2 */}
                        <div className="relative">
                            <img
                                className="mb-5 h-auto md:h-80 z-20"
                                src="/assets/spi2.webp"
                                alt="SPI 2"
                            />
                            <div className="absolute bottom-0 right-0 w-fit px-4 py-1 bg-blue-500 text-white text-[10px] md:text-base rounded-[20px] z-30">
                                <p className="poppins">Dwie Ayu Satika/MP ‘23</p>
                                <p className="poppins">SPI 2</p>
                            </div>
                        </div>
                    </motion.div>


                    {/* Kanan */}
                    <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 30, damping: 20 }}
                        className="w-full md:w-1/4 text-justify text-white space-y-2">
                        <p className="inter text-4xl md:text-8xl text-shadow-lg/30">SPI 2</p>
                        <p className="poppins text-xs md:text-base text-shadow-lg/30">
                            unit dalam BEM Fakultas Vokasi UB yang bertugas mengawasi, mengevaluasi, serta memastikan transparansi dalam program kerja, administrasi, dan keuangan organisasi. SPI berperan sebagai pengawas internal agar setiap kebijakan dan kegiatan berjalan sesuai dengan SOP, kode etik, serta visi dan misi BEM.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="relative flex justify-center items-center h-fit w-full mt-10 md:mt-50 gap-10">
                <div className="z-10 absolute left-0 md:left-100 bottom-2 md:bottom-7 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#FFC340] blur-3xl"></div>
                <div className="z-10 absolute left-50% bottom-10 md:bottom-20 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#18DB70] blur-3xl"></div>
                <div className="z-10 absolute right-5 md:right-100 bottom-0 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#D366F8] blur-3xl"></div>
                {Kementrian.map(({ logononwarna, back, p1, p2 }, index) => (
                    <div key={index} className="cursor-pointer hover:scale-105 transition-all duration-300 z-20" onClick={() => {
                        const section = document.getElementById(back);
                        section?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        <Boxlogo
                            img={logononwarna}
                            alt={back}
                            p1={p1}
                            p2={p2}
                        />
                    </div>
                ))}
            </div>
            <section>
                {Kementrian.map(({ logowarna, judul1, judul2, bnama, warna, bwarna, hover, back, Fbph, deskripsi, proker, staf }, index) => (
                    <div key={index} id={back} className="md:scroll-mt-21">
                        <Cardkementerian
                            logokementrian={logowarna}
                            judul1={judul1}
                            judul2={judul2}
                            warna={warna}
                            bwarna={bwarna}
                            hover={hover}
                            back={back}
                            bnama={bnama}
                            Fbph={Fbph}
                            deskripsi={deskripsi}
                            proker={proker}
                            staf={staf}
                        />
                    </div>
                ))}
            </section>
        </>
    );
}