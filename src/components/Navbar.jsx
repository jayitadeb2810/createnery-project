import React from "react"
import SearchIcon from "@mui/icons-material/Search"

const Navbar = () => {
  return (
    <div className=" absolute w-[1200px] h-[90px] rounded-[35px] top-[30px] px-[45px] py-[20px] flex justify-center items-center backdrop-blur-sm bg-[#D6D6D6] bg-opacity-[40%]">
      <div className=" flex items-center justify-between">
        <h3 className=" font-Urbanist font-[700] text-[22px] leading-[26.4px] text-[#11151D]">
          Createnary
        </h3>
        <div className="ml-[40px] w-[290px] h-[50px] bg-[#F8F9FB] rounded-[25px]">
          <div className=" w-full h-full flex items-center ">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <img
                style={{
                  fontSize: "22px",
                  color: "#5C5C5C",
                  marginLeft: "16px",
                }}
                src="/SearchIcon.svg"
                alt="seachIcon"
              />
            </div>
            <div className=" text-[16px] font-[500] leading-[19.2px] font-Urbanist  text-[#11151D]  ml-[14px]">
              Search Creators
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center ml-[200px]">
        <div className="w-[20px] h-[20px] flex items-center justify-center">
          <img
            style={{
              fontSize: "22px",
              color: "#5C5C5C",
            }}
            src="/CartImage.svg"
            alt="CartImage"
          />
        </div>

        <p className="ml-[10px] text-[18px] text-[500] leading-[21.6px] font-Urbanist  text-[#11151D] font-medium ">
          Cart
        </p>
      </div>
      <div className=" flex justify-between items-center">
        <div className="w-[20px] h-[20px] flex items-center ml-[30px] justify-center">
          <img
            style={{
              fontSize: "22px",
              color: "#5C5C5C",
            }}
            src="/InfoSignImage.svg"
            alt="InfoSignImage"
          />
        </div>
        <p className="ml-[10px] text-[18px] font-[500] leading-[21.6px] font-Urbanist  text-[#11151D]  ">
          About
        </p>
      </div>
      <div className=" flex justify-between items-center">
        <div className="w-[20px] h-[20px] flex items-center ml-[30px] justify-center">
          <img
            style={{
              fontSize: "22px",
              color: "#5C5C5C",
            }}
            src="/ContactSignImage.svg"
            alt="ContactSignImage"
          />
        </div>
        <p className="ml-[10px] text-[18px] text-[500] leading-[21.6px] font-Urbanist  text-[#11151D] font-medium ">
          Contact
        </p>
      </div>
      <button className=" ml-[40px] border-[1px] py-[10px] p-[25px] flex justify-between items-center border-[#11151D] rounded-[15px]">
        <p>Login</p>
        <div className="w-[20px] h-[20px] flex items-center ml-[30px] justify-center">
          <img
            style={{
              fontSize: "22px",
              color: "#5C5C5C",
            }}
            src="/ArrowDownImage.svg"
            alt="ArrowDownImage"
          />
        </div>
      </button>
    </div>
  )
}

export default Navbar
