import { ContactUsData } from "../../../db/contactUs";
import ContactForm from "./contactForm";

function ContactUs() {
  return (
    <div className="py-[80px]">
      <div className="max-content">
        <div className="container">
          <div className="flex gap-[40px] mdxl:flex-col">
            <div className="w-[486px] mdxl:w-full">
              <p className="font-[700] text-[48px] leading-[24px]">
                Get In Touch
              </p>
              <p className="mt-[16px] font-[40px] text-[20px] text-primary">
                We appreciate your interest in Pentrar. To request a demo or for
                any inquiries, please use the contact information below or fill
                out the form, and our team will get back to you promptly.
              </p>
              {ContactUsData.map((data, i) => (
                <div key={i} className="py-[20px]">
                  <div className="flex gap-[24px] w-[480px]mt-[24px] rounded-[8px] border p-[24px] ">
                    <img
                      src={data.iconimg}
                      alt=""
                      className="w-[40px] h-[40px] "
                    />
                    <div>
                      <p className="font-[600] textp-[18px] leading-p-[27px]">
                        {data.title}
                      </p>
                      <p className="mt-[8px] font-[400] text-[16px] leading-[24px]">
                        {data.subtitle}
                      </p>
                      <p className="font-[600] text-[16px] leading-[24px]">
                        {data.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[600px] mdxl:w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
