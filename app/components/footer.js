export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/20 text-white/90 text-center py-6 px-4 z-40">
      <div className="max-w-4xl mx-auto space-y-2 text-sm">
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff] bg-clip-text text-transparent mb-2">
          GroupSence
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm opacity-80">
          <div>
            <h4 className="font-semibold text-white mb-1">Team Members</h4>
            <p>Maheswar Das</p>
            <p>Rajesh Paul</p>
            <p>Rohan Yadav</p>
            <p>Suman Kumar Bari</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-1">Mentor</h4>
            <p>Prof. Dhrubojyoti Ghosh</p>
            <p>Guide & Supervisor</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-1">College</h4>
            <p>OmDayal Group of Institutions</p>
            <p>CSE Department</p>
            <p>7th Semester B.Tech</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10 text-xs opacity-70">
          <p>© 2026 GroupSence - Blood Group Detection Project</p>
          <p className="text-blue-400 hover:text-blue-300 transition">rajesh02-cse@groupsence.com</p>
        </div>
      </div>
    </footer>
  );
}
