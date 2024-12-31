import Image from 'next/image';
import footerImage from '../../../public/images/Logo.svg';

const FooterCopyright = () => {
  return (
    <>
      <section className="flex flex-col max-sm:gap-3 lg:flex-row  lg:justify-between items-center py-5">
        <Image alt="footerImage" width={200} src={footerImage} />
        <p className="text-[#B5C096] text-sm">
          © 2020@webovio. All Rights Reserved.
        </p>
      </section>
    </>
  );
};

export default FooterCopyright;
