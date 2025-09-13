import "./menko.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menko = () => {
  const cards = [
    {
      slug: "spi",
      title: (
        <>
          SATUAN <br /> PENGENDALI <br /> INTERNAL
        </>
      ),
      imgLeft: "/assets/spi1.webp",
      imgRight: "/assets/spi2.webp",
    },
    {
      slug: "djo",
      title: (
        <>
          KEMENKOAN <br /> DIPLOMASI <br /> JARINGAN <br /> ORGANISASI
        </>
      ),
      imgLeft: "/assets/menkodjo.webp",
    },
    {
      slug: "pengembangan",
      title: (
        <>
          KEMENKOAN <br /> PENGEMBANGAN
        </>
      ),
      imgRight: "/assets/menkopengembangan.webp",
    },
    {
      slug: "pengabdian",
      title: (
        <>
          KEMENKOAN <br /> PENGABDIAN
        </>
      ),
      imgLeft: "/assets/pengabdian.webp",
    },
    {
      slug: "pergerakan",
      title: (
        <>
          KEMENKOAN <br /> PERGERAKAN
        </>
      ),
      imgRight: "/assets/pergerakan.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5 md:px-15">
      {cards.map(({ slug, title, imgLeft, imgRight }) => (
        <Link to={`/Struktur/${slug}`} key={slug} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="boxx flex justify-around items-center h-64 md:h-full mb-10 relative z-10 text-white p-8 w-100 md:w-330 shadow-xl hover:scale-105 hover:duration-300"
          >
            {imgLeft && (
              <div>
                <img src={imgLeft} alt="Foto kiri" loading="lazy" className="h-40 md:h-100 object-cover" />
              </div>
            )}
            <h2 className="spi text-center justify-center text-base md:text-2xl md:text-7xl">{title}</h2>
            {imgRight && (
              <div>
                <img src={imgRight} alt="Foto kanan" loading="lazy" className="h-40 md:h-100 object-cover" />
              </div>
            )}
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Menko;
