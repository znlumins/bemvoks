import React, { useState, useRef, useCallback, useEffect } from "react";
import Kabinet from "../../componens/kabinet";
import logobem from '/assets/LOGO BEM.svg';
import ProgramKerja from "../../componens/programKerja/page";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Webcam from "react-webcam";
import "../../componens/nav.css";
import "../../App.css";
import { motion, useInView, AnimatePresence } from "framer-motion";

const VisiMisi = () => {
    // VisiMisi component remains the same
    return (
        <div className="w-full flex flex-col items-center md:px-8 overflow-x-hidden">
            <div className="boxx flex flex-col md:flex-row justify-around items-center h-full mb-10 relative text-white p-4 md:p-8 w-full md:shadow-xl max-w-[1300px]">
                <h2 className="visi text-3xl md:text-9xl mb-4 md:mb-0">VISI</h2>
                <p className="poppins text-white max-w-[300px] md:max-w-[450px] text-xs md:text-xl text-justify leading-relaxed">
                    Menjadikan Badan Eksekutif Mahasiswa Fakultas Vokasi sebagai wadah yang menggerakkan Skala Sinergis dalam kebersamaan, menindaklanuti Skala Aspirasi anggota, menginspirasi Skala Karya melalui inovasi, serta mendorong Skala Aksi
                    dalam kesadaran sosial dan politik, guna menciptakan Mahasiswa Praktisi Fakultas Vokasi Universitas Brawijaya yang kompetitif dan siap bersaing di era 5.0.
                </p>
            </div>
            <div className="boxx flex flex-col md:flex-row justify-around items-center h-full mb-10 text-white p-4 md:p-8 w-full md:shadow-xl max-w-[1300px]">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <h2 className="misi text-3xl md:text-9xl">MISI</h2>
                </div>
                <div className="space-y-4 text-justify leading-relaxed">
                    {[
                        { title: "SKALA SINERGI", desc: "Membangun skala besar kebersamaan dengan niat yang tulus untuk menciptakan sinergi yang kokoh antar lembaga Fakultas Vokasi, mencapai tujuan bersama dalam skala yang lebih luas." },
                        { title: "SKALA AKSI", desc: "Memupuk kesadaran kolektif dengan mendorong partisipasi aktif terhadap isu sosial politik dalam skala besar, termasuk dalam upaya edukasi dan aksi nyata." },
                        { title: "SKALA ASPIRASI", desc: "Menghimpun dan menindaklanjuti aspirasi mahasiswa dengan pendekatan yang komunikatif dan solutif sebagai bentuk perwujudan perwakilan mahasiswa yang responsif." },
                        { title: "SKALA KARYA", desc: "Mengembangkan potensi mahasiswa Fakultas Vokasi melalui ruang ekspresi dan inovasi yang berdampak pada individu maupun lingkungan sosialnya." }
                    ].map((item, i) => (
                        <div key={i} className="poppins max-w-[300px] md:max-w-[450px] text-xs md:text-xl">
                            <strong>{item.title}</strong><br />{item.desc}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/**
 * Menggambar gambar dengan sudut melengkung pada canvas.
 */
function drawRoundedImage(ctx, image, x, y, width, height, radius) {
    ctx.save();
    ctx.beginPath();
    // Path untuk membuat bentuk persegi dengan sudut melengkung
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    // Gunakan path sebagai clipping mask
    ctx.clip();
    // Gambar gambar di dalam mask
    ctx.drawImage(image, x, y, width, height);
    ctx.restore();
}


const PhotoboothModal = ({ isOpen, onClose, logoSrc }) => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImages, setCapturedImages] = useState([]);
    const [countdown, setCountdown] = useState(3);
    const [status, setStatus] = useState('idle');
    const [isFlashing, setIsFlashing] = useState(false);

    const TOTAL_PHOTOS = 3;

    useEffect(() => {
        if (status !== 'counting' || capturedImages.length >= TOTAL_PHOTOS) return;
        setCountdown(3);
        const countdownInterval = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        const captureTimeout = setTimeout(() => {
            clearInterval(countdownInterval);
            const imageSrc = webcamRef.current.getScreenshot();
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 150);
            setTimeout(() => {
                const newImages = [...capturedImages, imageSrc];
                setCapturedImages(newImages);
                if (newImages.length >= TOTAL_PHOTOS) {
                    setStatus('review');
                }
            }, 1200);
        }, 3000);
        return () => {
            clearInterval(countdownInterval);
            clearTimeout(captureTimeout);
        };
    }, [status, capturedImages]);

    const handleStart = () => {
        setCapturedImages([]);
        setStatus('counting');
    };

    const handleRetake = () => {
        setCapturedImages([]);
        setStatus('idle');
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const photoWidth = 640;
        const photoHeight = (photoWidth * 9) / 16;
        const sidePadding = 20;
        const innerPadding = 20;
        const logoHeight = 100;
        const headerPadding = 30;
        const footerPadding = 90;
        const cornerRadius = 25;

        canvas.width = photoWidth + sidePadding * 2;
        canvas.height = headerPadding + logoHeight + (photoHeight * TOTAL_PHOTOS) + (innerPadding * (TOTAL_PHOTOS + 1)) + footerPadding;
        
        const logo = new Image();
        logo.src = logoSrc;

        logo.onload = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#D8ECFF');
            gradient.addColorStop(1, '#62A7E9');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const logoAspectRatio = logo.width / logo.height;
            const drawnLogoWidth = logoHeight * logoAspectRatio;
            const logoX = (canvas.width - drawnLogoWidth) / 2;
            const logoY = headerPadding;
            ctx.drawImage(logo, logoX, logoY, drawnLogoWidth, logoHeight);

            let loadedImages = 0;
            capturedImages.forEach((src, index) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    const photoY = headerPadding + logoHeight + innerPadding + (photoHeight + innerPadding) * index;
                    drawRoundedImage(ctx, img, sidePadding, photoY, photoWidth, photoHeight, cornerRadius);
                    
                    loadedImages++;
                    
                    if (loadedImages === TOTAL_PHOTOS) {
                        // --- PERUBAHAN FONT DAN WARNA DIMULAI DI SINI ---
                        
                        // Menambahkan bayangan agar teks lebih mudah dibaca
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.shadowBlur = 4;
                        ctx.shadowOffsetX = 2;
                        ctx.shadowOffsetY = 2;

                        // Mengatur properti teks
                        ctx.fillStyle = 'white'; // Warna teks putih
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        
                        const textY = canvas.height - 20;

                        // Menggunakan font Poppins (dengan fallback ke font sans-serif)
                        ctx.font = `28px "Poppins", Arial, sans-serif`;
                        ctx.fillText("KABINET SKALA SENANDIKA", canvas.width / 2, textY);
                        
                        ctx.font = `bold 32px "Poppins", Arial, sans-serif`;
                        ctx.fillText("BEM VOKASI UB 2025", canvas.width / 2, textY - 35);

                        // Reset bayangan agar tidak mempengaruhi elemen lain
                        ctx.shadowColor = 'transparent';
                        ctx.shadowBlur = 0;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;

                        // --- AKHIR PERUBAHAN ---

                        const link = document.createElement('a');
                        link.download = 'photostrip-bem-vokasi-2025.png';
                        link.href = canvas.toDataURL('image/png');
                        link.click();
                    }
                };
            });
        };
    };

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                handleRetake();
            }, 300);
        }
    }, [isOpen]);

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()} className="bg-gray-800/80 border border-white/20 rounded-3xl p-6 w-full max-w-sm relative text-white flex flex-col items-center">
                        <h2 className="text-3xl font-bold mb-4">Photobooth Strip</h2>
                        <div className={`w-full ${status === 'review' ? 'aspect-[3/4]' : 'aspect-video'} bg-gray-900 rounded-xl p-4 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center transition-all duration-300`}>
                            {status === 'review' ? (
                                <div className="w-full h-full bg-gradient-to-b from-[#D8ECFF] to-[#62A7E9] p-2 rounded-md overflow-y-auto">
                                    {capturedImages.map((src, index) => (
                                        <img key={index} src={src} alt={`Capture ${index + 1}`} className="w-full mb-2 rounded-sm" />
                                    ))}
                                </div>
                            ) : (
                                <div className="relative w-full h-full overflow-hidden rounded-md">
                                    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} className="w-full h-full object-cover" />
                                    {status === 'counting' && (
                                        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                                            <AnimatePresence>
                                                <motion.div key={countdown} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="text-9xl font-bold text-white">
                                                    {countdown > 0 ? countdown : ''}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    )}
                                    <AnimatePresence>
                                        {isFlashing && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }} className="absolute inset-0 bg-white" />
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full">
                            {status === 'idle' && <button onClick={handleStart} className="w-full text-lg font-semibold py-3 px-8 rounded-lg bg-amber-500 hover:bg-amber-600 transition">Mulai</button>}
                            {status === 'counting' && <button disabled className="w-full text-lg font-semibold py-3 px-8 rounded-lg bg-gray-500 cursor-not-allowed">Bersiap...</button>}
                            {status === 'review' && (
                                <>
                                    <button onClick={handleRetake} className="w-full font-semibold py-3 px-6 rounded-lg bg-gray-600 hover:bg-gray-700 transition">Ambil Ulang</button>
                                    <button onClick={handleDownload} className="w-full font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition">Unduh Strip</button>
                                </>
                            )}
                        </div>
                        <canvas ref={canvasRef} style={{ display: 'none' }} />
                        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-white/50 hover:text-white transition-colors">&times;</button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

