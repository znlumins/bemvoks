import HeaderMenko from "../../../componens/headerMenko";
import Boxlogo from "../../../componens/boxlogo";
import Cardkementerian from "../../../componens/cardkementrian";

export default function Pengembangan() {

    const data = [
        {
            Kemenkoan: "Pengembangan",
            deskripsi: "Kemenkoan Pengembangan adalah bagian dari BEM FV UB yang berperan dalam meningkatkan kapasitas, potensi, dan daya saing mahasiswa Fakultas Vokasi Universitas Brawijaya. Kemenkoan ini menjadi ruang eksplorasi, inovasi, dan pengembangan diri bagi mahasiswa dalam berbagai bidang, baik akademik maupun non-akademik.",
            nama: "Assyifa Zahra / Adbis ‘23",
            jabatan: "Menko Pengembangan",
            foto: "/assets/menkopengembangan.webp",
        }
    ];

    const Kementrian = [
        {
            logowarna: "/logokementrian/warna/SORA.svg",
            logononwarna: "/logokementrian/nonWarna/SORA.svg",
            p1: "KEMENTERIAN",
            p2: "SENI & OLAHRAGA",
            judul1: "KEMENTERIAN",
            judul2: "SENI & OLAHRAGA",
            warna: "via-[#F4F457]",
            bwarna: "text-[#F4F457]",
            hover: "hover:text-yellow-300",
            back: "SORA",
            Fbph: "/fotobph/SORA.webp",
            deskripsi: "Kementrian Seni dan Olahraga merupakan Kementrian yang memnjembatani mahasiswa/i Universitas Brawijaya khususnya Fakultas Vokasi dalam bidan seni dan olahraga. Kementrian ini juga mengayomi / membawahi departemen Minat dan Bakar dari setiap himpunan dan Komunitas yang ada di Fakultas Vokasi.",
            proker: ["SELOW (SEPUTAR LOMBA)", "VOKSPRES (VOKASI BERRESTASI)", "VOKSGAR (VOKASI SEHAT & BUGAR)", "LINGKAR MINAT BAKAT DAN KOMUNITAS", "VINTAGE (VOKASI INTERNAL STAGE)", "PESONA (PEKAN SENI OLAHRAGA NASIONAL)"],
            staf: ["Greity Jessica Mokodompit Laluraa", "Alzena Eka Fitri Dzuth Thauli", "Deswita Dinda Andraeni", "Devandra Dygtha Aqvarsha", "Elfi es Azi Charnebi", "Fidya Dwi Puspita Sari", "Jiddan Fillah Wibowo", "Melva Rahmanida", "Muhammad Rafi", "Muhammad Abdillah Hijjaz Alfiqrie", "Novia Nahdiy Salsabila", "Pingkan Crisanti", "Raphaela Vito", "Salsabila", "Sasikirana Naifah Ghaniyya", "Syafira Handayani", "Yusuf Haidar"],
        },
        {
            logowarna: "/logokementrian/warna/EKRAF.svg",
            logononwarna: "/logokementrian/nonWarna/EKRAF.svg",
            p1: "KEMENTERIAN",
            p2: "EKONOMI KREATIF",
            judul1: "KEMENTERIAN",
            judul2: "EKONOMI KREATIF",
            warna: "via-[#B3F06A]",
            bwarna: "text-[#B3F06A]",
            hover: "hover:text-lime-300",
            back: "EKRAF",
            Fbph: "/fotobph/ekraf.webp",
            deskripsi: "Kementrian Ekonomi Kreatif merupakah Kementerian yang berfokus pada riset dan strategi wirausaha kepada BEM Fakultas Vokasi Universitas Brawijaya. Menjadi tempat mahasiswa yang memiliki minat tinggi dalam berwirausaha, sekaligus mendorong terciptanya inovasi untuk meningkatkan kualitas dan daya saing BEM Fakultas Vokasi.",
            proker: ["VoksB(i)yte","BAZAR RAMADHAN"],
            staf: ["Alicia Bianca Perlita", "Intan Permadhani Putri", "Intan Nabila Bari", "Sekar Arum Kinanti", "Rania Hanin Fairuzsya", "Nanda Zaskia Widuri", "Zisdane Rachmatullah", "Shamad Saqiya", "Ema Nurfajriah", "Muhammad Faiz Hisyam", "Nia Angelina", "Muhammad Khatami", "Lifi Rozanah"],
        },
        {
            logowarna: "/logokementrian/warna/PSDM.svg",
            logononwarna: "/logokementrian/nonWarna/psdm.svg",
            p1: "KEMENTERIAN",
            p2: "PSDM",
            judul1: "KEMENTERIAN",
            judul2: "PSDM",
            warna: "via-[#ED7ABB]",
            bwarna: "text-[#ED7ABB]",
            hover: "hover:text-pink-400",
            back: "PSDM",
            Fbph: "/fotobph/psdm.webp",
            deskripsi: "Kementerian PSDM (Pengembangan Sumber Daya Mahasiswa) adalah kementerian yang berfokus pada upaya memfasilitasi mahasiswa Fakultas Vokasi untuk mengembangkan potensi dan kemampuan dirinya baik di bidang softskill maupun hardskill. Melalui Kementerian ini, Badan Eksekutif Mahasiswa Fakuktas Vokasi Universitas Brawijaya dan pihak Fakultas Vokasi bekerja seirama untuk menciptakan sumber daya mahasiswa yang berdaya saing tinggi, berjiwa wirausaha, dan siap menghadapi kehidupan pasca kampus.",
            proker: ["FORUM SOBAT PSDM", "FAST CLASS UPGRADING", "PKKMB YUWARAJA", "LKMM-TM"],
            staf: ["Aisyah Nur Amanah", "Amirah Nurul Fadhilah", "Anandita Tri Agustya", "Arfan Romadhani", "Arnanda Bangkit Saputra", "Assyifa Zahra", "Camellia Iswatun", "Daniel T.S", "Feni Kusuma Dewi", "Fleaphrodyte", "Intan Nur Aulya Novianti", "M. Wahyu Ramadhani", "Moch. Anggling Saka Putra", "Moetia Safitri Agustina", "Muhammad Daffa Mahaputra", "Muhammad Syauqi Ibrahim", "Nabilah Saffanah Azhar", "Nana Ervina", "Saadiah Salsa Sabillah"],
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
                <div className="z-10 absolute left-0 md:left-100 bottom-2 md:bottom-7 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#F4F457] blur-3xl"></div>
                <div className="z-10 absolute left-50% bottom-10 md:bottom-20 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#B3F06A] blur-3xl"></div>
                <div className="z-10 absolute right-0 md:right-100 bottom-0 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#ED7ABB] blur-3xl"></div>
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