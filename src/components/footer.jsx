import { FaEdge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#0a3113]">
      <div className="max-content py-[50px]">
        <div className="container">
          <div className="flex justify-between text-[white]">
            <div className="flex gap-[10px]">
              <FaEdge className="text-[40px]" />
              <p className="font-[600] text-[32px] leading-[30px]">Veroco</p>
            </div>
            <div
              className="font-[400] text-[20px] cursor-pointer"
              onClick={() => navigate("/PrivacyPolicy")}
            >
              Privacy Policy
            </div>
            <div className="flex gap-[12px] mt-[20px]">
              <BsTwitterX />
              <BsLinkedin />
              <BsInstagram />
              <BsFacebook />
            </div>
          </div>

          <div className="text-center text-[white] mt-[15px] font-[400] leading-[30px]">
            <p>Copyright Pentrar © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
//// <div className="bg-[#0a3113]">
//   <div className="max-content">
//     <div className="container">
//       <div className="py-[70px]">
//         <div className="">
//           <div className="flex text-[white] ">
//             <div className="flex gap-[12px] ">
//               <img
//                 src={logo}
//                 alt=""
//                 className="w-[40px] h-[40px] rounded-[50%]"
//               />
//               <p className="font-[600] text-[32px] leading-[32px]">
//                 Veroco
//               </p>
//               <div className="flex gap-[12px] mt-[30px]">
//                 <BsTwitterX />
//                 <BsLinkedin />
//                 <BsInstagram />
//                 <BsFacebook />
//               </div>
//             </div>
//             {/* <p className="">32 Ade Ajayi St, Ogudu GRA 100242, Lagos</p>
//             <p className="">Email: support@edgehr.com</p> */}
//           </div>

//           {/* Part B starts here
//           <div className="flex">
//             {footerData.map((item, i) => (
//               <div key={i} className="w-[350px] ">
//                 <p className="font-bold">{item.header}</p>

//                 <div className="mt-[18px] flex flex-col gap-[15px]">
//                   {item.links.map((list, i) => (
//                     <p key={i}>{list.text}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
export default Footer;
