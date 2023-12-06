import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <div className="bg-[#f5f5f5] w-full mb-80 py-8 mt-8">
        <h1 className="text-center mb-8 text-5xl text-[#2c3c74] font-bold">GIÁ TIỀN</h1>
        <div className="flex gap-6 mx-auto w-fit">
          <div className="rounded-2xl shadow-2xl min-h-[450px]">
            <div className="bg-[#F58E6A] py-4 rounded-t-2xl text-white font-bold text-2xl text-center">
              1 Tháng
            </div>
            <div className="px-8 mt-8 text-center ">
              <h1 className="text-[#2c3c74] font-bold text-2xl">
                200,000 VNĐ
              </h1>
              <p className="text-sm text-[#696A87] mt-2">
                Truy cập mọi chức năng của Vie3S trong 1 tháng.
              </p>
              <div className="mt-8 text-[#F58E6A] flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Số lượt thẩm định vô hạn</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Thời gian tính toán trả ra kết quả chỉ trong vài giây</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Sử dụng AI phiên bản plus</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Có cơ hội kết nối với các công ty cao hơn</p>
                </div>
              </div>

              <button onClick={() => navigate('/main')} className="text-white px-8 py-3 mt-8 bg-[#2c3c74] rounded-xl font-medium">
                Dùng thử miễn phí
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-2xl min-h-[450px]">
            <div className="bg-[#F58E6A] py-4 rounded-t-2xl text-white font-bold text-2xl text-center">
              1 Năm
            </div>
            <div className="px-8 mt-8 text-center ">
              <h1 className="text-[#2c3c74] font-bold text-2xl">
                2,000,000 VNĐ
              </h1>
              <p className="text-sm text-[#696A87] mt-2">
                Truy cập mọi chức năng của Vie3S trong 1 năm.
              </p>
              <div className="mt-8 text-[#F58E6A] flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Số lượt thẩm định vô hạn</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Thời gian tính toán trả ra kết quả chỉ trong vài giây</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Sử dụng AI phiên bản plus</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>Có cơ hội kết nối với các công ty cao hơn</p>
                </div>
              </div>

              <button onClick={() => navigate('/main')} className="text-white px-8 py-3 mt-8 bg-[#2c3c74] rounded-xl font-medium">
                Dùng thử miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
