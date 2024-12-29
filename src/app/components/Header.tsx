import Image from 'next/image';

export default function Header() {
  return (
    <>
      <Image src="images/Logo.svg" width={256} height={39} alt="logo" />
      <div className="relative mr-[144px]">
        <button
          id="menuButton"
          className="absolute  bg-white p-4 rounded-full shadow-md z-20"
        >
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
      </div>
    </>
  );
}
