import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex mx-auto justify-between  min-h-[43px]">
      <Image src="images/Logo.svg" width={256} height={39} alt="logo" />
      <div className="relative  mx-[144px] max-sm:mx-[10px]">
        <button
          id="menuButton"
          className="absolute  bg-white p-3 rounded-full shadow-md z-20"
        >
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </button>
      </div>
    </div>
  );
}
