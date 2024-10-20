import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFlip } from 'swiper/modules';


import 'swiper/swiper-bundle.css';

const BannerSlider = () => {
    return (
        <div className='mx-6 my-14 border-2 border-white shadow-xl shadow-[rgba(37,37,37,0.87)] '>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
                spaceBetween={50}
                slidesPerView={1}
                effect="flip"
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                
                
                <SwiperSlide>
                    <img src="https://i.ibb.co/CQvLWBP/71t-BSs-Zgw1-L-AC-SL1500.png" alt="" className='w-full h-[90vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JrcT4TX/banner3.jpg" alt="" className='w-full h-[90vh]' />
                </SwiperSlide>
                <SwiperSlide className='h-1/2'>
                    <img src="https://i.ibb.co/7ngDQ39/banner2.jpg" alt="" className='w-full h-[90vh]' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;