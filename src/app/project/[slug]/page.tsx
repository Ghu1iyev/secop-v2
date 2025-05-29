import Link from "next/link";
import Title from "@/components/shared/Title/Title";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

type ProjectDetailProps = {
  params: { slug: string };
};

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = params;

  return (
    <div className="container">
      <div className="mt-36 mb-12">
        <nav className="text-xl font-monda text-[#B0B0B099] leading-7 flex items-center gap-5">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <Link href="/project" className="hover:text-white">
            Projects
          </Link>
          <span>
            <IoIosArrowForward />
          </span>
          <span className="text-white font-semibold">{slug}</span>
        </nav>
      </div>

      <div className="p-20 bg-[#121212] rounded-3xl w-100% h-auto ">
        <Title title={slug} subtitle={slug} />

        <div className="w-full  h-[300px] md:h-[516px] mt-10 mb-14 relative">
          <Image
            src={"/assets/images/png/detail.jpg"}
            alt=""
            fill
            className="object-cover rounded-[20px]  "
          />
        </div>

        <p className="font-vesber text-3xl leading-8">Project Details</p>
        <div className="w-full h-[1px] bg-[#2A2A2A] my-10"></div>

        <div className="font-monda text-base leading-8 font-normal">
          <p>
            Client: <span className="text-[#B0B0B0]">John Doe</span>
          </p>

          <p>
            Duration: <span className="text-[#B0B0B0]">3 months</span>
          </p>

          <p>
            Services Provided: {""}
            <span className="text-[#B0B0B0]">
              Security infrastructure design, SOC setup, encryption
              implementation, real-time threat monitoring, staff cybersecurity
              training
            </span>
          </p>
        </div>

        <div className="mt-14">
          <p className="font-monda text-base leading-8 font-normal text-[#B0B0B0]">
            SECOP handled the design and implementation of the security
            infrastructure for Baku Fintech’s new digital platform. The project
            included creating a secure system architecture, establishing a
            real-time Security Operations Center (SOC) for threat monitoring,
            and implementing advanced encryption methods to protect user data.
            With SECOP’s support, Baku Fintech successfully launched its
            platform with enhanced security and minimized cyber risks.
          </p>
        </div>
      </div>
    </div>
  );
}
