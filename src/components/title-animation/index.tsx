export default function TitleAnimation({title} : {title: string}) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4">
      <div className="animate-marquee inline-block whitespace-nowrap text-gray-400 text-[48px] font-serif">
        <span className="m:mx-4 text-[30px] md:text-[70px] font-vesber">{title}</span>
        <span className="md:mx-8 mx-4 inline-block w-[40px] md:w-[80px] h-[2px] bg-gray-400 align-middle"></span>
        <span className="m:mx-4 text-[30px] md:text-[70px] font-vesber">{title}</span>
        <span className="md:mx-8 mx-4 inline-block w-[40px] md:w-[80px] h-[2px] bg-gray-400 align-middle"></span>
        <span className="m:mx-4 text-[30px] md:text-[70px] font-vesber">{title}</span>
        <span className="md:mx-8 mx-4 inline-block w-[40px] md:w-[80px] h-[2px] bg-gray-400 align-middle"></span>
        <span className="m:mx-4 text-[30px] md:text-[70px] font-vesber">{title}</span>
        <span className="md:mx-8 mx-4 inline-block w-[40px] md:w-[80px] h-[2px] bg-gray-400 align-middle"></span>
      </div>
    </div>
  );
}
