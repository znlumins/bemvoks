import { useParams } from "react-router-dom";
import Spi from "./detail/spi";
import Djo from "./detail/djo";
import Pengembangan from "./detail/pengembangan";
import Pengabdian from "./detail/pengabdian";
import Pergerakan from "./detail/pergerakan";
// import lainnya sesuai kebutuhan

const DetailKemenkoan = () => {
  const { slug } = useParams();

  const components = {
    spi: <Spi />,
    djo: <Djo/>,
    pengembangan: <Pengembangan/>,
    pengabdian: <Pengabdian/>,
    pergerakan: <Pergerakan/>
    // tambahkan semua slug di sini
  };

  return components[slug] || <p>Kementerian tidak ditemukan.</p>;
};

export default DetailKemenkoan;
