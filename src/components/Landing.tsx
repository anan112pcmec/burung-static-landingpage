import "../styles/global.css";
import { useEffect, useState, useRef, JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LogoLoop from "./LogoLoop";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper.css"
import { FaArchive, FaBarcode, FaCalendar, FaCalendarAlt, FaChartBar, FaCircle, FaComment, FaFileArchive, FaHeart, FaInfo, FaInstagram, FaLinkedin, FaMale, FaShare, FaStar, FaTrophy, FaTwitter } from "react-icons/fa";
import { FaAudible, FaCircleDot, FaSortUp, FaTriangleExclamation } from "react-icons/fa6";
import CardSwap, { Card } from "./CardSwap";
import csAnimation from "../assets/Illustration/Customer_Support.json"
import lottie from "lottie-web"
import uiClean from "../assets/Illustration/ecommerce.json"
import tanpaDataVerbose from "../assets/Illustration/Shopping_Cart_Loader.json"


const imageLogos = [
  { src: "https://www.bi.go.id/id/SiteAssets/bi-b.png", alt: "Company 1", href: "https://company1.com" },
  { src: "https://cdn.worldvectorlogo.com/logos/carrefour-c.svg", alt: "Company 2", href: "https://company2.com" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/GoTo_Financial.png", alt: "J&T", href: "https://company3.com" },
  { src: "data:image/jpeg;base64,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", alt: "J&T", href: "https://company3.com" },
  { src: "https://1000logos.net/wp-content/uploads/2022/08/JT-Express-Logo-500x281.png", alt: "J&T", href: "https://company3.com" },
];

const LottieAnimation = ({animasi}:{animasi:any}) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animasi,
    })

    return () => anim.destroy()
  }, [])

  return <div ref={container} className="w-full h-full"></div>
}



export const Navbar = () => {
  return (
    <header
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="fixed top-0 left-0 w-full z-50 transition-transform duration-500 -translate-y-full translate-y-0"
    >
      <nav
        className="flex flex-wrap items-center justify-between w-full h-auto md:h-[80px] px-6 md:px-12 py-4 bg-white shadow-sm"
        aria-label="Main navigation"
      >
        <div className="flex items-center font-sans">
          <a href="/" className="text-xl md:text-2xl font-semibold text-gray-800 ml-2 md:ml-4">
            burung
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0">
          <a
            href="/login"
            className="bg-white text-black font-semibold hover:text-neutral-500 transition"
            aria-label="Log in"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="p-2 md:p-3 text-white bg-neutral-800 hover:bg-neutral-700 font-semibold rounded-lg transition"
            aria-label="Sign Up"
          >
            Sign Up
          </a>
        </div>
      </nav>
      <hr className="border-slate-200" />
    </header>
  );
};


interface PropsBarangCard {
  nama: string;
  harga: number;
  deskripsi: string;
  brand: string;
  sku: string;
  stok: number;
  kategori: string;
  tanggal_dibuat: string;
  gambar: string;
  rating: number; 
}

interface Overview {
    rating: number;
    community: number;
    totalTransactions: number;
    monthlyActiveUsers?: number;
    supportedCategories?: number;
    countriesSupported?: number;
    revenue?: number;
    lastUpdated?: string;
	totalSellers: number;
    totalProducts: number;
}

const overviewDummy: Overview = {
    rating: 4.7,
    community: 120000,
    totalTransactions: 750000,
    monthlyActiveUsers: 95000,
    supportedCategories: 20,
    countriesSupported: 1,
    revenue: 12500000,
    lastUpdated: "2025-10-20T19:00:00Z",
	totalSellers: 5000,
    totalProducts: 150000
};



