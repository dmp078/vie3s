import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#283977] w-full py-8 px-20 absolute bottom-0">
        <div className=" flex mx-auto gap-16 w-fit">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 font-bold">
              <h1 className="text-4xl text-white">VIE3S</h1>
              <h1 className="text-4xl text-[#F58E6A]">VIETNAM</h1>
            </div>

            <p className="text-white text-base max-w-xs">
              Công ty thẩm định đầu tư dự án cho doanh nghiệp của bạn, đưa ra những chiến lược kinh doanh 
            </p>

            <div className='my-4 flex gap-3 text-[#F58E6A]'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
              <g fill="#f58e6a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
              <g fill="#f58e6a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
              <g fill="#f58e6a" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-3xl">LIÊN KẾT</h1>
            <div className="gap-4 flex flex-col text-[#696A87]  text-lg font-medium">
              <Link to={"/"} className="hover:brightness-75">
                Trang chủ
              </Link>
              <Link to={"/about"} className="hover:brightness-75">
                Giới thiệu
              </Link>
              <Link to={"/how-it-works"} className="hover:brightness-75">
                Cách hoạt động
              </Link>
              <Link to={"/pricing"} className="hover:brightness-75">
                Giá tiền
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white font-bold text-3xl">LIÊN HỆ</h1>
            <div className="gap-4 flex flex-col text-white  text-lg">
              <p className="">Số điện thoại: 0123456789</p>
              <p className="">Email: test@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer