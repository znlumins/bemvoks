import Boxlogo from "../../../componens/boxlogo";
import HeaderMenko from "../../../componens/headerMenko";
import Cardkementerian from "../../../componens/cardkementrian";

export default function Pergerakan() {

    const data = [
        {
            Kemenkoan: "PERGERAKAN",
            deskripsi: "Kemenkoan Penggerakan adalah bagian integral dari BEM Fakultas Vokasi Universitas Brawijaya yang memiliki peran strategis dalam memobilisasi dan menggerakkan seluruh potensi mahasiswa. Kemenkoan ini menjadi wadah untuk memperkuat rasa solidaritas, kepemimpinan, dan aksi nyata melalui berbagai kegiatan yang mendorong partisipasi aktif mahasiswa dalam perubahan positif di kampus dan masyarakat. Dengan semangat kolaborasi dan inovasi, Kemenkoan Penggerakan berkomitmen untuk menciptakan dinamika yang menginspirasi mahasiswa dalam memberikan kontribusi terbaiknya",
            nama: "Muhammad Alif Aris/ TI ‘23",
            jabatan: "Menko Pergerakan",
            foto: "/assets/pergerakan.webp",
        }
    ];

    const Kementrian = [
        {
            logowarna: "/logokementrian/warna/KASTRAT.svg",
            logononwarna: "/logokementrian/nonWarna/KASTRAT.svg",
            p1: "KEMENTERIAN",
            p2: "KASTRAT",
            judul1: "KEMENTERIAN",
            judul2: "KASTRAT",
            warna: "via-[#8E8E8E]",
            bwarna: "text-[#8E8E8E]",
            hover: "hover:text-gray-400",
            back: "KASTRAT",
            Fbph: "/fotobph/kastrat.webp",
            deskripsi: "Kementerian Kajian, Isu, dan Aksi Strategis (Kastrat) adalah motor penggerak dalam menganalisis isu-isu strategis, mengadvokasi kebijakan, dan mengawal perubahan di tingkat kampus maupun nasional.",
            proker: ["The think tank", "Lensa kastrat", "Vokasihtau", "Kawal Vokasi", "Diskusi Publik", "Desak Vokasi"],
            staf: ["Eka Alfreda Saputra", "Ambimanyu Restu Ragnala", "Agus Julianto", "Annasywa Shaqiena Al Khair", "Arthur Ardiansyah", "Nurrasya Wahidiyati Saidi", "Rabbanin Salman Islami", "Tubagus Fadly Ramadhan Kusumo", "Yusril Irvan Zidni"],
        },
        {
            logowarna: "/logokementrian/warna/advo.svg",
            logononwarna: "/logokementrian/nonWarna/advo.svg",
            p1: "KEMENTERIAN",
            p2: "ADVOKESMA",
            judul1: "KEMENTERIAN",
            judul2: "ADVOKESMA",
            warna: "via-[#9BD9DD]",
            bwarna: "text-[#9BD9DD]",
            hover: "hover:text-[#9BD9DD]",
            back: "ADVO",
            Fbph: "/fotobph/advo.webp",
            deskripsi: "Kementrian Advokesma adalah kementrian yang bergerak di bidang advokasi, membantu mahasiswa dalam menginformasi dan memberikan segala dukungan untuk mahasiswa vokasi. Kesejahteraan Mahasiswa, bergerak memberikan suatu kebermantfaatan dan keberhasilan untuk mahasiswa vokasi baik dalam akademik maupun non akademiknya, dan juga membantu dalam mewadahi setiap aspirasi maupun kebutuhan terkai aspirasi maupun kebutuhan terkait informasi kuliah dari setiap mahasiswa. ",
            proker: ["VOKASI NEWS", "ADVO CORNER", "FOR VOKASI", "CRISIS CENTER", "BKV (Bantuan Keuangan Vokasi)", "ASVOKA (Aspirasi Mahasiswa Vokasi)", "SPARKSPRINT", "Prodi Bersuara", "MWF (Mental Wellness Forum)"],
            staf: ["Rayhan Ramadhan", "Ratih Diah Irdiyanti", "Alisya Aprilia Aura Fanani", "Nur Fadhilah", "Yayang Ade Prihantoro", "Anthoinette Eunike Ayudya Sekar Kinanthi", "Fira Putri Gundarita"],
        },
        {
            logowarna: "/logokementrian/warna/P3.svg",
            logononwarna: "/logokementrian/nonWarna/P3.svg",
            p1: "KEMENTERIAN",
            p2: "P3",
            judul1: "KEMENTERIAN",
            judul2: "P3",
            warna: "via-[#FFC0CB]",
            bwarna: "text-[#FFC0CB]",
            hover: "hover:text-rose-200",
            back: "P3",
            Fbph: "/fotobph/p3.webp",
            deskripsi: "Kementerian yang memiliki fokus isu terhadap keperempunaan dan kesetaraan gender di Fakultas Vokasi Universitas Brawijaya. Selain itu, memiliki peran penting dalam menangani kasus pelecehan/kekerasan seksual dan perundungan serta dapat menjadi teman cerita bagi mahasiswa/i Fakultas Vokasi.",
            proker: ["HEAR AND HEAL", "WOMEN ARTIVITIES", "PODCAST", "MWF (Mental Wellness Forum)", "FYP (For You, A Pad)", "UPLIFT YOUR MOOD"],
            staf: ["Kharinna Berlian", "Nabila Mutiara Alviro", "Melani Putri Jonita", "Fiona Regita Putri Felisha", "Fauzan Indriyana Putra", "R. Rafi Putra Wardhanu", "Khasanah Dwi Wulandari"],
        },
    ]

    return (
        <>
            {data.map(({ Kemenkoan, deskripsi, nama, jabatan, foto }) => (
                <HeaderMenko
                    Kemenkoan={Kemenkoan}
                    deskripsi={deskripsi}
                    nama={nama}
                    jabatan={jabatan}
                    foto={foto}
                />
            ))}
            <div className="relative flex justify-center items-center h-fit w-full mt-1 md:mt-50 gap-10">
                <div className="z-10 absolute left-0 md:left-100 bottom-2 md:bottom-7 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#8E8E8E] blur-3xl"></div>
                <div className="z-10 absolute left-50% bottom-10 md:bottom-20 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#9BD9DD] blur-3xl"></div>
                <div className="z-10 absolute right-0 md:right-100 bottom-0 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#D366F8] blur-3xl"></div>
                {Kementrian.map(({ logowarna, back, p1, p2 }, index) => (
                    <div key={index} className="cursor-pointer hover:scale-105 transition-all duration-300 z-20" onClick={() => {
                        const section = document.getElementById(back);
                        section?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        <Boxlogo
                            img={logowarna}
                            alt={back}
                            p1={p1}
                            p2={p2}
                        />
                    </div>
                ))}
            </div>
            <section>
                {Kementrian.map(({ logononwarna, judul1, judul2, bnama, warna, bwarna, hover, back, Fbph, deskripsi, proker, staf }, index) => (
                    <div key={index} id={back} className="scroll-mt-21">
                        <Cardkementerian
                            logokementrian={logononwarna}
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
    )
}