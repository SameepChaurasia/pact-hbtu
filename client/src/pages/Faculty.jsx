import { Link } from "react-router-dom";

export default function Faculty() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 grid grid-cols-1 md:grid-cols-2 gap-4 pl-3"> 

<div className= "basis-1/3 pt-4 pl-4 pr-10 text-base md:text-xl">
                <div className="font-serif pl-3 pr-10 pb-10 border-4 border-cyan-500 bg-slate-700 text-white ">
            <div>
            <h2 className="text-center text-2xl font-extrabold underline decoration-sky-400">Explore More⇝</h2>
                    <Link to='/syllabus'>
                        <a className="hover:underline decoration-emerald-400">•SYLLABUS</a><hr/>
                     </Link>

                    <Link to='/faculty'>
                        <a className="hover:underline decoration-emerald-400">•FACULTY</a><hr/>
                    </Link>
            
                    <Link to='/staffmembers'>
                    <a className="hover:underline decoration-emerald-400">•STAFF MEMBERS</a><hr/>
                    </Link>
            
                    <Link to='/laboratories'>
                    <a className="hover:underline decoration-emerald-400">•Laboratories</a><hr/>
                    </Link>
            
                    <Link to='/researchprojectconsultancy'>
                    <a className="hover:underline decoration-emerald-400">•Research/Project/Consultancy</a><hr/>
                    </Link>
            
                    <Link to='/contact'>
                    <a className="hover:underline decoration-emerald-400">•Contacts</a><hr/>
                    </Link>
            
                    <Link to='/facilities'>
                    <a className="hover:underline decoration-emerald-400">•Facilities</a><hr/>
                    </Link>
            
                    <Link to='/achievement'>
                    <a className="hover:underline decoration-emerald-400">•Achievement</a><hr/>
                    </Link>
            
                    <Link to='/placement'>
                    <a className="hover:underline decoration-emerald-400">•Placement</a><hr/>
                    </Link>
            
                    <Link to='/publications'>
                    <a className="hover:underline decoration-emerald-400">•Publications</a><hr/>
                    </Link>
                    </div>
          </div>
          </div>  

      <div>
      <div className="text-center pt-5">
        <a className="font-serif font-bold text-3xl underline decoration-emerald-800">FACULTY - INDTRODUCTION</a>
      </div><br/>

      <div className=" grid grid-cols-1 md:grid-cols-1 gap-4 pl-3 pr-3 pt-2 pb-2 justify-center items-center">
       <div> <img src="faculty1.jpg" className="h-auto w-auto"/></div>
       <div> <img src="faculty2.jpg" className="h-auto w-auto"/></div>
      </div>
      </div>

    </div>
  )
}
