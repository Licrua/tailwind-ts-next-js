const HeaderMenu = () => {
	return (
		<div className="relative">
        <button	
          id="menuButton"
          className="absolute  bg-white p-3 rounded-full shadow-md z-20"
        >
			{Array.from([1,2,3], (x) => {
				return (
					<div key={x} className=" w-10 h-1 sm:w-5 sm:h-0.5 bg-black mb-1"></div>
				)
			})}
          {/* <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black"></div> */}
        </button>
      </div>
	)
}

export default HeaderMenu