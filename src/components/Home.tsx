import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const Home = () => {
  return (
    <div id="home" className="">
      <header className="flex items-center justify-center">
        <h1 className="text-4xl text-white">Allotrope Editorial</h1>
      </header>

      <div id="body" className="px-60 pb-10 pr-60 pt-10 text-center">
        <p>
          Hello authors and welcome to Allotrope Editorial! Here we provide a
          range of editing services as well as formatting and website building
          services. Whether you’re looking for someone to help you with your
          story or just a second set of eyes for typos, we’ve got your back.
        </p>
        <br />
        <p>
          As reading platforms have evolved from lugging 5 books around on vacay
          to having millions of books at the tips of your fingers, the
          publishing industry has also evolved. Gone are the days where you have
          to send your manuscript to 20+ publishing houses to get your book out
          to the public. Now you can write your heart out, upload your work
          online, and start selling copies! With this new ease of process comes
          confusion though... Do I need an editor? When in the process do I seek
          one out? What kind of editing do I need?
        </p>
        <br />
        <p>
          Luckily, we're pretty well versed in this process and have the answers
          you seek.
        </p>
      </div>
      <div className="px-60 py-10 pb-20 pr-60">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              href="https://www.amazon.com/Time-Tears-Jonathan-Dominguez-ebook/dp/B07NPB1MZF/ref=sr_1_11?crid=I9Q885Z71HUX&keywords=the+time+of+tears&qid=1668586212&sprefix=the+time+of+tears%2Caps%2C124&sr=8-11"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/6POfR5c.jpg"
                className="mx-auto h-96 object-fill"
                alt="The Time of Tears"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.amazon.com/gp/product/B07TXTCCTS/ref=dbs_a_def_rwt_bibl_vppi_i1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/HCmGZVo.jpg"
                className="mx-auto h-96 object-fill"
                alt="The Fall of the Nine"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.amazon.com/Devils-Soundtrack-alejandro-azcarreta-ebook/dp/B09MVCBX4D/ref=sr_1_1?crid=14YFFI93SLSGQ&keywords=the+devils+soundtrack&qid=1668586663&s=digital-text&sprefix=the+devils+soundtrack%2Cdigital-text%2C123&sr=1-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/cbsVG7W.jpg"
                className="mx-auto h-96 object-fill"
                alt="The Devils Soundtrack"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.amazon.com/Tide-Darkness-Dark-World-Trilogy-ebook/dp/B0B8QT9FCB/ref=sr_1_1?crid=KD8B01WPZH1Z&keywords=tide+of+darkness&qid=1668587002&s=digital-text&sprefix=tide+%2Cdigital-text%2C131&sr=1-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/a7K2utd.jpg"
                className="mx-auto h-96 object-fill"
                alt="Tide of Darkness"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.amazon.com/Time-Tears-Tales-Nine-ebook/dp/B07WHBMV68/ref=sr_1_1?crid=1ILGE6GS8TNOJ&keywords=the+time+of+tears%3A+tales+of+the+nine&qid=1668587053&s=digital-text&sprefix=the+time+of+tears+tales+of+the+nine%2Cdigital-text%2C101&sr=1-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/8R8Btij.jpg"
                className="mx-auto h-96 object-fill"
                alt="Tales of the Nine"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.amazon.com/gp/product/B0BH9J3ZZ7?ref_=dbs_m_mng_rwt_calw_tkin_1&storeType=ebooks&qid=1668587111&sr=1-1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.imgur.com/XjHTa9X.jpg"
                className="mx-auto h-96 object-fill"
                alt="Flame of Shadow"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
