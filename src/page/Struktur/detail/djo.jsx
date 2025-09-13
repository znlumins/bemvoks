import HeaderMenko from "../../../componens/headerMenko";
import Boxlogo from "../../../componens/boxlogo";
import Cardkementerian from "../../../componens/cardkementrian";

export default function Djo() {

    const data = [
        {
            Kemenkoan: "DJO",
            deskripsi: "Kemenkoan Diplomasi Jaringan Organisasi merupakan bagian dari BEM Fakultas Vokasi Universitas Brawijaya (BEM FV UB) yang berperan sebagai penghubung strategis antara elemen internal maupun eksternal dalam lingkungan Fakultas Vokasi.",
            nama: "Agung Maulana / TI ‘23",
            jabatan: "MENKO DJO",
            foto: "/assets/menkodjo.webp",
        }
    ];

    const Kementrian = [
        {
            logowarna: "/logokementrian/warna/KOMINFO.svg",
            logononwarna: "/logokementrian/nonWarna/KOMINFO.svg",
            p1: "KEMENTERIAN",
            p2: "KOMINFO",
            judul1: "KEMENTERIAN",
            judul2: "KOMINFO",
            warna: "via-[#62A7E9]",
            bwarna: "text-[#62A7E9]",
            hover: "hover:text-blue-300",
            back: "KOMINFO",
            Fbph: "/fotobph/kominfo.webp",
            deskripsi: "Kementerian Komunikasi dan Informatika (Kominfo) BEM Vokasi UB merupakan divisi yang berperan dalam pengelolaan media komunikasi, informasi, serta branding organisasi melalui berbagai platform digital.",
            proker: ["COMPANY PROFILE", "BUKU AKHIR TAHUN (BAT)", "VOKS-NIGHT", "WORKSHOP INTERNAL", "WORKSHOP KEMENBIRO", "100 HARI KERJA & AKHIR KABINET", "GOES TO", "RECAP BEM", "WEBSITE BEM", "LINGKAR HIMPUNAN"],
            staf: ["Agistia Salsabila Putriani", "Nadine Harsha Kaharuddin", "Azhar Fadhila Rahman","Mohammad David Nur Syahfrudin","Djibril rangga deja", "Daffa Ahmad Al Attas", "Eva Latifah", "Fitria Qurrata A'yun", "Rakha Dhiyaul Haq Wansyah", "Nabil Dipta Ditya", "Azzahro Fatimah","Olivia Fauziah","Nailiyatul Makwa","Nazwa Anisah","Afra Zeylanti Zirly Azlya","Shereina Afra Maulidyah","Graciela Kate Sheena"],
        },
        {
            logowarna: "/logokementrian/warna/LUGRI.svg",
            logononwarna: "/logokementrian/nonWarna/LUGRI.svg",
            p1: "KEMENTERIAN",
            p2: "LUAR NEGERI",
            judul1: "KEMENTERIAN",
            judul2: "LUAR NEGERI",
            warna: "via-[#FF7979]",
            bwarna: "text-[#FF7979]",
            hover: "hover:text-rose-300",
            back: "LUGRI",
            Fbph: "/fotobph/LUGRI.webp",
            deskripsi: "Kementerian Luar Negeri BEM Vokasi UB  berperan sebagai representasi organisasi dalam menjalin hubungan dengan pihak eksternal. Kementerian ini bertanggung jawab dalam memperluas jaringan, membangun kerja sama yang strategis, serta membuka peluang bagi mahasiswa Fakultas Vokasi.",
            proker: ["VOKSROAD", "VINTELS", "COMPANY VISIT", "EKSPEDISI LUGRI", "PARTNER AND COLLABORATION", "ID VOKS (IDE VOKASI)"],
            staf: ["Vita Nur Aini Putri", "Aisyah Ramadhan", "Rachma Auliya", "Jelita Mutiara Putri", "Fernanza Surya Ghazi", "Muhammad Wildan", "Dea Alia", "Nonita Nafitri Andriyanto", "Reisya Alifia Erdvani", "Divo Farelly Sattar", "Aura Zahru Sula Tsana", "Muhammad Dicky Sabilillah"],
        },
        {
            logowarna: "/logokementrian/warna/DAGRI.svg",
            logononwarna: "/logokementrian/nonWarna/dagrinew.svg",
            p1: "KEMENTERIAN",
            p2: "DALAM NEGERI",
            judul1: "KEMENTERIAN",
            judul2: "DALAM NEGERI",
            warna: "via-[#D65D2A]",
            bwarna: "text-[#D65D2A]",
            hover: "hover:text-orange-500",
            back: "DAGRI",
            Fbph: "/fotobph/dagri.webp",
            deskripsi: "Kementerian Dalam Negeri BEM Vokasi UB adalah divisi yang berperan sebagai representasi organisasi dalam menjalin hubungan dengan pihak Internal. Kementerian ini bertanggung jawab dalam memperluas jaringan, membangun kerja sama yang strategis, serta membuka peluang bagi mahasiswa Fakultas Vokasi.",
            proker: ["MODERASI INTERNAL", "OOTM (ORMAWA OF THE MONTH)", "VOKASI MONTHLY DATE", "DBD (DISKUSI BARENG DEKANAT)", "DEDIKARYA", "BRODI (OBROLAN DAGRI)", "CREANOMIC"],
            staf: ["Exaudi Mahaga Lawi", "Aura Kasih", "Muhammad Raihan hidayah", "Maisa Wulan Sari", "Andrae Cecylia", "Habib Satria Hakiki", "Afgreky Tristan Kaneriyoshi", "Yohanes Danemdra Mahardika Putra Parmadi", "Naila Virlini Azzahra", "Miftah Afreza Maulana", "Jihan kirany tanjung"],
        }
    ]

    return (
        <>
            {data.map(({ Kemenkoan, deskripsi, nama, jabatan, foto }) => (
                <HeaderMenko
                    key={Kemenkoan}
                    Kemenkoan={Kemenkoan}
                    deskripsi={deskripsi}
                    nama={nama}
                    jabatan={jabatan}
                    foto={foto}
                />
            ))}
            <div className="relative flex justify-center items-center h-fit w-full mt-1 md:mt-50 gap-10">
                <div className="z-10 absolute left-0 md:left-100 bottom-2 md:bottom-7 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#62A7E9] blur-3xl"></div>
                <div className="z-10 absolute left-50% bottom-10 md:bottom-20 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#FF7979] blur-3xl"></div>
                <div className="z-10 absolute right-0 md:right-100 bottom-0 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#D65D2A] blur-3xl"></div>
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
                {Kementrian.map(({ logononwarna, judul1, judul2, bnama, warna, bwarna, hover, back,Fbph, deskripsi, proker, staf }, index) => (
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
    );
}