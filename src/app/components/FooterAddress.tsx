const FooterAddress = () => {
	return (
		<address className="grid max-w-[452] justify-center  sm:grid-cols-2 sm:justify-stretch ">
		<div>
		  <h3 className="text-[#B6C197] text-base">Phone</h3>
		  <a
			className="text-[#FFFFFF] hover:underline text-base font-bold"
			href="tel:+3250312832"
		  >
			+32 50 31 28 32
		  </a>
		</div>
		<div>
		  <h3 className="text-[#B6C197] text-base">Address</h3>
		  <a
			className="text-[#FFFFFF] hover:underline text-base font-bold"
			href="https://www.google.com/maps?q=491+Merlin+Crest+Suite+963"
			target="_blank"
			rel="noopener noreferrer"
		  >
			491 Merlin Crest Suite 963
		  </a>
		</div>
	  </address>
	)
}
export default FooterAddress;