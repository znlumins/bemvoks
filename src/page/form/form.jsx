import { useState } from "react";

export default function SopPostingan() {
  const [agreed, setAgreed] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (agreed) {
    window.open("http://127.0.0.1:8000/login", "_blank");
  }
};

  return (
    <div className="min-h-screen flex items-start justify-center px-6 sm:px-12 pt-24 pb-24 bg-gradient-to-b from-[#0D1E42] to-[#2D4B80] font-poppins">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
            SOP REQUEST POSTINGAN INSTAGRAM
          </h1>
        {/* Content */}
        <div className="bg-white rounded-[20px] p-6 mx-4 overflow-y-auto flex-1">
          <ol className="list-decimal pl-4 space-y-4 text-sm">
            <li>
              <strong>Jam Kerja Requestan dan Upload 09:00 - 19:00</strong>
              <ul className="list-disc pl-5">
                <li>Pengajuan di luar jam kerja akan diproses pada jam kerja keesokan harinya</li>
                <li>Kecuali pada kemenkoan pergerakan terkait requestan insidental</li>
                <li>Pengajuan desain untuk poster dan materi lainnya harus dilakukan maksimal H-3 sebelum upload.</li>
              </ul>
            </li>
            <li>
              <strong>
                Pengajuan Permintaan (Req Submission) Setiap permintaan wajib mengisi pada Website BEM yang telah kita sediakan. Setiap permintaan harus mencantumkan:
              </strong>
              <ul className="list-disc pl-5">
                <li>Caption sesuai dengan format yang ditetapkan.</li>
                <li>Tanggal & Waktu Upload yang diinginkan.</li>
                <li>Media yang akan diunggah (gambar, video, atau dokumen lain).</li>
              </ul>
            </li>
            <li>
              <strong>Ketentuan Postingan</strong>
              <ul className="list-disc pl-5">
                <li>Setiap postingan minimal harus mencantumkan logo BEM dan logo Kementerian/Biro terkait.</li>
                <li>
                  Hak istimewa diberikan untuk kemenkoan pergerakan pada postingan insidental, yang dapat memiliki kelonggaran
                  dalam aturan standar.
                </li>
              </ul>
            </li>
            <li>
              <strong>Aturan Tambahan</strong>
              <ul className="list-disc pl-5">
                <li>
                  Dilarang mengkomersialkan desain dan kreativitas yang terkait dengan Kominfo tanpa persetujuan Kominfo
                  (BPH dan pihak terkait).
                </li>
                <li>
                  Setiap Kementerian/Biro wajib membuat caption sendiri untuk diunggah di Instagram dengan format yang sudah
                  dibuat.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          SOP REQUEST POSTINGAN TIKTOK
        </h1>
        
         {/* Content */}
        <div className="bg-white rounded-[20px] p-6 mx-4 overflow-y-auto flex-1">
          <ol className="list-decimal pl-4 space-y-4 text-sm">
            <li>
              <strong>Working Hour</strong>
              <ul className="list-disc pl-5">
                <li>Waktu upload video mulai dari jam 11:00-21:00 WIB.</li>
                <li>Request diluar jam 11:00-21:00 akan di-upload pada working hour keesokan harinya kecuali untuk video insidental.</li>
              </ul>
            </li>
            <li>
              <strong>
                Ketentuan Video</strong>
              <ul className="list-disc pl-5">
                <li>Resolusi video harus HD/jernih.</li>
                <li>Video tidak boleh mengandung SARA dan pornografi.</li>
                <li>Menggunakan audio/musik yang sesuai dan tidak mengandung unsur yang tidak pantas.</li>
                <li>Untuk setiap KemenBiro harus menambahkan template cover TikTok yang sudah disediakan oleh KOMINFO pada saat pengeditan.</li>
              </ul>
            </li>
            <li>
              <strong>Ketentuan Pengajuan Permintaan (Req Submission)</strong>
              <ul className="list-disc pl-5">
                <li>Setiap KemenBiro mengirimkan hasil video maksimal 2 hari sebelum tanggal upload.</li>
                <li>Setiap video wajib menggunakan format caption yang sudah disediakan dan boleh menambahkan hashtag.</li>
                <li>Setiap KemenBiro dapat menambahkan catatan seperti menyertakan link audio/musik jika perlu. </li>
                <li>Setiap KemenBiro diperbolehkan mengupload video hanya 1 kali sehari. Jika diharuskan mengupload lebih dari 1 video, video pertama harus menyentuh 1000 viewers dahulu baru bisa upload video lainnya.</li>
              </ul>
            </li>
            <li>
              <strong>Aturan Tambahan</strong>
              <ul className="list-disc pl-5">
                <li>
                  Dilarang mengkomersialkan desain dan kreativitas yang terkait dengan Kominfo tanpa persetujuan Kominfo
                  (BPH dan pihak terkait).
                </li>
                <li>
                  Setiap Kementerian/Biro wajib membuat caption sendiri untuk diunggah di Instagram dengan format yang sudah
                  dibuat.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>Saya setuju dengan SOP di atas</span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out
            ${agreed ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          REQUEST POSTINGAN
        </button>
      </form>
    </div>
    </div>
  );
}
