import Aside from './AsideComponent';
import FooterAdditionalInfo from './FooterAdditionalInfo';
import FooterAddress from './FooterAddress';
import FooterCopyright from './FooterCopyright';

const FooterContainer = () => {
  return (
    <>
      <section className="bg-custom-footer-bg sm:px-[120px] px-10 mt-[350px] relative pt-[300px] size-full">
        <Aside />
        <FooterAddress />
        <hr className="border-[#5D6544] mt-[52]" />
        <FooterAdditionalInfo />
        <hr className="border-[#5D6544] mt-[52]" />
        <FooterCopyright />
      </section>
    </>
  );
};

export default FooterContainer;
