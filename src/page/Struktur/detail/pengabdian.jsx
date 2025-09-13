import Boxlogo from "../../../componens/boxlogo";
import HeaderMenko from "../../../componens/headerMenko";
import Cardkementerian from "../../../componens/cardkementrian";

export default function Pengabdian() {
    const data = [
        {
            Kemenkoan: "Pengabdian",
            deskripsi: "Kemenkoan Pengabdian BEM Vokasi Universitas Brawijaya adalah wadah yang dikelola oleh mahasiswa dibawah naungan BEM Vokasi Universitas Brawijaya yang bertujuan untuk mewujudkan pengabdian kepada masyarakat melalui beberapa program sosial dan lingkungan. Kemenkoan ini berperan dalam mempererat hubungan antara mahasiswa, dan Masyarakat, serta menciptakan dampak positif dalam bidang sosial, lingkungan dan pemberdayaan Masyarakat.",
            nama: "Margaretha N. P. P. / MP ‘23",
            jabatan: "Menko Pengabdian",
            foto: "/assets/pengabdian.webp",
        }
    ];

    const Kementrian = [
        {
            logowarna: "/logokementrian/warna/LH.svg",
            logononwarna: "/logokementrian/nonWarna/LH.svg",
            p1: "KEMENTERIAN",
            p2: "LINGKUNGAN HIDUP",
            judul1: "KEMENTERIAN",
            judul2: "LINGKUNGAN HIDUP",
            warna: "via-[#13A013]",
            bwarna: "text-[#13A013]",
            hover: "hover:text-green-500",
            back: "LINGDUP",
            Fbph: "/fotobph/lh.webp",
            deskripsi: "Kementerian Lingkungan Hidup berfokus pada pelestarian dan perlindungan lingkungan melalui edukasi ekologis, pengelolaan sampah, kampanye, hingga inovasi terbarukan. Menjadi wadah bagi mahasiswa Vokasi untuk meningkatkan kesadaran lingkungan dan menerapka prinsip keberlanjutan, sesuai dengan nilai Tri Dharma Perguruan Tinggi dalam Pengabdian Masyarakat yang secara langsung tidak hanya berdampak nyata bagi lingkungan dan Fakultas Vokasi Brawijaya tetapi juga untuk masyarakat.",
            proker: ["SADAR LINGKUNGAN", "SAHABAT ALAM", "JEJAK LESTARI"],
            staf: ["Isabel Neena Sebayang", "Yesika Rahelya Simamora", "Phillipus Zerah Suhardiman", "Farrah Arinda Khana", "Naftalia Frendsiska Rumahorbo", "Gilbert Manihuruk", "Fedinia Luna Zufaira", "Angeli Nova Anggraini", "Reyhan Feraldine", "Rusenda Immanuel Bagasanto", "Aisyah Maulidia"
],
        },
        {
            logowarna: "/logokementrian/warna/SOSMAS.svg",
            logononwarna: "/logokementrian/nonWarna/SOSMAS.svg",
            p1: "KEMENTERIAN",
            p2: "SOSIAL MASYARAKAT",
            judul1: "KEMENTERIAN",
            judul2: "SOSIAL MASYARAKAT",
            warna: "via-[#0C8A8B]",
            bwarna: "text-[#0C8A8B]",
            hover: "hover:text-teal-500",
            back: "SOSMA",
            Fbph: "/fotobph/sosma.webp",
            deskripsi: "Kementerian Sosial Masyarakat adalah kementrian yang berfokus pada pelayanan dan pengabdian dengan beberapa program kerja yang mencakup aspek pendidikan, bakti sosial, pengabdian masyarakat hingga respon terhadap bencana. Kementerian sosial masyarakat juga merupakan pengaplikasian yang dilakukan BEM Fakultas Vokasi dalam nilai Tri Dharma Perguruan Tinggi khususnya dalam aspek pengabdian masyarakat, dengan penekanan pada kepedulian serta solidaritas.",
            proker: ["VOSFOR (Vocational Sharing For Others)", "SHARE YOUR BLOOD", "VOKASI MENGAJAR", "ABDI DESA"],
            staf: ["Immanuel Bagus Wicaksono", "Bernadetha Kinanti Raharja", "Cut Nayla Aulia Ramadani", "Chintana Triadipta Nanda savira", "Felisha Zafania Laila Dady", "Hafiz Galih Permana", "Jonathan Putra aditya", "Kayla Alodia Calista", "Khansa Shafira safa", "Nazwa Nur Maulidyah", "Nadia Aisyah", "Ratu Nabila", "Rizqi Kamal"],
        }

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
                <div className="z-10 absolute left-10 md:left-130 bottom-2 md:bottom-7 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#13A013] blur-3xl"></div>
                <div className="z-10 absolute left-50 md:left-190 bottom-10 md:bottom-20 h-30 md:h-50 w-30 md:w-50 rounded-[1000px] bg-[#0C8A8B] blur-3xl"></div>
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