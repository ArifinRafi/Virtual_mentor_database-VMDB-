import React from 'react';

const SearchBox = () => {
    return (
        <div>
            <div className='flex justify-center my-12'>
                <div className='w-90'>
                
	                <div class="container mx-auto bg-indigo-500 rounded-lg p-14">
		                <form>
			                <h1 class="text-center font-bold text-white text-4xl"> <label> Find your mentor's profile here</label> </h1>
				                <p class="mx-auto font-normal text-sm my-6 max-w-lg">Enter your mentor's name and select the platform type here</p>
				                <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					            <input class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Enter your Mentor's Name" />
					                <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						                <select id="Com" class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
                                            <option value="School" selected>School</option>
                                            <option value="College">College</option>
                                            <option value="University">University</option>
                                            <option value="Online">Online</option>
                                            <option value="Other Platform">Other Platform</option>
                                        </select>
						                 <button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					                </div>
				            </div>
		                </form>
	                
                </div>
            </div>
   

        </div>
        </div>
    );
};

export default SearchBox;