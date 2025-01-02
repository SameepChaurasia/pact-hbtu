import { Link } from "react-router-dom";

export default function StaffMembers() {
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
        <a className="font-serif font-bold text-3xl underline decoration-emerald-800">STAFF MEMEBERS</a>
      </div><br/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-600">1. Dr. (Mrs. ) P. A. Naqvi</a><br/>
      <a className="font-serif font-bold text-lg">Designation: Research Assistant</a><br/>
      <a className="font-serif font-bold text-lg">Mob. No.: 9415209929</a><br/><br/><hr/><hr/><hr/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-600">2. Mr. Sunil Arora</a><br/>
      <a className="font-serif font-bold text-lg">Designation: Office Assistant</a><br/>
      <a className="font-serif font-bold text-lg">Mob. No.: 8009710511</a><br/><br/><hr/><hr/><hr/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-600">3. Mr. Anoop Kumar</a><br/>
      <a className="font-serif font-bold text-lg">Designation: Peon</a><br/>
      <a className="font-serif font-bold text-lg">Mob. No.: 9450131032</a><br/><br/><hr/><hr/><hr/>

      <a className="font-serif font-bold text-2xl underline decoration-cyan-600">4. Mr. Prem Prakash Yadav</a><br/>
      <a className="font-serif font-bold text-lg">Designation: Peon</a><br/>
      <a className="font-serif font-bold text-lg">Mob. No.: 8400677525</a><br/><br/><hr/><hr/><hr/></div>

    </div>
  )
}
