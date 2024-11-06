
    import React from "react";

    const CreateTaskModalComp = ({ isOpen, onClose, children }) => {
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-modelBox rounded-lg shadow-lg   flex flex-col md:w-[90%] sm:w-[800px] rounded-t-xl max-h-[94vh] react-draggable">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-white ml-3">Create a Task</h2>
              <button onClick={onClose} className="text-white-800 p-2 pr-3 icon-color hover:text-gray-700">
                ✕
              </button>
            </div>
    
            {/* Modal Content */}
            <div className="d-flex">
                <div className="w-[310px]  bg-sideNavbg bg-blue-700">
                <div class="bg-gradient-to-r from-[#a0a7af] to-[#ced4b4] flex justify-center"><span class="text-lg px-3 text-white font-semibold">Task # 0</span></div>
                <div class="py-2 border-b text-sm border-gray-400"><span class="text-white text-sm pl-5">Showed Results By</span></div>
                <ul>
                

                <li class="border-b py-2 text-sm flex border-gray-400">
                <div class="flex text-sm items-center">
                    <div class="rounded-full flex w-8 ml-2 justify-center items-center">
                    <i class="text-white text-2xl">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"></path>
                        <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"></path>
                        </svg>
                    </i>
                    </div>
                </div>
                <div class="w-full flex flex-col pl-2">
                    <div>
                    <span class="pl-2 text-white">Practice</span>
                    </div>
                    <div class="pe-1 text-blue-700">
                    <div class="flex flex-col">
                        <label class="font-sans text-sm mb-1"></label>
                        <div class="relative flex w-full">
                        <div class="flex flex-col w-full">
                            <select name="practiceID" class="border rounded w-full  px-[5.8px] py-[3px] h-7  
                focus:outline-none focus:shadow-outline text-[#8ac5ff] font-sans bg-sideNavbg border-0 mt-[-7px] pt-0 ">
                            <option value="" class="text-white px-3 text-[0.9rem] cursor-pointer
                            hover:bg-blue-600 text-black hover:text-white ">Select an option</option>
                            <option value="1" class="text-white px-3 text-[0.9rem] cursor-pointer
                                hover:bg-blue-600 text-black hover:text-white ">JOY OF NURSING</option>
                            <option value="2" class="text-white px-3 text-[0.9rem] cursor-pointer
                                hover:bg-blue-600 text-black hover:text-white ">PULASKI INTERNAL MEDICINE, PC</option>
                            </select>
                        </div>
                        <div class="absolute right-1 bottom-2 pointer-events-none cursor-pointer bg-sideNavbg ">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer text-white text-xl  pointer-events-none" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"></path>
                            </svg>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
                </ul>
                </div>
                <div className="w-full bg-sidecontent">
                    <div class="px-4 pt-2"><div class="mx-5 "><div class="">
                         <label class=" text-sm ">Subject *</label></div><div class="pt-3">
                            <div class="flex   flex-col  w-full">
                                <input type="text " name="subject" placeholder="Enter here" class="border rounded w-full px-[7px] py-[3px] h-7  font-sans  leading-tight focus:outline-none focus:shadow-outline  h-8  text-base py-1 disabled:bg-gray-300" value=""/></div></div>
                                <div class="pt-5"> 
                                    <label class=" text-sm mb-1">Description *</label></div>
                                    <div class="pt-3"><div class="flex  flex-col">
                                        <textarea type="text " name="description" placeholder="Enter here" rows="5" 
                                        class="outline-none px-2 py-1 rounded-md border   "></textarea></div>
                                        <div class="flex justify-between mt-4"><div class="flex ">
                                            <input type="file" multiple="" style={{display: "none"}} />
                        <button class="bg-buttonBg  rounded-lg pl-4 pe-2 py-[2px] text-base mb-3 relative  flex items-center text-white font-semibold transition-all ease-in-out flex flex-row text-sm ">
                        Attachments
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" 
                        baseProfile="tiny"
                         viewBox="0 0 24 24" class=" text-xl ml-1" height="1em" width="1em" 
                         xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.534 4.466c1.024 0 2.05.39 2.829 1.169 1.561 1.561 1.561 4.098 0 5.656l-7.071 7.072c-.778.779-1.804 1.17-2.828 1.17s-2.049-.391-2.828-1.17c-1.56-1.559-1.56-4.098 0-5.656l.807-.807c-.004.805.25 1.524.701 2.125l-.094.096c-.78.779-.78 2.049 0 2.828.39.39.901.584 1.414.584s1.024-.195 1.414-.584l2.535-2.535 4.537-4.537c.778-.779.778-2.049 0-2.828-.392-.39-.904-.584-1.417-.584-.512 0-1.023.195-1.413.584l-4.535 4.537c-.128.127-.146.275-.146.354 0 .076.019.226.146.353.099.099.228.147.356.147.127 0 .254-.049.352-.146l2.122-2.121 1.414-1.414c.392.392.586.902.586 1.414 0 .511-.194 1.021-.584 1.41l-2.124 2.125c-.486.487-1.127.729-1.768.729s-1.28-.244-1.769-.729c-.472-.474-.731-1.101-.731-1.769 0-.67.261-1.297.732-1.77l4.534-4.535c.779-.779 1.805-1.168 2.829-1.168m0-2c-1.604 0-3.11.623-4.242 1.755l-7.069 7.073c-1.133 1.131-1.757 2.638-1.757 4.242s.624 3.11 1.757 4.243c1.131 1.132 2.639 1.755 4.241 1.755s3.11-.624 4.242-1.757l7.071-7.071c1.133-1.131 1.757-2.638 1.757-4.242 0-1.603-.623-3.11-1.755-4.241-1.133-1.134-2.64-1.757-4.245-1.757z"></path></svg>
                            </button>
                            </div>
                            <div class=" border-gray-300">
                                <button class="rounded-lg px-3 py-[3px] bg-buttonBg mb-3 text-base relative  flex items-center text-white font-semibold transition-all ease-in-out flex flex-row text-sm ">Create Task</button>
                            </div></div>
                            </div></div>
                            </div>
                </div>
            </div>
    
            {/* Modal Footer */}
            {/* <div className="mt-4 flex justify-end bg-wheat-800">
              <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Close
              </button>
            </div> */}
          </div>
        </div>
      );
    };
    
    export default CreateTaskModalComp;
    