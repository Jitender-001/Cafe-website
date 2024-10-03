import React from 'react';
import Slider from 'react-slick';

import { MdCottage, MdUpcoming } from "react-icons/md";
import { FaPeopleGroup, FaBowlFood,FaLocationDot } from "react-icons/fa6";
import { GiModernCity, GiMaterialsScience } from "react-icons/gi";
import { RiUserHeartFill } from "react-icons/ri";


import Locations from './locations';
import Reviews from './Reviews';


const Home = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidersToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidersToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },

            {
                breakpoint: 640,
                settings: {
                    slidersToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <>
            <div className="home mt-8 sm:mt-28">

                {/* slider section or Hero section*/}
                <div className="contianer w-full h-32 flex justify-center items-center sm:h-full px-2">
                    <div className="hero w-full h-full rounded-lg">
                        <Slider {...settings} className='h-full'>
                            <div className="slider slider-1 w-full h-fit shadow-[0_3px_3px_1px_rgba(0,0,0,0.3)] rounded-lg">
                                <img src="/images/slider1.jpg" alt="slider1" className='w-full h-max object-cover  rounded-lg ' />
                            </div>

                            <div className="slider slider-1 w-full shadow-[0_3px_3px_1px_rgba(0,0,0,0.3)] rounded-lg">
                                <img src="/images/slider2.jpg" alt="slider2" className='w-full object-cover h-full rounded-lg' />
                            </div>

                            <div className="slider slider-1 w-full shadow-[0_3px_3px_1px_rgba(0,0,0,0.3)] rounded-lg">
                                <img src="/images/slider3.jpg" alt="slider2" className='w-full object-cover h-[500px] rounded-lg' />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="container border-2 py-3 px-2 sm:px-24 w-full">

                    {/* outlets and employees */}

                    <div className="outlet max-w-full">
                        <h2 className='text-center text-5xl font-bold mt-12 text-[#E8E6E3] font-merienda text-wrap'>With Your <u className='text-[#906116]'>Love</u> & Support</h2>

                        <div className="kb-details w-full flex flex-col sm:flex-row flex-wrap  mb-4">

                            <div className="box1 w-full sm:w-1/4 border-1 flex flex-col justify-center items-center text-[#6cc5a1] font-merienda gap-2 mt-12 bg-[#622627] p-5">
                                <span className='text-8xl text-[#906116]'><MdCottage /></span>
                                <h1 className='text-4xl'>3+</h1>
                                <p className='text-2xl'>Outlets</p>
                            </div>

                            <div className="box1 w-full sm:w-1/4 border-1 flex flex-col justify-center items-center text-[#6cc5a1] font-merienda gap-2 mt-12 bg-[#906116] p-5">
                                <span className='text-8xl text-[#622627]'><GiModernCity /></span>
                                <h1 className='text-4xl'>4+</h1>
                                <p className='text-2xl'>Cities</p>
                            </div>

                            <div className="box1 w-full sm:w-1/4 border-1 flex flex-col justify-center items-center text-[#6cc5a1] font-merienda gap-2 mt-12 bg-[#622627] p-5">
                                <span className='text-8xl text-[#906116]'><MdUpcoming /></span>
                                <h1 className='text-4xl'>5+</h1>
                                <p className='text-2xl'>Upcomings</p>
                            </div>

                            <div className="box1 w-full sm:w-1/4 border-1 flex flex-col justify-center items-center text-[#6cc5a1] font-merienda gap-2 mt-12 bg-[#906116] p-5">
                                <span className='text-8xl text-[#622627]'><FaPeopleGroup /></span>
                                <h1 className='text-4xl'>50+</h1>
                                <p className='text-2xl'>Employees</p>
                            </div>

                        </div>
                    </div>
                    <hr className='mt-16 text-[#906116]' />
                    {/* Our journey */}

                    <div className="journey flex items-center">
                        <div className='bg-[#44140D] px-2 sm:px-20 py-8 mt-16 w-full sm:w-8/12 flex flex-col gap-5 justify-center'>
                            <h2 className='text-4xl font-bold text-[#F6F7F8] tracking-wide font-merienda'>KB Cafe Welcomes You</h2>

                            <p className='text-md font-extralight text-[#c0671a] tracking-wide leading-8 text-wrap font-merienda'>Welcome to our charming KB Cafe, ideally nestled on the picturesque route from Himachal to Manali. Our cafe is a haven of comfort with first-rate amenities, delicious food, and a cozy, welcoming atmosphere. Take a moment to relax and enjoy our delectable drinks while admiring the breathtaking mountain vistas. Our menu has been carefully designed to entice your taste senses, whether you're in the mood for a hearty lunch or a light snack. Indulge in the tranquility of the mountains and the welcoming ambiance of our cafe to make your trip into an unforgettable getaway. Come see us and let our wonderful views and gracious hospitality revitalize your soul.</p>
                        </div>

                        <div className="cafe-pic w-1/4 hidden sm:h-40 sm:block border-2 -ml-12">
                            <img src="/images/kbCafe.jpg" alt="img" className='w-full h-full ' />
                        </div>

                    </div>

                    <hr className='my-24 text-[#906116]' />

                    {/* Our Foods */}

                    <div className="food mt-24">
                        <h2 className='text-4xl font-bold text-[#E8E6E3] font-merienda text-center my-12'>Our Delicious <u className='text-[#906116]'>Foods</u></h2>

                        <div className="food-items flex gap-[2%] my-20">
                            <div className="item w-[32%] rounded-full">
                                <img src="/images/food1.jpg" alt="images" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="item w-[32%] rounded-full">
                                <img src="/images/food2.jpg" alt="images" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="item w-[32%] rounded-full">
                                <img src="/images/food3.jpg" alt="images" className='w-full h-full object-cover rounded-full' />
                            </div>
                        </div>
                    </div>

                    <hr className='my-24 text-[#906116]' />

                    <div className="commitment my-12">
                        <h2 className='text-center my-12 text-4xl font-bold font-merienda text-[#E8E6E3]'>Why <u className='text-[#906116]'>KB</u> Cafe?</h2>

                        <div className="moto flex gap-3 w-full">
                            <div className="quality w-[32%] p-5 bg-[#906116] flex flex-col justify-center items-center gap-3 rounded-r-xl">
                                <p className='text-5xl text-[#471E19]'><FaBowlFood /></p>
                                <h4 className='text-2xl font-bold text-[#E8E7E3] font-cursive'>Our Quality</h4>
                                <p className='leading-7 tracking-wide text-sm text-[#f6f7f7] font-merienda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic doloremque neque eligendi asperiores! Rerum suscipit natus, architecto delectus voluptate nostrum sequi molestiae, id quisquam mollitia magnam, blanditiis sit modi!</p>
                            </div>

                            <div className="quality w-[32%] p-5 bg-[#906116] flex flex-col justify-center items-center gap-3 rounded-r-xl">
                                <p className='text-5xl text-[#471E19]'><RiUserHeartFill /></p>
                                <h4 className='text-2xl font-bold text-[#E8E7E3] font-cursive'>Customer Satisfaction</h4>
                                <p className='leading-7 tracking-wide text-sm text-[#f6f7f7] font-merienda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic doloremque neque eligendi asperiores! Rerum suscipit natus, architecto delectus voluptate nostrum sequi molestiae, id quisquam mollitia magnam, blanditiis sit modi!</p>
                            </div>

                            <div className="quality w-[32%] p-5 bg-[#906116] flex flex-col justify-center items-center gap-3 rounded-r-xl">
                                <p className='text-5xl text-[#471E19]'><GiMaterialsScience /></p>
                                <h4 className='text-2xl font-bold text-[#E8E7E3] font-cursive'>Tradition & Innovation</h4>
                                <p className='leading-7 tracking-wide text-sm text-[#f6f7f7] font-merienda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic doloremque neque eligendi asperiores! Rerum suscipit natus, architecto delectus voluptate nostrum sequi molestiae, id quisquam mollitia magnam, blanditiis sit modi!</p>
                            </div>
                        </div>
                    </div>

                    <hr className='my-24 text-[#906116]' />

                    {/* outlets section */}

                    <div className="location">
                        <h1 className='text-4xl font-cursive font-bold underline text-[#E8E6E3] text-center'>Our <b className='text-[#906116]'>Locations</b></h1>
                        <p className='text-2xl text-center mt-6 font-merienda text-[#906116] font-bold'>THE KB CAFE OUTLETS</p>

                        <div className='flex gap-3 w-full my-20 justify-between'>
                            {
                                Locations.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#44140D] w-[30%] shadow-[1px_1px_1px_1px] shadow-cyan-500/50 rounded-lg'>
                                            <div className="img w-full h-[70%]">
                                                <img src={item.image} alt="image" className='w-full h-full object-cover'/>
                                            </div>

                                            <p className='ml-3 text-3xl font-merienda font-bold text-[#E8E6E3] mt-8'>{item.name}</p>
                                            <p className='text-md w-[95%] flex gap-2 items-center pl-5 py-1 text-wrap font-merienda text-[#D5D6D7] my-2'><i><FaLocationDot /></i>  {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <hr className='my-24 text-[#906116]' />

                    <div className="reviews">
                        <h2 className='text-4xl my-24 text-center font-cursive text-[#E8E6E3] font-bold'>Our <u className='text-[#906116]'>Happy</u> Customers</h2>
                        <div className='border-2'>
                            
                            <Slider {...settings}>
                                {
                                    Reviews.map((review,index)=>{
                                        return(
                                            <div key={index} className="box w-1/4 h-[10rem] border-2">
                                                <div className="cust-details">
                                                    <img src={review.image} alt="customer-img" className='w-[50px] h-[50px] rounded-full'/>
                                                    <p>{review.name}</p>
                                                </div>
                                                <p>{review.text}</p>
                                            </div>
                                        )
                                    })
                                }

                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;