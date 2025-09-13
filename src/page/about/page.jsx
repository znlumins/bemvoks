import './Abt.css';
import Kabinet from "../../componens/kabinet";
import '../page.css';
import '../../App.css';
import logo from '/assets/LOGO BEM.svg';
import { motion } from 'framer-motion';




const Heading = () => {
  return (
    <>
      <div className="flex flex-wrap sm:flex-row justify-between w-full">
        <div className="flex flex-col items-center mt-20 md:mt-40">
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
            className="flex items-center bg-gradient-to-t from-black via-[#0D2456] to-blue-200 h-fit w-fit py-10 px-10 rounded-r-[50px]">
            <Kabinet className="ml-20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 20, damping: 20 }}
            className="mt-2 md:mt-10">
            <div className="text-base md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-blue-400">#KabinetSkalaSenandhika</div>
            <div className="text-base md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-blue-400">#vokasioner</div>
            <div className="text-base md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-50 to-blue-400">#kitasatubrawijaya</div>
          </motion.div>
        </div>
        <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="flex flex-col mt-0 md:mt-40 px-4 sm:px-20 w-full sm:w-1/2">
        <div className="h-10 md:h-20 mt-6 sm:mt-10 tentang text-3xl sm:text-4xl md:text-7xl font-black text-right bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-200">Tentang</div>
        <div className="tentang1 text-3xl sm:text-4xl md:text-7xl font-bold text-right bg-clip-text text-transparent bg-gradient-to-t from-blue-500 to-blue-300">BEM FV UB 2025</div>
        <div className="mt-6 sm:mt-10 ml-0 sm:ml-15 w-full sm:w-120">
          <p className="tentang1 text-sm sm:text-base md:text-2xl text-justify text-white">“Skala Senandhika” Menggambarkan wadah yang berbicara dengan hati untuk menciptakan harmoni antara kebersamaan, aspirasi, karya, dan aksi."</p>
        </div>
      </motion.div>
    </div>
    </>
  );
}

