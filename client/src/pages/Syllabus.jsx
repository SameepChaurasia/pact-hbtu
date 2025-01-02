import { HiDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Syllabus() {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 pr-3 pt-2 pb-2">

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

    <div className='bg-gradient-to-r from-emerald-50 to-cyan-50 pl-3'>

      <div className="text-center pt-5">
        <a className="font-serif font-bold text-3xl underline decoration-emerald-800">SYLLABUS</a>
      </div><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → Undergraduate</a><br/><br/>
      <a className="font-serif font-bold text-2xl">B. TECH. IN CHEMICAL TECHNOLOGY – PAINT TECHNOLOGY</a>

      <div className="flex flex-row pl-20 pr-20">
        <div className="basis-10/12">
        <div className="font-serif font-semibold pl-3 pr-10 pb-5 border-4 border-cyan-500  ">
          <br/>
          <a>• B.Tech. SEMESTER WISE NEW COURSE STRUCTURE ALL TECHNOLOGY BRANCHES </a> <br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/btechsyllabus-1.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button><hr/><hr/><hr/><hr/><br/>

          <a>• Old Course Structure and detailed syllabus of B. Tech Chemical Technology- Paint Technology <br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/btechsyllabus-2.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button>
            </a><hr/><hr/><hr/><hr/><br/>

          <a>• Revised Course Structure and Detail Syllabus with Course Outcome (CO) of B. Tech Chemical Technology-Paint Technology effective from the session 2017-18</a><br/>
          <button>
          <a className="group bg-slate-500 text-white px-4 py-1 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:text-cyan-500 active:scale-100 transition cursor-pointer borderBlack dark:bg-slate-500"
                href="/syllabusPTNew.pdf"
                download
                >
                  Download & View{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a></button>
          <br/>

          </div>
        </div>
        <div className="basis-2/12">
        
        </div>
      </div><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → Post Graduate</a><br/>
      <a className="font-serif text-lg">Post Graduate- M. Tech in Chemical Technology-Paint technology would be started from 2019-20 the syllabus would be made available soon.</a><br/><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-800">• Syllabus → PhD</a><br/>
     <a className="font-serif text-lg"> A⟭ Course structure for PhD program in different specializations.</a><br/>
     <a className="font-serif text-lg"> B⟭ PhD courses should be taken by students in consultation with their thesis supervisors.</a><br/>

    </div>

    </div>
  )
}
