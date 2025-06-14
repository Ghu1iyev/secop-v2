import React from "react";


const ContactInfo = () => {
  //  const { data } = useQuery<ContactInfoProps>({
  //   queryKey: ["articles"],
  //   queryFn: () => GetApi("/articles/"),
  //   staleTime: 1000 * 60 * 10,
  //   refetchOnWindowFocus: false,
  // });

  return (
    <section className="grid justify-between grid-cols-1 md:grid-cols-2 gap-[50px] sm:gap-[100px] sm:mt-[60px]">
      <div>
        <p className="text-[#B0B0B0] text-[18px] leading-[20px] font-vesber">We provide modern design, development, and branding solutions tailored to elevate your digital presence.</p>
      </div>
      <div className="mb-[100px]">
        <ul>
            <li>
                <div className="mb-[30px]">
                    <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px]">Let’s Talk — We’re Available</p>
                    <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">+994 51 657 47 47</p>
                </div>
            </li>
            <li>
                <div className="mb-[30px]">
                    <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px]">Got Questions? Email Us Now</p>
                    <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">info@secop.com</p>
                </div>
            </li>
            <li>
                <div className="mb-[30px]">
                    <p className="text-[18px] md:text-[20px] font-vesber text-[#B0B0B0] leading-[32px] mb-[10px]">Visit Our Office Location</p>
                    <p className="text-[18px] md:text-[25px] font-medium font-vesber leading-[30px] text-[#fff]">Baku, Azerbaijan. Nizami str45</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
