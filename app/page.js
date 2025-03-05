import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";
import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image'
import Footer from "@/components/Footer";
import Swiper from "@/components/Swiper";

export default function Home() {

  const sliderImages1 = [
    "/images/slide 1.png",
    "/images/slide 2.png",
    "/images/slide 3.png",
    "/images/slide 4.png",
  ];

  const sliderImages2 = [
    "/images/slide 5.png",
    "/images/slide 6.png",
    "/images/slide 7.png",
    "/images/slide 8.png",
  ];

  return (
    < >
      <div
        className="relative h-[876px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Banner.png')" }}
      >
        <NavBar className="relative z-10" />

        <div className="mt-12 mx-5">
          <SearchBar />
        </div>

        <div className="flex flex-col justify-start text-white text-center max-w-xl mx-5 space-y-4 mt-24">
          <h1 className="text-left text-[40px] font-bold max-w-[290px] leading-[48px]">
            Elevate Your Events with Exceptional Catering
          </h1>
          <p className="mt-5 text-left text-[16px] md:text-[16px] font-normal leading-[24px] max-w-[22rem]">
            Experience the perfect blend of flavor and elegance with our catering services
            tailored for any occasion. Let us handle the details while you enjoy unforgettable
            moments with your guests.
          </p>
          <div className="flex space-x-[8px] text-[16px] font-normal mt-6">
            <button className="w-[135px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
              Get Started
            </button>
            <button className="w-[132px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <section
        className="relative h-[424px] px-[20px] gap-[48px] bg-cover bg-center bg-no-repeat text-white pt-16"
        style={{ backgroundImage: "url('/images/about.png')" }}
      >
        <span className="font-semibold text-[16px]">Delicious</span>
        <h1 className="text-left text-[40px] font-bold max-w-[290px] leading-[48px] mt-3">
          Catering Made Easy
        </h1>
        <p className="mt-5 text-left text-[16px] md:text-[16px] font-normal leading-[24px] max-w-[22rem]">
          Experience exceptional catering and event management tailored to your unique needs and
          preferences.
        </p>
        <div className="flex space-x-[8px] text-[16px] font-normal mt-6">
          <button className="w-[101px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
            Explore
          </button>
          <button className="w-[101px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
            Contact
          </button>
        </div>
      </section>

      <section className="bg-[#D7E5D8] h-[851px] py-[64px] px-[20px] flex flex-col">
        <h2 className="font-bold text-2xl max-w-[334px]">
          Our Journey: Crafting Memorable Experiences Together
        </h2>
        <p className="pt-5 text-left text-[16px] md:text-[16px] font-normal leading-[24px] max-w-[21rem]">
          Welcome to Muhabath Caters, Kerala's premier wedding catering experts. With over 22 years
          of excellence, we craft unforgettable wedding experiences that exceed your expectations.
        </p>
        <div className="flex space-x-[24px] text-[16px] font-normal mt-6 mb-12">
          <button className="bg-white w-[134px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
          Learn More
          </button>
          <button className="flex items-center gap-2 w-[101px]">
            Contact
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
        <Swiper images={sliderImages1} />
      </section>
      <section className="h-[825px] px-[20px] bg-white text-black py-16 ">
      <span className="font-semibold text-[16px] pb-3">Expertise</span>
      <h2 className="font-bold text-2xl max-w-[334px]">
        Seamless Event Management Tailored for You
        </h2>
        <p className="pt-5 text-left text-[16px] md:text-[16px] font-normal leading-[24px] max-w-[21rem]">
        Our professional event management service ensures every detail is meticulously planned and executed. From intimate gatherings to grand celebrations, we bring your vision to life with precision and creativity.
        </p>
        <div className="flex space-x-[24px] text-[16px] font-normal mt-6 mb-12">
          <button className="bg-white w-[145px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
          Explore More
          </button>
          <button className="flex items-center gap-2 w-[101px]">
          Call Us
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
        <Swiper images={sliderImages2} />
      </section>
      <section className="flex flex-col items-center justify-center h-[1055px] px-[20px] bg-[#FAD1D3] text-black pt-16 text-center">
      <h2 className="font-bold text-2xl ">
      Customer Testimonials
        </h2>
        <p className="pt-5 pb-12 text-center text-[16px] font-normal leading-[24px]">
        See what our clients are saying about us!
        </p>
        <span> <Image
      src="/images/Stars.png"
      width={116}
      height={19}
      alt="stars"
    /></span>
    <h3 className="font-bold text-[18px] leading-[25.2px] py-6 max-w-[335]">
  "The service was exceptional and exceeded our expectations!"
</h3>
<span><Image
      src="/images/Avatar1.png"
      width={56}
      height={56}
      alt="Avatar"
    /></span>
    <p className="font-semibold text-base pt-4">Jane Doe</p>
    <p className="font-normal text-base pb-12">Event Planner, ABC Corp</p>

    <span> <Image
      src="/images/Stars.png"
      width={116}
      height={19}
      alt="stars"
    /></span>
    <h3 className="font-bold text-[18px] leading-[25.2px] py-6 max-w-[335]">
    "A seamless experience from start to finish!"
</h3>
<span><Image
      src="/images/Avatar2.png"
      width={56}
      height={56}
      alt="Avatar"
    /></span>
    <p className="font-semibold text-base pt-4">Emily Johnson</p>
    <p className="font-normal text-base pb-12">CEO, XYZ Ltd</p>
     
    <span> <Image
      src="/images/Stars.png"
      width={116}
      height={19}
      alt="stars"
    /></span>
    <h3 className="font-bold text-[18px] leading-[25.2px] py-6 max-w-[335]">
    "Highly recommend for any event needs!"
</h3>
<span><Image
      src="/images/Avatar3.png"
      width={56}
      height={56}
      alt="Avatar"
    /></span>
    <p className="font-semibold text-base pt-4">John Smith</p>
    <p className="font-normal text-base pb-12">CEO, XYZ Ltd</p>
    </section>
    <section className="bg-[#D7E5D8] py-16 px-5
">
    <h2 className="font-bold text-2xl ">
      Plan Your Perfect Event Today
      </h2>
      <p className="mt-5 text-left text-[16px] md:text-[16px] font-normal leading-[24px] max-w-[22rem]">
        Ready to elevate your next gathering? Book a consultation to discover how we can bring your vision to life.
        </p>
        <div className="flex space-x-[8px] text-[16px] font-normal mt-6">
          <button className="w-[115px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
          Call Now
          </button>
          <button className="w-[101px] h-[48px] rounded-[24px] border-[0.5px] py-[12px] px-[24px]">
           Explore
          </button>
        </div>
      </section>
      <Footer/>
    </>
  );
}
