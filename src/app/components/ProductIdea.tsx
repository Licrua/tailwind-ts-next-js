import productIdeas from 'data/productIdeas';

const ProductIdeaSection = () => {
  return (
    <section className="max-w-[1100px] w-full   mx-auto">
      <h2 className="text-4xl text-black font-bold block ml-20 mt-36 mb-14 ">
        Deation & Evaluation - Best Way <br /> to Kick off Your Product Idea
      </h2>
      <div className="flex justify-center gap-7">
        {productIdeas.map(
          (item, index) => (
            <div
              className="flex p-3 whitespace-pre-line flex-col justify-between"
              key={item.id}
            >
              <h3 className=" text-2xl uppercase mb-5">{item.title}</h3>
              <p className=" text-sm max-w-[194] mb-12">{item.description}</p>
              <a
                className={
                  index === 0
                    ? 'text-base underline text-[#FFD723]'
                    : 'text-base underline text-[#D4D6D4]'
                }
                href="#"
              >
                {' '}
                <span className='me-1'>▶</span>Read More
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductIdeaSection;
