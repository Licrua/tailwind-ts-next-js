import Image from 'next/image';
import footerImage from '../../../public/images/Logo.svg';

const FooterCopyright = () => {
  return (
    <>
      <section className="flex justify-between p-8">
        <Image alt="footerImage" width={200} src={footerImage} />
        <p className="text-[#B5C096] text-sm">
          © 2020@webovio. All Rights Reserved.
        </p>
      </section>
    </>
  );
};

export default FooterCopyright;
