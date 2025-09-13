import logo from "../assets/LOGO-BEM.png";
import { FaYoutube, FaTiktok, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Sosmed = () => {
  const socialLinks = [
    { name: "YouTube", href: "https://youtube.com/@bemvokasiub?si=uhsgokJ4hqe5K8Ci", icon: FaYoutube },
    { name: "TikTok", href: "https://www.tiktok.com/@bemvokasiub?_t=ZS-8x4vLmUxycb&_r=1", icon: FaTiktok },
    { name: "Instagram", href: "https://www.instagram.com/_bemvokasiub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: FaInstagram },
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
    { name: "Twitter", href: "https://x.com/bemvokasiub", icon: FaXTwitter },
  ];

  return (
    <div className="flex gap-4 justify-center mt-4 flex-wrap">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
          aria-label={`Kunjungi ${social.name}`}
        >
          <social.icon className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      ))}
    </div>
  );
};

const Myfooter = () => {
  return (
    <footer className="relative bg-black text-white px-4 py-10 overflow-hidden z-10">
      {/* Bulatan Background */}
      <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] bg-blue-500 rounded-full blur-[100px] opacity-80 z-0"></div>
      <div className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] bg-blue-500 rounded-full blur-[100px] opacity-80 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-7xl mx-auto text-center md:text-left">
        {/* Alamat */}
        <div className="flex flex-col items-center min-w-[200px]">
          <h3 className="text-xl md:text-2xl font-bold mb-2">ALAMAT</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Jl. Veteran No 12 - 14 <br /> Ketawanggede, Malang <br /> Jawa Timur, Indonesia
          </p>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center items-center">
          <img src={logo} alt="Logo BEM" className="w-40 md:w-60 h-auto" />
        </div>

        {/* Kontak */}
        <div className="flex flex-col items-center min-w-[200px]">
          <h3 className="text-xl md:text-2xl font-bold mb-2">KONTAK KAMI</h3>
          <p className="text-sm md:text-base">Email: vokasi@ub.ac.id</p>
          <p className="text-sm md:text-base">Phone: 0341-553240</p>
          <p className="text-sm md:text-base">WA: 089652944096</p>
        </div>
      </div>

      {/* Sosmed */}
      <Sosmed />

      {/* Credit */}
      <p className="mt-4 text-xs md:text-sm text-center text-white">
        2025 BADAN EKSEKUTIF MAHASISWA FAKULTAS VOKASI UNIVERSITAS BRAWIJAYA | MADE WITH LOVE BY KOMINFO BEM FV UB 2025
      </p>
    </footer>
  );
};

export default Myfooter;