const data: PropsBarangCard[] = [{
  nama: "Sepatu Adidas Samba",
  harga: 1500000,
  deskripsi: "Sepatu Adidas klasik dengan desain retro dan bahan kulit premium.",
  brand: "Adidas",
  sku: "ADS-SAMBA-001",
  stok: 15,
  kategori: "Sepatu Pria",
  tanggal_dibuat: "2025-10-15",
  rating: 4.8,
  gambar: "data:image/jpeg;base64,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"
},
{
    nama: "Kaos Uniqlo Oversized",
    harga: 199000,
    deskripsi: "Kaos oversized berbahan katun lembut untuk tampilan kasual modern.",
    brand: "Uniqlo",
    sku: "UNQ-OVR-002",
    stok: 40,
    kategori: "Pakaian Pria",
    tanggal_dibuat: "2025-09-10",
    rating: 4.5,
    gambar: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/472520/item/goods_00_472520_3x4.jpg?width=600",
  },
  {
    nama: "Tas Ransel Eiger 25L",
    harga: 850000,
    deskripsi: "Tas ransel tangguh dengan kapasitas 25 liter untuk aktivitas outdoor.",
    brand: "Eiger",
    sku: "EGR-RNSL-003",
    stok: 12,
    kategori: "Peralatan Outdoor",
    tanggal_dibuat: "2025-08-25",
    rating: 4.7,
    gambar: "https://d1yutv2xslo29o.cloudfront.net/product/variant/photo/15024eb8-c6a9-44f8-9ab7-651341878b83.jpg",
  },
  {
    nama: "Jam Tangan Casio Vintage",
    harga: 650000,
    deskripsi: "Jam tangan digital retro dengan desain klasik dan tahan air.",
    brand: "Casio",
    sku: "CSI-VNTG-004",
    stok: 25,
    kategori: "Aksesoris",
    tanggal_dibuat: "2025-07-30",
    rating: 4.6,
    gambar: "https://img.ncrsport.com/img/storage/large/Mq-24-1Eldf-1.jpg",
  },
  {
    nama: "Headphone Sony WH-CH520",
    harga: 1250000,
    deskripsi: "Headphone dengan daya tahan baterai hingga 50 jam dan kualitas suara premium.",
    brand: "Sony",
    sku: "SNY-WHCH520-005",
    stok: 20,
    kategori: "Elektronik",
    tanggal_dibuat: "2025-10-05",
    rating: 4.9,
    gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMfym9Ony1noiv9eZ0zsPfPHHBNxH7J-95w&s",
  },
];

const CardBarang = ({data}: {data:PropsBarangCard}) => {
	return (
		<div className="bg-white overflow-y-auto grid grid-cols-[30%_70%] overflow-hidden">
		<div className="border-r border-slate-300 grid grid-rows-2">
			<div className="rounded-xl pt-5">
				<div className="w-full h-28 overflow-hidden rounded-lg"> {/* wadah dengan ukuran tetap */}
					<img
					src={data.gambar}
					alt={data.nama}
					className="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</div>


			{/* Ikon Aksi */}
			<div className="border-t border-slate-300 grid grid-rows-2 p-2">
			{[
				[<FaHeart className="group-hover:text-pink-500 transition-colors duration-200" />, <FaComment className="group-hover:text-sky-500 transition-colors duration-200" />],
				[<FaShare className="group-hover:text-green-500 transition-colors duration-200" />, <FaArchive className="group-hover:text-amber-600 transition-colors duration-200" />],
			].map((row, i) => (
				<div key={i} className="grid grid-cols-2">
				{row.map((icon, j) => (
					<div key={j} className="flex items-center justify-center text-center">
					<div className="group border border-slate-300 rounded-lg p-3 hover:shadow-sm transition">
						{icon}
					</div>
					</div>
				))}
				</div>
			))}
			</div>
		</div>

		<div className="grid grid-rows-[50%_50%] w-full">
			<div className="p-3 w-full">
			<div className="flex items-center text-neutral-600">
				<FaCircleDot />
				<span className="ml-2 text-neutral-800 font-medium">
				{data.brand} — {data.sku}
				</span>
			</div>

			<span className="block text-2xl font-bold text-neutral-900 font-sans mt-1">
				{data.nama}
			</span>

			<div className="flex items-center space-x-2 mt-1 mb-2">
				<FaBarcode />
				<span className="text-xl font-light text-neutral-800 font-sans">
				Rp.{data.harga}
				</span>
			</div>

			<span className="text-xs text-neutral-600 font-sans leading-snug">
				{data.deskripsi}
			</span>
			</div>

			{/* Detail Barang */}
			<div className="p-3 border-t border-slate-200 w-full">
				<div className="flex items-center gap-2 text-neutral-700 mb-3">
					<FaAudible className="text-lg" />
					<span className="text-base font-medium font-sans">Detail</span>
				</div>

				<div className="grid grid-rows-2 gap-3 text-neutral-700 font-sans">
					{/* Baris 1 */}
					<div className="grid grid-cols-2 gap-2">
					<div className="flex items-center gap-2">
						<FaChartBar className="text-neutral-500 text-sm" />
						<span className="text-sm font-medium">Stok: {data.stok}</span>
					</div>
					<div className="flex items-center gap-2">
						<FaStar className="text-yellow-400 text-sm" />
						<span className="text-sm font-medium">Rate: {data.rating}</span>
					</div>
					</div>

					{/* Baris 2 */}
					<div className="grid grid-cols-2 gap-2">
					<div className="flex items-center gap-2">
						<FaCalendarAlt className="text-neutral-500 text-sm" />
						<span className="text-sm font-medium">Rilis: {data.tanggal_dibuat}</span>
					</div>
					<div className="flex items-center gap-2">
						<FaMale className="text-sky-500 text-sm" />
						<span className="text-sm font-medium">Kategori: {data.kategori}</span>
					</div>
					</div>
				</div>
				<div className="mt-8  pt-4 text-neutral-400 text-xs text-center">
					&copy; 2025 Burung. All rights reserved.
				</div>
			</div>

		</div>
		</div>
	);
	};

	const CardOverview = ({data}: {data:Overview}) =>{
		return(
			<div className="grid grid-rows-3">
				<div className="grid grid-cols-3">
					
				</div>
				<div className="grid grid-cols-3">

				</div>
				<div className="grid grid-cols-3">

				</div>
			</div>
		) 
	}

