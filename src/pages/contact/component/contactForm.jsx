import { useState } from "react";

function ContactForm() {
  const [formaData, setFormData] = useState({
    firstName: "",
    lastName: "",
    select: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div>
        <div className="flex flex-col gap-y-[15px] w-full shadow-lg rounded-[12px] px-[20px] py-[40px]  ">
          <form action="" className="flex flex-col gap-[20px]">
            {/* Firstname */}
            <div name={formaData?.firstName} className="flex gap-[15px]">
              <input
                name="firstName"
                placeholder="Firstname"
                onChange={(e) => handleChange(e)}
                className="h-[45px] w-full border-[1px] border-[gray] outline-none rounded-[8px] p-[15px]"
              />
              <input
                name="lastName"
                placeholder="Lastname"
                onChange={(e) => handleChange(e)}
                className="h-[45px] w-full border-[1px] border-[gray] outline-none rounded-[8px] p-[15px]"
              />
            </div>

            <select
              name="select"
              placeholder="Select State"
              id=""
              className="h-[45px] w-[full] border-[1px] border-[grey] outline-none rounded-[8px] px-[15px]"
            >
              <option value="">select state</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="portHacourt">Port-Harcourt</option>
              <option value="benin">Benin</option>
            </select>

            <div className="flex gap-[15px]">
              <input
                name="email"
                placeholder="email"
                onChange={(e) => handleChange(e)}
                className="h-[45px] w-full border-[1px] border-[gray] outline-none rounded-[8px] p-[15px]"
              />
              <input
                name="phoneNumber"
                placeholder="phonenumber"
                onChange={(e) => handleChange(e)}
                className="h-[45px] w-full border-[1px] border-[gray] outline-none rounded-[8px] p-[15px]"
              />
            </div>

            <select
              name="service"
              id=""
              className="h-[45px] w-[full] border-[1px] border-[grey] outline-none rounded-[8px] px-[15px]"
            >
              <option value="">select service</option>
              <option value="">contact</option>
              <option value="">Home Delivery</option>
              <option value="">End products</option>
            </select>

            <textarea
              name="message"
              placeholder="Enter your message"
              id=""
              className="h-[150px] w-[full] border-[1px] border-[grey] outline-none rounded-[8px] px-[15px]"
            ></textarea>
            <div className="flex justify-end">
              <button className="py-[12px] px-[24px] bg-[#f1efef] text-[gray] rounded-[8px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
