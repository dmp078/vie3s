import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-col relative min-h-screen">
      <Header />
      {step === 1 && (
        <div className="mb-96 mt-8">
          <div className="px-24">
            <h1 className="text-5xl font-bold text-[#2c3c74] text-center">
              Thông tin cá nhân
            </h1>
            <div className="flex flex-wrap gap-24 lg:gap-24 mt-12">
              <div className="flex flex-col gap-10">
                <div className="text-[#F58E6A] ">
                  <p className="text-sm ml-2 mb-[1px]">Họ và tên</p>
                  <input
                    className="text-black min-w-[450px] py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                    type="text"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="flex gap-12">
                  <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Số điện thoại </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="0123456789"
                    />
                  </div>

                  <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Email </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="email"
                      placeholder="test@gmail.com"
                    />
                  </div>
                </div>

                <div className="text-[#F58E6A]">
                  <p className="text-sm ml-2 mb-[1px]">Chức vụ </p>
                  <select
                    name=""
                    id=""
                    className="border-2 text-black border-[#F58E6A] outline-none rounded-lg py-2 px-4"
                  >
                    <option value="ceo">CEO</option>
                    <option value="Cofounder">Cofounder</option>
                    <option value="nvien">Nhân viên</option>
                    <option value="hsinh">Học sinh/ sinh viên</option>
                    <option value="ktvien">Kế toán viên</option>
                    <option value="others">Vị trí khác</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="text-[#F58E6A]">
                  <p className="text-sm ml-2 mb-[1px]">Tên doanh nghiệp </p>
                  <input
                    className="text-black min-w-[400px] py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                    type="text"
                    placeholder="Công ty A"
                  />
                </div>

                <div className="flex gap-12">
                  <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Mã số thuế </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="text"
                      placeholder="029856421-688"
                    />
                  </div>

                  <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Số Fax </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="text"
                      placeholder="+84 (8) 3823 3618"
                    />
                  </div>

                  <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Quy mô nhân sự</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="text"
                      placeholder="500 người"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="text-white text-2xl font-bold bg-[#F58E6A] py-2 px-6 rounded-lg mt-8 absolute right-48"
              onClick={() => setStep(2)}
            >
              Tiếp theo
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mb-96 mt-8">
          <div className="px-24">
            <h1 className="text-5xl font-bold text-[#2c3c74] text-center">
              Sơ lược về dự án
            </h1>
            <div className="flex flex-wrap gap-12 mt-12">
              <div className="text-[#F58E6A]">
                <p className="text-sm ml-2 mb-[1px]">Ngành dự án</p>
                <select
                  name=""
                  id=""
                  className="border-2 text-black border-[#F58E6A] outline-none rounded-lg py-2 px-4"
                >
                  <option value="">Nhóm ngành sản xuất và chế biến</option>
                  <option value="">Nhóm ngành kiến trúc và xây dựng</option>
                  <option value="">Nhóm những ngành kinh doanh</option>
                  <option value="">Nhóm các ngành công nghệ - thông tin</option>
                  <option value="">
                    Nhóm ngành nghệ thuật - thẩm mỹ - đồ họa
                  </option>
                  <option value="">Nhóm ngành khoa học cơ bản</option>
                  <option value="">Ngành quản lý giáo dục</option>
                  <option value="">Nhóm ngành nông - lâm - ngư nghiệp</option>
                </select>
              </div>

              <div className="flex gap-12">
                <div className="text-[#F58E6A]">
                  <p className="text-sm ml-2 mb-[1px]">Tóm tắt về sản phẩm</p>
                  <textarea
                    placeholder="Dự án của bạn nói về vấn đề gì"
                    className="text-black min-h-[200px] min-w-[400px] py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                  ></textarea>
                </div>

                <div className="text-[#F58E6A]">
                  <p className="text-sm ml-2 mb-[1px]">Mục tiêu dự án </p>
                  <textarea
                    placeholder="Mục tiêu gần, xa của dự án này là gì, hướng đến điều gì"
                    className="text-black min-h-[200px] min-w-[400px] py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                  ></textarea>
                </div>

                <div className="text-[#F58E6A]">
                  <p className="text-sm ml-2 mb-[1px]">Phạm vi dự án </p>
                  <textarea
                    placeholder="Phạm vi như thế nào"
                    className="text-black min-h-[200px] min-w-[400px] py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              className="text-white text-2xl font-bold bg-[#F58E6A] py-2 px-6 rounded-lg mt-8 absolute right-48"
              onClick={() => setStep(3)}
            >
              Tiếp theo
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mb-96 mt-8">
          <div className="px-24">
            <h1 className="text-5xl font-bold text-[#2c3c74] text-center">
              Chuyên sâu về dự án
            </h1>
            <div className="flex flex-wrap gap-12 mt-12">
                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Lãi suất dự kiến dự án </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Khoản đầu tư ban đầu	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Khấu hao	 </p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Chi phí cố định	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Chi phí biến đổi	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Doanh thu	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Chi phí hoạt động	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Thuế	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Vốn lưu động	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Giá sản phẩm	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Lãi vay	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Doanh thu mong muốn	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Chi phí ước tính	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">thời gian thực hiện dự án	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>

                <div className="text-[#F58E6A]">
                    <p className="text-sm ml-2 mb-[1px]">Lãi suất ngân hàng năm hiện tại	</p>
                    <input
                      className="text-black py-2 px-4 outline-none border-2 border-[#F58E6A] rounded-lg"
                      type="number"
                      placeholder="100,000,000 VNĐ"
                    />
                </div>
            </div>

            <button className="text-white text-2xl font-bold bg-[#F58E6A] py-2 px-6 rounded-lg mt-8 absolute right-48">
              Kết quả
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Main;