export const Hero1 = () => {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="w-full min-h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 py-10 px-6 md:px-16 font-sans"
    >
      {/* Kolom kiri */}
      <div className="py-20 px-20 md:py-20 flex flex-col justify-center items-start text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-6xl text-neutral-800 leading-tight font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
            Jual Beli Jadi <br className="hidden md:block" />Gampang
          </h1>

          <h2 className="text-lg md:text-2xl text-neutral-500 font-medium mt-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Bersama Burung Temukan Barang
          </h2>
          <h2 className="text-lg md:text-2xl text-neutral-500 font-medium block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Incaranmu Dengan Usapan Jari
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 w-full md:w-auto">
          <button className="bg-neutral-800 text-neutral-100 px-4 md:px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition" aria-label="Bergabung">
            Bergabung
          </button>
          <button className="text-neutral-800 border border-slate-200 px-4 md:px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition" aria-label="Tentang Kami">
            Tentang Kami
          </button>
        </div>
      </div>

      {/* Kolom kanan */}
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <CardSwap cardDistance={70} verticalDistance={70} delay={5000} pauseOnHover={true}>
          <Card>
            <div className="grid grid-rows-[10%_90%] h-full w-full border border-slate-200 rounded-t-xl shadow-sm overflow-hidden">
              <header className="bg-neutral-50 border-b border-slate-200 flex items-center px-4">
                <span className="text-neutral-700 font-medium text-sm">Top Brands Product</span>
              </header>

              <div className="w-[500px] h-[200px]">
                <Swiper
                  modules={[FreeMode, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  freeMode={true}
                  loop={true}
                  speed={2000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  allowTouchMove={false}
                  className="mySwiper space-x-2"
                >
                  {data.map((val: PropsBarangCard, index: number) => (
                    <SwiperSlide key={index}>
                      <CardBarang data={val} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Card>

          <Card>
            <div className="grid grid-rows-[10%_90%] h-full w-full border border-slate-200 rounded-t-xl shadow-sm overflow-hidden">
              <header className="bg-neutral-50 border-b border-slate-200 flex items-center px-4">
                <span className="text-neutral-700 font-medium text-sm tracking-wide">Our Services</span>
              </header>

              <div className="grid grid-cols-[40%_60%] gap-4 p-4 w-full h-full">
                <div className="text-xs font-sans text-neutral-600 leading-relaxed">
                  <p>
                    Kami selalu siap sedia 24 jam untuk mendengarkan setiap kebutuhan dan keluhan Anda.
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1">
                    <li>Hubungi tim <strong>Client Service</strong> jika Anda mengalami kendala.</li>
                    <li>Layanan kami <strong>gratis tanpa pungutan biaya</strong> — laporkan bila ada pelanggaran.</li>
                    <li>Kenyamanan dan kepercayaan Anda adalah prioritas utama kami.</li>
                    <li>Jangan ragu untuk menghubungi kami kapan pun Anda membutuhkan bantuan.</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-4 grid grid-rows-[65%_35%]">
                  <div className="flex items-start justify-start">
                    <LottieAnimation animasi={csAnimation} />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium font-sans text-neutral-700 tracking-wide">
                      Tim <span className="text-sky-600 font-semibold">Client Services</span> Burung
                    </p>
                    <p className="text-[10.5px] font-sans text-neutral-500 mt-1">
                      <strong>2025</strong> — Membangun pengalaman terbaik untuk klien
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="grid grid-rows-[10%_90%] h-full w-full border border-slate-200 rounded-t-xl shadow-sm overflow-hidden">
              <header className="bg-neutral-50 border-b border-slate-200 flex items-center px-4">
                <span className="text-neutral-700 font-medium text-sm">Overview</span>
              </header>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};


export const Hero2 = () => {
  return (
    <section
      aria-label="Our Points"
      className="mt-10 h-screen w-full items-left px-36 py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <p className="text-neutral-500 font-medium text-xl font-sans">Our Points</p>

      <h2 className="mt-8 text-neutral-800 font-semibold text-5xl font-sans">
        Platform e-commerce untuk semua kebutuhanmu.
      </h2>

      <p className="mt-8 text-lg font-medium text-neutral-500">
        Di Burung, kami percaya pengalaman belanja online seharusnya sederhana. Kamu cukup mencari produk yang dibutuhkan, menambahkannya ke keranjang, dan menyelesaikan pembayaran dengan aman. Tidak ada langkah yang rumit, tidak ada iklan yang mengganggu. Semua dirancang agar kamu bisa fokus pada apa yang penting — menemukan produk dengan cepat, membandingkan harga dengan jelas, dan menerima barang tepat waktu. Burung dibuat untuk memudahkan, bukan membingungkan.
      </p>

      <div className="flex justify-end mt-8">
        <button
          className="border text-neutral-500 font-medium border-slate-200 rounded-xl p-3 hover:bg-slate-50 transition"
          aria-label="Yang Kami Tawarkan"
        >
          Yang Kami Tawarkan
        </button>
      </div>
    </section>
  );
};


export const Hero3 = () => {
	return (
		<div className="grid grid-rows-2 gap-16 px-8 md:px-24 py-16 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
			{/* === Row 1 === */}
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Kiri */}
				<div className="space-y-6">
					<h2 className="text-neutral-800 text-3xl font-sans font-medium">UI Clean Super Cepat</h2>

					<p className="text-neutral-500 text-lg font-semibold">Kami tidak bertele-tele dengan animasi berat dan verbose.</p>

					<div className="space-y-4">
						<p className="text-neutral-500 text-lg font-medium leading-relaxed">
							<span className="font-normal text-neutral-500">– UI Pilihan Barang Simple</span>
							<br />Menampilkan produk dengan jelas, mudah dicari, dan cepat dipilih.
						</p>

						<p className="text-neutral-500 text-lg font-medium leading-relaxed">
							<span className="font-normal text-neutral-500">– UI Penjual Simple</span>
							<br />Informasi penjual tersaji rapi, sehingga kamu tahu dari siapa membeli tanpa kebingungan.
						</p>

						<p className="text-neutral-500 text-lg font-medium leading-relaxed">
							<span className="font-normal text-neutral-500">– UI Pengiriman & Engagement</span>
							<br />Status pengiriman dan interaksi dengan penjual mudah diikuti, semua transparan.
						</p>
					</div>

					<button className="bg-neutral-800 text-neutral-100 px-4 md:px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition"
					onClick={() =>{
						console.log("dipencet lanjutnyo")
					}}>Lanjut</button>
				</div>

				{/* Kanan */}
				<div className="flex justify-center items-center">
					<div className="border border-slate-200 rounded-xl w-full max-w-[800px] h-[400px] bg-white shadow-sm overflow-hidden">
						<div className="h-[40px] flex items-center px-4 border-b border-slate-200 bg-slate-50">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-red-400"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
								<div className="w-3 h-3 rounded-full bg-green-400"></div>
							</div>
						</div>

						<div className="flex justify-center items-center h-full w-full p-4">
							<LottieAnimation animasi={uiClean} />
						</div>
					</div>
				</div>
			</div>

			{/* === Row 2 === */}
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Kiri */}
				<div className="flex justify-center items-center">
					<div className="border border-slate-200 rounded-xl w-full max-w-[800px] h-[400px] bg-white shadow-sm overflow-hidden">
						<div className="h-[40px] flex items-center px-4 border-b border-slate-200 bg-slate-50">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-red-400"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
								<div className="w-3 h-3 rounded-full bg-green-400"></div>
							</div>
						</div>

						<div className="flex justify-center items-center h-full w-full p-4">
							<LottieAnimation animasi={tanpaDataVerbose} />
						</div>
					</div>
				</div>

				{/* Kanan */}
				<div className="space-y-6">
					<h2 className="text-neutral-800 text-3xl font-sans font-medium">Tanpa Data Verbose</h2>

					<p className="text-neutral-500 text-lg font-medium">Kami menyajikan data cepat, aktual, dan ringkas, sehingga setiap keputusan belanja kamu jadi mudah dan tepat.</p>

					<div className="space-y-4">
						<p className="text-neutral-500 text-lg font-medium leading-relaxed"><span className="font-normal text-neutral-500">– Data Produk Ringkas</span><br />Harga, stok, dan detail penting langsung terlihat tanpa harus scroll panjang.</p>
						<p className="text-neutral-500 text-lg font-medium leading-relaxed"><span className="font-normal text-neutral-500">– Data Penjual Jelas</span><br />Informasi penjual dan reputasi mudah dipahami, langsung bisa jadi pertimbangan.</p>
						<p className="text-neutral-500 text-lg font-medium leading-relaxed"><span className="font-normal text-neutral-500">– Data Pengiriman Tersaji</span><br />Status, estimasi waktu, dan riwayat pengiriman terlihat sekilas, cepat dimengerti.</p>
						<p className="text-neutral-500 text-lg font-medium leading-relaxed"><span className="font-normal text-neutral-500">– Data Engagement & Feedback</span><br />Ulasan dan rating pengguna ditampilkan simpel agar cepat dapat gambaran kualitas.</p>
					</div>

					<div className="flex justify-end mt-6">
						<button className="bg-neutral-800 text-neutral-100 px-4 md:px-6 py-3 rounded-lg font-medium hover:bg-neutral-700 transition">Lanjut</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Hero4 = () => {
	return (
		<div style={{ fontFamily: "'Inter', sans-serif" }} className="w-full px-6 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-sans">
			{/* Kiri */}
			<div className="text-3xl md:text-5xl font-bold text-neutral-800 text-center" >
				<h2 className="leading-tight font-sans">
					Langkah Nya Cukup Mudah
				</h2>
			</div>

			{/* Kanan */}
			<div className="grid grid-rows-3 gap-6">
				{/* Step 1 */}
				{/* Step 1 */}
				<div className="bg-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition" style={{ fontFamily: "'Inter', sans-serif" }}>
				<div className="flex items-center text-xl mb-2 text-neutral-800 font-medium gap-2">
					<FaCircle className="text-neutral-600" /> Login One Tap
				</div>
				<p className="text-lg font-light text-neutral-400">
					Burung menyediakan login one tap auth tanpa muluk-muluk — ribet masukin kredensial kamu deh.
				</p>
				</div>

				{/* Step 2 */}
				<div className="bg-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition" style={{ fontFamily: "'Inter', sans-serif" }}>
				<div className="flex items-center text-xl mb-2 text-neutral-800 font-medium gap-2">
					<FaTriangleExclamation className="text-neutral-600" /> Cari Barang
				</div>
				<p className="text-lg text-neutral-400 font-normal">
					Burung menerapkan persortiran yang sesuai selera kamu banget.
				</p>
				</div>

				{/* Step 3 */}
				<div className="bg-neutral-200 p-6 rounded-xl shadow-sm hover:shadow-md transition" style={{ fontFamily: "'Inter', sans-serif" }}>
				<div className="flex items-center text-xl mb-2 text-neutral-800 font-medium gap-2">
					<FaTrophy className="text-neutral-600" /> Beli Deh
				</div>
				<p className="text-lg text-neutral-400 font-normal">
					Gausah repot mikirin barang nyampe gimana — semua Burung yang handle.
				</p>
				</div>

			</div>
		</div>
	);
};

const dataDummy = [{
  name: "Faiz",
  profile: <FaCircleDot/>,
  description: "orangbiasa",
  comment: "Mantap Banget le aplikasi nya"
},
{
  name: "Faizan",
  profile:<FaCircleDot/>,
  description:"mantap",
  comment: "mantapnyo oi"
},
{
  name: "Faiz",
  profile: <FaCircleDot/>,
  description: "orangbiasa",
  comment: "Mantap Banget le aplikasi nya"
},
{
  name: "Faizan",
  profile:<FaCircleDot/>,
  description:"mantap",
  comment: "mantapnyo oi"
},
{
  name: "Faiz",
  profile: <FaCircleDot/>,
  description: "orangbiasa",
  comment: "Mantap Banget le aplikasi nya"
},
{
  name: "Faizan",
  profile:<FaCircleDot/>,
  description:"mantap",
  comment: "mantapnyo oi"
},
{
  name: "Faiz",
  profile: <FaCircleDot/>,
  description: "orangbiasa",
  comment: "Mantap Banget le aplikasi nya"
},
{
  name: "Faizan",
  profile:<FaCircleDot/>,
  description:"mantap",
  comment: "mantapnyo oi"
}
]


export const Hero5 = () => {
	return (
		<div style={{ fontFamily: "'Inter', sans-serif" }} className="px-30 py-10 mt-20">
			<div className="text-center">
				<h1 className="text-neutral-800 text-5xl font-bold font-sans">"Keep it simple. Fly fast."</h1>
				<br />
				<span className="text-neutral-400 text-lg">Filosofi kami</span>
			</div>

			<div className="mt-8">
				<span className="text-4xl font-bold font-sans text-neutral-800 mt-5 mb-2">Testimoni</span>
				<br />
                <br />
				<span className="text-neutral-500 text-lg">Ini yang mereka bilang soal burung</span>
				<div className="mt-10">
                    <ComentLoop data={dataDummy}/>
                </div>
				<div className="text-center text-neutral-500 font-medium">
					<span>Our Contributor</span>
				</div>
				<div className="mt-10">
                    <LogoLoop logos={imageLogos}
                     speed={120}
                    direction="right"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"/>
                </div>
			</div>
		</div>
	);
};


interface ComentarLoop {
	name: string | null;
	profile: JSX.Element | null;
	description: string | null;
	comment: string | null;
}

const ComentLoop = ({ data }: { data: ComentarLoop[] }) => {
	const [dipencet, setDipencet] = useState<ComentarLoop>({ name: "", profile: null, description: "", comment: "" });

	function Yangdipencet({ name, profile, description, comment }: ComentarLoop): void {
		setDipencet({ name, profile, description, comment });
	}

	useEffect(() => {
		console.log("Komentar yang dipencet:", dipencet);
	}, [dipencet]);

	return (
		<div style={{ fontFamily: "'Inter', sans-serif" }} className="w-full py-10 space-x-2">
			<Swiper
			modules={[FreeMode, Autoplay]}
			spaceBetween={20}
			slidesPerView={5}
			freeMode={true}             // bisa digeser bebas
			loop={true}                 // loop terus
			speed={2000}                 // kecepatan animasi geser (ms)
			autoplay={{
				delay: 0,                 // tanpa jeda
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			}}
			allowTouchMove={false}       // nonaktifkan drag manual
			className="mySwiper space-x-4"
			>
			{data.map((komen, i) => (
				<SwiperSlide key={i}>
				<CardComentar komen={komen} dipencet={Yangdipencet} />
				</SwiperSlide>
			))}
			</Swiper>
		</div>
	);
};

interface CommentEl {
	komen: ComentarLoop;
	dipencet: ({ name, profile, description, comment }: ComentarLoop) => void;
}

const CardComentar = ({ komen, dipencet }: CommentEl) => {
	if (komen.profile != null && komen.name != null) {
		return (
			<div
				style={{ fontFamily: "'Inter', sans-serif", width: "300px", height: "280px" }}
				className="grid grid-rows-2 p-4 border border-gray-200 rounded-xl shadow-sm hover:bg-neutral-50 cursor-pointer transition-transform hover:-translate-y-1"
				onClick={() => dipencet(komen)}
				>
				{/* Komentar */}
				<div className="font-light text-lg text-neutral-800 overflow-hidden p-6">
					<span>{komen.comment}</span>
				</div>

				{/* Profil dan info */}
				<div className="grid grid-cols-[30%_70%] items-center mt-2">
					<div className="flex justify-center items-start">
					{komen.profile}
					</div>
					<div className="grid grid-rows-2 gap-1">
					<div>
						<span className="text-neutral-800 font-semibold text-lg font-sans">
						{komen.name}
						</span>
					</div>
					<div>
						<span className="text-neutral-400 text-sm">
						{komen.description}
						</span>
					</div>
					</div>
				</div>
				</div>

		);
	}
	return <div className="text-gray-400 italic">Lengkapi data yang dimasukkan</div>;
};

export const Heroes = () => {
  const heroRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Masuk viewport
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "-translate-y-10");
        } else {
          // Keluar viewport
          entry.target.classList.remove("opacity-100", "translate-y-0");
          entry.target.classList.add("opacity-0", "-translate-y-10");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  heroRefs.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <>
      <div
        ref={(el) => {
			if (el != null){
				heroRefs.current[0] = el
			}
		}}
        id="hero1"
        className="opacity-0 translate-y-10 transition-all duration-500"
      >
        <Hero1 />
      </div>

      <div
        ref={(el) => {
			if (el != null){
				(heroRefs.current[1] = el)
			}
		}}
        id="hero2"
        className="opacity-0 translate-y-10 transition-all duration-500"
      >
        <Hero2 />
      </div>

      <div
        ref={(el) => {
			if (el != null){
				(heroRefs.current[2] = el)
			}
		}}
        id="hero3"
        className="opacity-0 translate-y-10 transition-all duration-500"
      >
        <Hero3 />
      </div>

      <div
        ref={(el) => {
			if (el != null){
				(heroRefs.current[3] = el)
			}
		}}
        id="hero4"
        className="opacity-0 translate-y-10 transition-all duration-500"
      >
        <Hero4 />
      </div>

      <div
        ref={(el) => {
			if (el != null){
				(heroRefs.current[4] = el)
			}
		}}
        id="hero5"
        className="opacity-0 translate-y-10 transition-all duration-500"
      >
        <Hero5 />
      </div>
    </>
  )
}


export const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-800 px-16 py-10 font-sans mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Kiri: Logo & Deskripsi */}
        <div className="space-y-4">
          <div>
            <a href="/" className="text-2xl font-semibold font-sans">
              Burung 2025
            </a>
            <p className="text-neutral-500 text-sm mt-1">
              Temukan produk yang kamu cari, bandingkan dengan mudah, dan dapatkan tanpa drama.
            </p>
          </div>
          <div className="flex space-x-3 text-base text-neutral-500">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition-colors cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-blue-600 transition-colors cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-blue-400 transition-colors cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Kanan: Links */}
		<nav
  className="grid grid-cols-3 gap-8 text-sm text-neutral-500"
  aria-label="Footer Navigation"
>
  <div>
    <h3 className="text-base font-medium mb-2 text-neutral-800">Features</h3>
    <ul className="space-y-1">
      <li><a href="/features/core" className="hover:underline">Core features</a></li>
      <li><a href="/features/pro" className="hover:underline">Pro experience</a></li>
      <li><a href="/features/integrations" className="hover:underline">Integrations</a></li>
    </ul>
  </div>

  <div>
    <h3 className="text-base font-medium mb-2 text-neutral-800">Learn more</h3>
    <ul className="space-y-1">
      <li><a href="/blog" className="hover:underline">Blog</a></li>
      <li><a href="/case-studies" className="hover:underline">Case studies</a></li>
      <li><a href="/customers" className="hover:underline">Customer stories</a></li>
      <li><a href="/best-practices" className="hover:underline">Best practices</a></li>
    </ul>
  </div>

  <div>
    <h3 className="text-base font-medium mb-2 text-neutral-800">Support</h3>
    <ul className="space-y-1">
      <li><a href="/contact" className="hover:underline">Contact</a></li>
      <li><a href="/support" className="hover:underline">Support</a></li>
      <li><a href="/legal" className="hover:underline">Legal</a></li>
    </ul>
  </div>
</nav>

      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-neutral-200 pt-4 text-neutral-400 text-xs text-center">
        &copy; 2025 Burung. All rights reserved.
      </div>
    </footer>
  );
};
