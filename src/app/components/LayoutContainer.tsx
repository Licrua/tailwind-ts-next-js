import AboutSection from './AboutSection';
import FooterContainer from './FooterContainer';
import Header from './Header';
import ProductIdeaSection from './ProductIdea';
export default function LayoutContainer() {
  return (
    <>
      <div className=" w-full  bg-center bg-custom-bg sm:max-lg:p-10 bg-no-repeat bg-cover text-slate-50 pt-[36px]">
        <div className="mx-auto  max-w-[1100px]">
          <header>
            <Header />
          </header>
          <AboutSection />
        </div>
      </div>
      <main>
        <ProductIdeaSection />
      </main>
      <footer >
        <FooterContainer />
      </footer>
    </>
  );
}
