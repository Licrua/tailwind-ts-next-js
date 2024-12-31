// import { FooterItem } from "data/infoList";
type FooterListProps = {
  items: {
    id: number;
    title: string;
    list: string[];
  };
};

const FooterList = ({ items }: FooterListProps) => (
  <div className="flex flex-col items-center sm:items-stretch gap-5">
    <h3 className="font-bold text-regularWhite">{items.title}</h3>
    <ul className=" flex gap-3  flex-col">
      {items.list.map((item, index) => (
        <li className="text-[#B6C197]" key={index}>
          <a
            className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
            href="#"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterList;