const Content = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-10 md:mt-50">
        <motion.img
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="h-30 md:h-120" loading="lazy" src={logo} alt="logobem" />
        <motion.div
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        >
          <div className="tentang bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-100 text-4xl md:text-9xl">FILOSOFI</div>
          <div className="tentang bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-100 text-4xl md:text-9xl">LOGO</div>
        </motion.div>
      </div>
      <div className="flex flex-col ml-10 md:ml-40 mr-10 md:mr-40 mt-60 md:mt-150">
        <div className="relative">
          <motion.div 
          initial={{ scale:0.5, rotate:90 }}
          whileInView={{scale:1, rotate:0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute bottom-5 md:bottom-30 left-0 md:left-60 z-20 w-50 md:w-110 h-fit px-5 md:px-10 py-5 md:py-10 text-white text-[8px] md:text-xl text-justify bg-white/30 backdrop-blur-xl border-2">
            <p>Lima daun yang saling berhubungan menggambarkan lima program studi di fakultas vokasi universitas brawijaya. BEM juga diisi oleh mahasiswa dari setiap program studi yang berjuang dan berkembang bersama untuk fakultas vokasi universitas brawijaya</p>
          </motion.div>
          <div className="absolute bottom-0 right-0 md:right-50 z-0 h-35 md:h-80 w-45 md:w-100 bg-gradient-to-t from-[#0D2456] to-[#8ECBFF] rounded-[30px] md:rounded-[50px]" ></div>
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="h-45 md:h-140 z-30 absolute bottom-5 right-0 md:right-50 " loading="lazy" src="/assets/logoS.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col ml-10 md:ml-40 mr-10 md:mr-40 mt-70 md:mt-150">
        <div className="relative">
          <motion.div
          initial={{scale:0.5, rotate:-90 }}
          whileInView={{scale:1, rotate:0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute bottom-5 md:bottom-10 right-0 md:right-50 z-20 w-50 md:w-110 h-fit px-5 md:px-10 py-5 md:py-10 text-white text-[8px] md:text-xl text-justify bg-white/30 backdrop-blur-xl border-2">
            <p>Jarum kompas yang selalu menunjukkan arah dengan tegas, melambangkan semangat BEM yang tak pernah ragu untuk melangkah maju, selalu mencari arah yang jelas untuk membawa perubahan. Sedangkan cincin emas, simbol kejayaan yang abadi, mencerminkan pencapaian dan keberhasilan yang akan terus dikenang. Bersama, mereka menggambarkan tekad, arah, dan tujuan luhur yang akan mengantarkan BEM menuju masa depan yang gemilang.</p>
          </motion.div>
          <div className="absolute bottom-0 left-0 md:left-60 z-0 h-35 md:h-80 w-45 md:w-100 bg-gradient-to-t from-[#0D2456] to-[#8ECBFF] rounded-[30px] md:rounded-[50px]" ></div>
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="h-45 md:h-140 z-30 absolute bottom-15 left-0 md:left-40" loading="lazy" src="/assets/logoK.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col ml-10 md:ml-40 mr-10 md:mr-40 mt-60 md:mt-150">
        <div className="relative">
          <motion.div
          initial={{scale:0.5, rotate:90 }}
          whileInView={{scale:1, rotate:0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          className="absolute bottom-10 md:bottom-30 left-0 md:left-50 z-30 w-50 md:w-110 h-fit px-5 md:px-10 py-5 md:py-10 text-white text-[8px] md:text-xl text-justify bg-white/30 backdrop-blur-xl border-2">
            <p>Huruf V Dan Raja Brawijaya Menggambarkan BEM Vokasi UB 2025 sebagai organisasi yang berdiri dan hidup dalam ruang lingkup fakultas vokasi universitas brawijaya</p>
          </motion.div>
          <div className="absolute bottom-0 right-0 md:right-50 z-0 h-35 md:h-80 w-40 md:w-100 bg-gradient-to-t from-[#0D2456] to-[#8ECBFF] rounded-[30px] md:rounded-[50px]" ></div>
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className="h-30 md:h-100 z-30 absolute bottom-15 md:bottom-40 right-0 md:right-55" loading="lazy" src="/assets/logoV.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

function ColorBox({ color, text, textColor = "text-white" }) {
  return (
    <div
      // initial={{ y: 150 }}
      // whileInView={{ y: 0 }}
      // viewport={{ once: true }}
      // transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`bg-gradient-to-t h-40 md:h-70 w-full p-10 md:p-20 from-black via-[#275db4] to-[#a5d6ff] md:shadow-lg rounded-t-[100px] md:rounded-t-[150px]`}>
      <div className="flex justify-around items-center">
        <div className={`w-15 md:w-30 h-15 md:h-30 rounded-[30%] ${color} md:shadow-xl/30 hover:scale-110 duration-300`}></div>
        <p className={`poppins text-[10px] w-40 md:w-90 text-justify md:text-xl font-semibold ${textColor}`}>{text}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="bg-[url(/assets/BG.svg)] bg-cover bg-no-repeat">
        <Heading />
      </div>
      <Content />
      <div className="flex flex-col justify-center px-0 md:px-40 mt-15 md:mt-40">
        <div className="overflow-hidden">
          <ColorBox
          color={"bg-[#368AF8]"}
          text={"Warna Biru menggambarkan kepercayaan, profesionalisme, dan kebijaksanaan."}
          />
          <ColorBox
          color={"bg-[#F1CB31]"}
          text={"Warna Kuning menggambarkan kreativitas, semangat, dan optimisme."}
          />
          <ColorBox
          color={"bg-white"}
          text={"Warna Putih menggambarkan transparansi, dan integritas."}
          />
        </div>
      </div>

    </>
  );
}



export default About;
