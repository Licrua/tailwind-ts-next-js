import { footerData } from 'data/infoList';
import FooterList from './FooterList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMediaIcons from 'data/socialMediaIcons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const FooterAdditionalInfo = () => {
  return (
    <section className="grid mt-[60]  pr-10 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {footerData.map((item) => (
        <FooterList key={item.id} items={item} />
      ))}
      <div className='flex flex-col gap-4 items-center sm:items-stretch  relative before:content-[""] before:w-0.5 before:h-full  before:-left-20  before:top-0 before:bg-[#5D6544] before:absolute'>
        <h3 className="text-regularWhite font-semibold">Get in Touch</h3>
        <p className="text-[#B6C197] lg:min-w-[270]">
          Feel free to get in touch with us vai email
        </p>
        <a
          className="text-sm lg:text-2xl  hover:underline font-bold text-white"
          href="mailto:info.webovio@gmail.com"
        >
          info.webovio@gmail.com
        </a>
        <div className="flex gap-4 items-center">
          {socialMediaIcons.map((item) => {
            const isGooglePlus = item.title === faGooglePlusG;
            return (
              <div
                id={item.id}
                key={item.id}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isGooglePlus ? 'bg-yellow-400' : 'bg-[#444A34]'
                }`}
              >
                <FontAwesomeIcon
                  icon={item.title}
                  className={`text-xl ${
                    isGooglePlus
                      ? 'text-white w-[25px]'
                      : 'text-[#5E6648] w-[15px]'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FooterAdditionalInfo;
