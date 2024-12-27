import cardsData from "data/cardsData";
import Image from "next/image";
import picture from '../public/images/photo_1.png'

export default async function Cards () {
	const data = await fetch('https://jsonplaceholder.typicode.com/users');
	const posts: [] = await data.json();
	console.log('posts', posts);
	
	return (
		// className="flex flex-col gap-3 items-center"
		<div  className="flex justify-evenly w-full h-screen ">
			<ul className=" flex gap-3 overflow-hidden items-center">
				{cardsData.map(item => (
					<li  className="rounded bg-slate-400 border-2 p-1 text-center" key={item.id}>
						<Image src={picture} alt="position"/>
						<p>{item.name}</p>
						<em>{item.price}</em>
					</li>
				))}
			</ul>
			{/* <ul className=" flex gap-3 overflow-hidden items-center">
				{posts?.map(item => (
					<li  className="rounded bg-slate-400 border-2 p-1 text-center" key={item.id}>
						<p>{item.name}</p>
						<em>{item.website}</em>
					</li>
				))}
			</ul> */}
		</div>
	)
}