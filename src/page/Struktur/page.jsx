import Kabinet from "../../componens/kabinet";
import '../page.css'
import Menko from "../../componens/menko";
import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import wapres from "/fotopres/wapres.png";
import Tilt from "react-parallax-tilt";

const Str = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 20, damping: 20 }}
      className="flex justify-center items-center">
      <div className="struktur mt-20 md:mt-40 mb-5 md:mb-10">STRUKTUR</div>
    </motion.div>
  );
};

const Sambutan = () => {
  return (
    <div className="bungkus">
      <div className="box">
        <div className="text-blue-300 ml-3 md:ml-40 mt-10 md:mt-40 text-3xl md:text-6xl">Sambutan Press & Wapres</div>
        <br />
      </div>
    </div>
  );
};

const Fotopres = () => {
  const ref = useRef(null);
  const isInViewT = useInView(ref, { once: true, margin: "0px" });

  return (
    <Tilt glareEnable={true} glareMaxOpacity={0} transitionSpeed={250}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInViewT ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: "easeOut" }} className="flex flex-col items-center justify-center relative">
        <div className="absolute h-80 md:h-140 mb:20 md:mb-50 z-20 bottom-0 md:bottom-2 overflow-hidden">
          <img src="/fotopres/press.png" alt="Presiden BEM Vokasi" loading="lazy" className="h-60 md:h-full" />
        </div>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute ml-50 md:ml-100 top-80 md:top-50 left-2 bg-[#307CC5] text-white text-[10px] md:text-lg px-3 py-1  shadow z-30 text-shadow-lg/30">
          Radjaturasca M.H. / DG '23 <br /> Presiden BEM VOKASI UB
        </motion.div>
        <div className="pres top-105 md:top-100 bg-[#307CC5] px-5 md:px-10 w-55 md:w-100 rounded-lg text-center text-white font-bold md:text-5xl text-2xl md:shadow-lg relative z-30 md:text-shadow-lg/30">
          PRESIDEN BEM VOKASI
          <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute -top-16 -right-5 w-[100px] h-[100px] rotate-120 drop-shadow-lg">
            <div className="w-20 md:w-full h-20 md:h-full bg-gradient-to-b from-[#6BACEA] to-[#307CC5] clip-star"></div>
          </motion.div>
        </div>
        <div className="relative left-5 top-50 md:top-0 md:left-0 w-[250px] md:w-[350px] h-[450px] md:h-[550px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInViewT ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-b from-[#5BBEFF] to-black w-50 md:w-full h-[200px] md:h-[450px] rounded-t-[75px] md:rounded-t-[100px] overflow-hidden md:shadow-xl relative z-10 flex items-end justify-center"
          ></motion.div>
        </div>
        <div className=" flex justify-center"></div>
      </motion.div>
    </Tilt>
  );
};

const Fotowapres = () => {
  const ref = useRef(null);
  const isInViewT = useInView(ref, { once: true, margin: "0px" });

  return (
    <Tilt glareEnable={true} glareMaxOpacity={0} transitionSpeed={250}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInViewT ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: "easeOut" }} className="flex flex-col items-center justify-center relative mt-5 md:mt-20">
        <div className="absolute h-80 md:h-140 mb-20 md:mb-50 z-20 bottom-0 md:bottom-2 overflow-hidden">
          <img src={wapres} alt="Wakil Presiden BEM Vokasi" loading="lazy" className="h-60 md:h-full" />
        </div>
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute ml-50 md:ml-100 top-60 md:top-50 left-2 bg-[#307CC5] text-white text-[10px] md:text-xl px-3 py-1  shadow z-30 text-shadow-lg/30">
          Kayla Putri H / Adbis '23 <br /> Wapres BEM VOKASI UB
        </motion.div>
        <div className="pres top-80 md:top-100 bg-[#307CC5] px-5 md:px-10 w-65 md:w-125 rounded-lg text-center text-white font-bold md:text-5xl text-2xl md:shadow-lg relative z-30 md:text-shadow-lg/30">
          WAKIL PRESIDEN BEM VOKASI
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute -top-19 left-0 w-[100px] h-[100px] rotate-16 drop-shadow-lg">
            <div className="w-20 md:w-full h-20 md:h-full bg-gradient-to-b from-[#6BACEA] to-[#307CC5] clip-star"></div>
          </motion.div>
        </div>
        <div className="relative top-20 md:top-0 left-5 md:left-0 w-[250px] md:w-[350px] h-[450px] md:h-[550px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInViewT ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-b from-[#5BBEFF] to-black w-50 md:w-full h-[200px] md:h-[450px] rounded-t-[75px] md:rounded-t-[100px] overflow-hidden shadow-xl relative z-10 flex items-end justify-center"
          ></motion.div>
        </div>
        <div className=" flex justify-center"></div>
      </motion.div>
    </Tilt>
  );
};


function Struktur() {
  return (
    <>
      <div className="bg-[url(/assets/BG.svg)] bg-contain md:bg-cover bg-no-repeat h-lvh">
        <Str />
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 20, damping: 20 }}
          >
            <Kabinet />
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <motion.div
          initial={{ scale:0.7, y:150 }}
          whileInView={{ scale:1, y:0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 20, damping: 20 }}
        >
          <Sambutan />
          <br />
          <div className="text-white mr-5 md:mr-40 ml-5 md:ml-40 text-justify text-[12px] md:text-2xl mb-0 md:mb-40">
            <p>
              Di antara langkah dan waktu, kami berdiri bukan sekedar pengurus, tetapi sebagai mahasiswa yang membawa mimpi, mimpi yang lahir dari harapan dan tumbuh dari keinginan sederhana untuk menjadikan Vokasi Brawijaya lebih hangat,
              lebih dekat, dan lebih bermakna. Kami menyebut langkah ini, Skala Senandhika. “Skala” adalah keberanian untuk bertumbuh, untuk menambah kualitas tanpa kehilangan arah, sementara “Senandhika” adalah tentang harmoni, tentang irama
              yang tercipta saat kebersamaan, aspirasi, karya, dan aksi menyatu menjadi satu suara. Kabinet ini bukan milik segelintir, tapi milik kita semua. tempat suara menemukan ruang, gagasan menemukan bentuk, dan aksi menemukan makna.
              Kami tak menjanjikan hal besar, tapi kami percaya bahwa dari hal kecil yang konsisten, makna bisa lahir, dan dari hal sederhana yang tulus, perubahan bisa tumbuh. Perlahan kita berjalan bersama, tak perlu tergesa cukup dengan
              rasa, dengan hati, dan dengan semangat yang terbagi. Karena ini bukan tentang menjadi sempurna, ini tentang menjadi berarti. Kami, Kabinet Skala Senandhika, mengajakmu untuk ikut menulis cerita ini.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="bg-[url(/assets/BG2.svg)] bg-cover mt-5 md:mt-200 mb-10 md:mb-30">
        <Fotopres />
        <Fotowapres />
      </div>
      <Menko />
    </>
  );
}

export default Struktur;
