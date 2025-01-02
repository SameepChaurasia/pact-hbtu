import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { HiDownload } from "react-icons/hi";

export default function PactMembership() {
  const images = ["/pactmembershipform1.png","/pactmembershipform2.png","/pactmembershipform3.png","/pactmembershipform4.png"];
  const imagesmembers = [ "/members1.png","/members2.png","/members3.png","/members4.png","/members5.png","/members6.png","/members7.png","/members8.png","/members9.png","/members10.png","/members11.png","/members12.png","/members13.png","/members14.png","/members15.png","/members16.png","/members17.png","/members18.png","/members19.png","/members20.png","/members21.png","/members22.png","/members23.png","/members24.png","/members25.png","/members26.png","/members27.png","/members28.png","/members29.png" ];
  const sponsorshipimages = ["/sponsorship1.png", "/sponsorship1.png"];

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 ">

          <div className="pt-5 pl-5">
            <a className="font-serif font-bold text-3xl underline decoration-emerald-800">Membership Form⇒ </a>
          </div>
          <div className='text-center'>
          <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {images.map((images, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={images}
                                alt={`slide-${index + 1}`}
                                className='w-[500px] h-[700px] mx-auto select-none'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper><br/>
          <button>
          <a className="group bg-slate-600 text-white px-16 py-3 flex items-center gap-2 rounded-full outline outline-offset-2 outline-cyan-500 focus:scale-400 hover:text-cyan-300 active:scale-400 transition cursor-pointer borderBlack dark:bg-slate-600 text-xl font-serif"
                href="/MembershipForm.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a></button>
          </div>


          <div className="pt-5 pl-5">
            <a className="font-serif font-bold text-3xl underline decoration-emerald-800">PACT Member’s List⇒ </a>
          </div>
          <div className='text-center'>
          <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {imagesmembers.map((imagesmembers, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={imagesmembers}
                                alt={`slide-${index + 1}`}
                                className='w-[500px] h-[700px] mx-auto select-none'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper><br/>
          <button>
          <a className="group bg-slate-600 text-white px-16 py-3 flex items-center gap-2 rounded-full outline outline-offset-2 outline-cyan-500 focus:scale-400 hover:text-cyan-300 active:scale-400 transition cursor-pointer borderBlack dark:bg-slate-600 text-xl font-serif"
                href="/PactMembers.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a></button>
          </div>

          <div className="pt-5 pl-5">
            <a className="font-serif font-bold text-3xl underline decoration-emerald-800">Sponsorship and Registration amount with form
            ⇒ </a>
          </div>
          <div className='text-center'>
          <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
                {sponsorshipimages.map((sponsorshipimages, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={sponsorshipimages}
                                alt={`slide-${index + 1}`}
                                className='w-[500px] h-[700px] mx-auto select-none'
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper><br/>
          <button>
          <a className="group bg-slate-600 text-white px-16 py-3 flex items-center gap-2 rounded-full outline outline-offset-2 outline-cyan-500 focus:scale-400 hover:text-cyan-300 active:scale-400 transition cursor-pointer borderBlack dark:bg-slate-600 text-xl font-serif"
                href="/Sponsorship.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a></button>
          </div>



      
      </div>
  )
}