function Home() {
    const nilai = ["PROFESIONAL", "REFLEKTIF", "TERBUKA", "ADAPTIF", "AKTIF"];
    const [isPhotoboothOpen, setIsPhotoboothOpen] = useState(false);

    return (
        <div className="overflow-x-hidden scroll-smooth">
            <div className="bg-[url(/assets/BG.svg)] bg-cover bg-no-repeat">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center px-4 md:px-11 py-10">
                    <Tilt glareEnable={true} glareMaxOpacity={0} transitionSpeed={250}>
                        <motion.img src={logobem} alt="logo" className="" initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} />
                    </Tilt>
                    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, ease: 'easeOut' }}>
                        <Kabinet />
                        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
                            <p className="poppins text-white text-xs md:text-xl mt-6 mb-8">Selamat datang di website resmi BEM Vokasi UB kabinet <a className="poppins underline decoration-amber-200">Skala Senandhika.</a></p>
                            <Link to="/about" className="text-xs md:text-xl text-white font-semibold w-fit py-2 px-4 md:px-6 rounded-lg bg-gradient-to-t from-blue-700 to-blue-200 hover:from-blue-800 hover:to-blue-400 transition duration-300">TENTANG KAMI</Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <VisiMisi />
            <ProgramKerja />

            <div className="relative mt-20 mb-32 px-7 md:px-30">
                <div className="absolute h-60 md:h-96 w-60 md:w-96 bg-[radial-gradient(circle,_white_0%,_transparent_70%)] z-[-1] right-0 md:right-20 blur-3xl rounded-full" />
                <div className="absolute h-60 md:h-96 w-60 md:w-96 bg-[radial-gradient(circle,_#F1CB31_0%,_transparent_80%)] z-[-1] left-0 blur-3xl rounded-full mt-[200px]" />
                <div className="absolute h-60 md:h-96 w-60 md:w-96 bg-[radial-gradient(circle,_#368AF8_0%,_transparent_80%)] z-[-1] right-0 md:right-10 blur-3xl rounded-full mt-[450px]" />

                <div className="grid grid-cols-1 gap-5 md:gap-10 z-20">
                    <div className="text-white text-5xl md:text-8xl font-extrabold">
                        <div>NILAI</div>
                        <div>ORGANISASI</div>
                    </div>
                    {nilai.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="h-16 md:h-24 bg-white/30 backdrop-blur-sm border border-white rounded-[15px] md:rounded-[30px] flex items-center px-5 md:px-10 hover:scale-105 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl md:text-5xl text-white font-bold">{item}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="mt-20 md:mt-32 mb-10 md:mb-16 px-7 md:px-30">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="text-left">
                            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-3">Abadikan Momenmu!</h2>
                            <p className="text-white/70 text-lg md:text-xl max-w-2xl">
                                Jangan lewatkan kesempatan untuk menjadi bagian dari cerita kami. Coba photobooth BEM Vokasi sekarang juga!
                            </p>
                        </div>
                        <button onClick={() => setIsPhotoboothOpen(true)} className="flex-shrink-0 text-lg md:text-xl text-white font-semibold py-3 px-8 rounded-lg bg-gradient-to-t from-amber-500 to-yellow-300 hover:from-amber-600 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105">
                            Buka Photobooth
                        </button>
                    </div>
                </div>
            </div>
      
            <PhotoboothModal isOpen={isPhotoboothOpen} onClose={() => setIsPhotoboothOpen(false)} logoSrc={logobem} />
        </div>
    );
}

export default Home;