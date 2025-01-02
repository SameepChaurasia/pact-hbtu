import { Link } from "react-router-dom";
import Slideshow from "../pages/Slideshow";

export default function Home() {
  return (
<div className="bg-gradient-to-r from-emerald-50 to-cyan-50">
      
        <div className="">
            <Slideshow/>   
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 pr-3 pt-2 pb-2">
          <div className=" pr-5">
                <div className="text-center">
                  <a className="font-serif font-extrabold text-2xl underline decoration-cyan-600">Latest Post </a>
                </div>        
 
                    <div className="pl-10 pt-5">
                      <div className="flex flex-col pb-4">
                      <a className="font-extrabold font-serif text-2xl underline decoration-emerald-700">»10th PACT Vision Seminar</a><br/>
                      <div className="basis-1/3">
                            <img src="10thpactseminar.png" className="h-80 w-full" loading="lazy"/>
                          </div><br/>

                          <div className="basis-2/3 font-serif">
                          
                          Calling All Alumni of Paint Technology Department and Industry Professionals! 🎨✨<br/><br/>

                          It’s time to reconnect with your alma mater and share your incredible journey with fellow members and students of the Paint Technology Department!<br/><br/>

                          The Paint and Coating Technologists Association (PACT) in collaboration with the Department of Paint Technology, is thrilled to announce the 10th PACT International Seminar on:<br/>
                          ‘SUSTAINABLE TECHNOLOGIES IN PAINTS & PRINTING INKS’<br/><br/>

                          📅 Dates: March 1-2, 2025<br/>
                          📍 Venue: Radhakrishnan Auditorium, East Campus, HBTU Kanpur<br/><br/>

                          Highlights of the Event:<br/><br/>

                          * Felicitation of Alumni (1973–1982 batches) with the prestigious ‘Life Time Achievement Award’ 🎖<br/>
                          * Inauguration of the ‘Center of Excellence’ in the Paint Technology Department, sponsored by PACT 🏛<br/>
                          * Insightful sessions on sustainable innovations in paints and printing inks 🌱<br/>
                          We warmly invite all alumni, professionals from the paint and coatings industry, and raw material manufacturers to join us for this prestigious event.<br/><br/>

                          👉 Register now and be part of this incredible gathering!<br/>
                          https://forms.gle/QmhLSAs1vQXxgDEN7<br/><br/>

                          Let’s come together to celebrate achievements, share knowledge, and pave the way for sustainable advancements in our field. See you there! <br/><br/>

                          <a href="https://forms.gle/QmhLSAs1vQXxgDEN7">
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Click Here To Fill And Submit Form 
                          </span>
                          </button></a>

                          </div>
                      </div>          
                    </div>
              </div>

        <div className=" ">
          <div className="bg-gradient-to-r from-emerald-100 to-cyan-100  border-4 border-indigo-200 border-x-indigo-500 text-sm">
          <div className="text-center ">
                  <div className="border-b-4 border-indigo-500 ">
                      <h1 className="font-extrabold text-xl font-serif text-center underline decoration-cyan-700 pb-4">⇜Previous Year Posts⇝</h1>
                        
                        <Link to="/post2023">
                            <a className="font-serif font-extrabold hover:underline hover:text-cyan-500 text-xl">»Click here to view Glimplse of 9th Pact Vision Seminar (2023)</a><br/><br/>
                        </Link>
                        <Link to="/post2018">
                        <a className="font-serif font-extrabold hover:underline hover:text-cyan-500 text-xl">»Click here to view Glimpse of 8th Pact Vision Seminar (2018) </a><br/><br/>  
                        </Link>
                        
                        </div>
                      </div>
                    </div>    
              </div>
      </div><br/>

      <div className="border-t-4 border-indigo-600">
          <div className="text-center pt-4">
            <a className="font-serif font-semibold text-3xl underline decoration-fuchsia-700"> ⇜Recent Posts⇝ </a>
          </div><br/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-3 pr-3 pt-4">
                    <div className=" ">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  text-black dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="104years.jpeg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Celebrating 104 Glorious Years of HBTU – Foundation Day 2024</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-black dark:text-black-">On 25th November 2024, we proudly celebrated the 104th Foundation Day of Harcourt Butler Technical University  (HBTU) with great enthusiasm and reverence. The day began with a special puja ceremony led by our esteemed Vice-Chancellor, symbolizing the values, traditions, and aspirations that have guided HBTU through its remarkable journey.</p>
                                    <a href="https://www.linkedin.com/posts/paint-technology-department-hbtu-kanpur_hbtufoundationday-104yearsofexcellence-25thnovember-activity-7267168344917590016-kVSG/?utm_source=share&utm_medium=member_android" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="  ">
                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="hbtuasiacoat.jpeg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight">HBTU Kanpur at Asia Coat+ Ink Show 2024 – Day 1 Highlights</h5>
                                    </a>
                                    <p className="mb-3 font-normal  dark:text-black">The Paint Technology Department-HBTU Kanpur, proudly participated in Day 1 of the Asia Coat+ Ink Show 2024 held in Mumbai. Representing the department were Ph.D. scholars Dev Tiwari and Satyarth Mishra, M.Tech student Md. Adnan Azmat, and B.Tech students Ujjwal Sonkar and Tarun Gangwar, under the esteemed guidance of Dr. Durgesh K. Soni (Asst. Professor) 
                                    </p>
                                    <a href="https://www.linkedin.com/posts/paint-technology-department-hbtu-kanpur_paint-painttechnology-hbti-activity-7265361115600084992-ZDwa/?utm_source=share&utm_medium=member_android" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="convocation.png" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight">Convocation Day Celebration at HBTU Kanpur! 🎓</h5>
                                    </a>
                                    <p className="mb-3 font-normal ">Convocation is a momentous and emotional milestone, marking the culmination of years of hard work and dedication. We extend our heartfelt wishes to all graduating students for a bright future filled with success and opportunities.
                                    Harcourt Butler Technical University (HBTU), Kanpur Celebrated its 6th Convocation on 27th September 2024.
                                    </p><br/>
                                    <a href="https://www.linkedin.com/posts/paint-technology-department-hbtu-kanpur_6th-convocation-of-hbtu-ugcPost-7246051449036570624-00lX/?utm_source=share&utm_medium=member_android" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
           

           
                    <div className="  ">
                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="alumni2024meet.jpeg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight">Alumni Meet 2024 at HBTU Kanpur </h5>
                                    </a>
                                    <p className="mb-3 font-normal  dark:text-black">The felicitation of golden Jubilee (1974 batch) and silver jubilee (1999 batch ) on 23rd November 2024 held at Radhakrishnan auditorium was truly memorable and heartwarming.
                                    The program began with lamp lighting and Saraswati Vandana , followed by our alumni sharing their experiences and knowledge with us. The Alumni’s were taken down the memory lane as they reunited with their batchmates , faculty and campus ,reliving the golden college days . 
                                    </p>
                                    <a href="https://www.linkedin.com/company/paint-technology-department-hbtu-kanpur/posts/?feedView=all" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="  ">
                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="centerofexcellence.jpeg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight">PACT Center of Excellence</h5>
                                    </a>
                                    <p className="mb-3 font-normal  dark:text-black">Delighted to share that, Dr. S. C. Srivastava (President PACT, B.Tech. Paint 1979), along with his son Mr. Shobhit Srivastava (Director, K-Tech India Pvt. Ltd.), visited HBTU Kanpur today to review the progress of the under-construction Center of Excellence in Paint Technology Department-HBTU Kanpur , sponsored by Paint and Coating Technologists Association ( PACT ).  
                                    The remarkable advancements are made in creating a world-class facility that will foster innovation and excellence in paint technology education.
                                    </p>
                                    <a href="https://www.linkedin.com/posts/paint-technology-department-hbtu-kanpur_hbtukanpur-centerofexcellence-pact-activity-7223691252012081152-maNn/?utm_source=share&utm_medium=member_desktop" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <div className="  ">
                              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-72 w-full" src="cecmeet.jpeg" alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight">PACT CEC MEETING</h5>
                                    </a>
                                    <p className="mb-3 font-normal  dark:text-black">The CEC Meeting of PACT was held on 21st March 2024, at Hotel Bridge, GT Road Kanpur.<br/>
                                    The following Members were present:<br/>
                                    Dr. S.C. Srivastava - President ,
                                    Dr. Prof. Pramod K Kamani - Secretary ,
                                    Dr. Arun Maithani - Jt. Secretary ,
                                    Mr. Ghanshyam Das - Treasurer ,
                                    Dr. Deepak Srivastava - Member ,
                                    Mr. B. M. Singh- Member ,
                                    Mr. Sunil Mehrotra - Member ,
                                    Mr. Suresh Srivastava - Member ,
                                    Dr. Radha Sachan - Member ,
                                    Dr. Durgesh K. Soni - Member ,
                                    Dr. R. K. Trivedi - Special Invitee ,
                                    Mr. G V S Sastry- Special Invitee ,
                                    Mr. Sameer Gupta - Special Invitee ,
                                    </p>
                                    <a href="https://www.linkedin.com/posts/paint-technology-department-hbtu-kanpur_pact-cec-meeting-the-cec-meeting-of-pact-activity-7176989872556048384-esys?utm_source=share&utm_medium=member_desktop" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
            </div>
            </div>
     

</div>


  )
}


 














































