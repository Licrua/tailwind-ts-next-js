import Image from 'next/image';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <div className="flex mx-auto flex-col max-sm:items-center max-sm: gap-3 sm:flex-row sm:justify-between sm:mx-20 min-h-[43px]">
      <Image src="images/Logo.svg" width={256} height={39} alt="logo" />
      <HeaderMenu />
    </div>
  );
}
