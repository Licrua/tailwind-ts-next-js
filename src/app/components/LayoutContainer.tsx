import AboutSection from './AboutSection';
import Aside from './AsideComponent';
import FooterContainer from './FooterContainer';
import Header from './Header';
import ProductIdeaSection from './ProductIdea';
export default function LayoutContainer() {
  return (
    <>
      <div className="container w-full   bg-custom-bg text-slate-50 pt-[36px]">
        <div className="mx-auto  max-w-[1100px]">
          <header className="flex mx-auto justify-between  h-[43px]">
            <Header />
          </header>
          <AboutSection />
        </div>
      </div>
      <main>
        <ProductIdeaSection />
        {/* <Aside /> */}
      </main>
      <footer >
        <FooterContainer />
      </footer>
    </>
  );
}
