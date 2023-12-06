import {
  faHandshakeSimple,
  faMagnifyingGlass,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      <div className="mt-8 relative">
        <img
          className="w-full opacity-75"
          src="https://cdn.vietnambiz.vn/2019/9/22/ai-15691563894931944590860.png"
          alt=""
        />
        <div className="text-3xl lg:text-5xl font-bold absolute top-4 right-48">
          <h1 className="text-white">PHẦN MỀM THẨM ĐỊNH</h1>
          <h1 className="text-[#F58E6A]">ĐẦU TƯ CHO BẠN</h1>
        </div>

        <div className="text-2xl lg:text-3xl font-bold absolute top-24 lg:top-64 right-24 lg:right-72 flex flex-col gap-4">
          <button className="text-white px-8 py-4 bg-[#2c3c74] rounded-xl">
            Tư vấn
          </button>

          <button onClick={() => navigate('/pricing')} className="text-white px-8 py-4 bg-[#F58E6A] rounded-xl">
            Mua ngay
          </button>

          <button onClick={() => navigate('/main')} className="bg-white px-8 py-4 text-[#2c3c74] rounded-xl">
            Dùng thử miễn phí
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-6 mx-auto mb-80 ">
        <div className="w-fit p-12 bg-[#F6F6F6] max-w-xs flex flex-col gap-4 rounded-2xl shadow-2xl">
          <FontAwesomeIcon
            className="text-[#F58E6A] w-28 h-28 mx-auto"
            icon={faHandshakeSimple}
          />
          <h1 className="font-bold text-2xl text-[#2c3c74] text-center">
            Kết nối các doanh nghiệp
          </h1>
          <p className="text-[#696A87] text-base text-center">
            Tạo mối liên kết giữa doanh nghiệp và các start-up có tiềm năng
          </p>
        </div>

        <div className="w-fit p-12 bg-[#F6F6F6] max-w-xs flex flex-col gap-4 rounded-2xl  shadow-2xl ">
          <FontAwesomeIcon
            className="text-[#F58E6A] w-28 h-28 mx-auto"
            icon={faRobot}
          />
          <h1 className="font-bold text-2xl text-[#2c3c74] text-center">
            Kết hợp tính năng AI
          </h1>
          <p className="text-[#696A87] text-base text-center">
            Sử dụng AI để đưa ra lời khuyên cho thị trường hiện tại
          </p>
        </div>

        <div className="w-fit p-12 bg-[#F6F6F6] max-w-xs flex flex-col gap-4 rounded-2xl  shadow-2xl">
          <FontAwesomeIcon
            className="text-[#F58E6A] w-28 h-28 mx-auto"
            icon={faMagnifyingGlass}
          />
          <h1 className="font-bold text-2xl text-[#2c3c74] text-center">
            Thẩm định đầu tư
          </h1>
          <p className="text-[#696A87] text-base text-center">
            Đưa ra nhận định đầu tư dựa trên dữ liệu bạn nhập vào
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
