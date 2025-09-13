import { useNavigate } from 'react-router-dom';

const dataProgram = [
  {
    id: 1,
    title: 'YUWARAJA',
    subtitle: 'PKKMB FAKULTAS VOKASI UNIVERSITAS BRAWIJAYA',
    img: '/proker/yuwa4.jpg',
  },
  {
    id: 2,
    title: 'STIFOFEST',
    subtitle: 'SPORT AND CREATIVITY VOKASI COMPETITION',
    img: '/proker/stifo1.jpg',
  },
  {
    id: 3,
    title: 'CREANOMIC',
    subtitle: 'CREATIVE ECONOMY INNOVATION CENTRE',
    img: '/proker/crea.jpg',
  },
  {
    id: 4,
    title: 'ABDI DESA',
    subtitle: 'ABDI DESA BEM FAKULTAS VOKASI UNIVERSITAS BRAWIJAYA',
    img: '/proker/abdes1.jpg',
  },
];

const ProgramKerja = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/program/${id}`);
  };

  return (
    <>
      <div className="bg-black text-white mt-10 md:mt-20 py-16 px-8 md:px-16">
        <div className="h-13 text-2xl md:text-5xl font-bold text-center bg-gradient-to-t from-yellow-400 to-yellow-100 bg-clip-text text-transparent mb-10 hover:scale-103 duration-300">BIG 4 PROGRAM KERJA</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
          {dataProgram.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-3xl overflow-hidden cursor-pointer h-50 md:h-100 w-full md:w-150 shadow-md transition transform hover:scale-103 duration-300"
              onClick={() => handleClick(item.id)}
            >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm">{item.subtitle}</p>
                <span className="text-yellow-400 text-sm mt-2 inline-block">Know more →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgramKerja;
