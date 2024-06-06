'use client'
import Link from "next/link";
import Image from "next/image";
function Home() {
  return (
    <>
    

<main className="bg-[#11071F] font-customFont">

  <div className="hero min-h-screen" id="hero" style={{backgroundImage: "url('https://i.postimg.cc/W3mfS3xn/Frame-1.png')"}}>
    <div className="text-[19px] text-left tracking-[2%]  absolute bottom-[65%] ml-[40px]">
      <p>Hello! I Am <span className="text-[#7127BA]">Maciej Baścik</span></p>
      <img className="absolute right-[95%] bottom-[-250%] " src="https://i.postimg.cc/3N5DBXPy/Arrow.png"/> 

    </div>
    <div className=" flex items-center justify-center ">


              <img className="w-[35%] mr-2" src="https://i.postimg.cc/FHtnL8Wm/Me.png"/>
        <div className="max-w-[40%] ">
        <p className="text-[17px] text-left tracking-[2%] underline">A Developer who</p>
        <h1 className="leading-[126.7%] tracking-[2%] text-[50px] text-white ">Make sure the UI is <span className="text-[#7127BA]">intuitive</span>...</h1>
        <p className="text-[12px] text-left mt-[20px]">Because if my mom can’t use it, i’ve failed.</p>
      </div>
    </div>
  </div>

  <div id="about" className="hero min-h-screen bg py-20 ">
<div className="justify-center items-center flex flex-row">
  <div className="flex flex-col m-4 gap-4">
        <div className="w-[60vh] h-[18vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
        <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
        <div className="flex flex-row items-start">
          <img className="ml-[10%] mt-[4%] w-[200px] h-[auto]" src="https://i.ibb.co/n864LLB/foto.png" />
          <div className="p-12 pt-6">
            <h1 className="text-[26px] text-left tracking-[2%] font-[500] font-[Poppins]">School</h1>
            <p className="text-[8px] text-left tracking-[2%] font-[400] font-[Poppins]">My Education journey has been marked by high achievements, including the highest grades at computer science subjects. Through projects and collaborations, I've cultivated critical thinking and problem-solving skills essential for professional success.</p>
          </div>
        </div>
      </div>

    <div className="w-[90vh] h-[22vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
        <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
        <div className="flex flex-row items-start">
          <img className="p-[5%] pl-[8%] w-[300px] h-[auto]" src="https://i.ibb.co/5hz8T1F/zaroa.png" />
          <div className="p-[72px] pt-9 pl-5">
            <h1 className="text-[39px] text-left tracking-[2%] font-[500] font-[Poppins]">Courses</h1>
            <p className="text-[12px] text-left tracking-[2%] font-[400] font-[Poppins]">I have completed various courses to expand my skills and knowledge, covering both technical and soft skills. Notable courses include "Python from beginner to advanced", "NextJS crash course", and "React crash course", each of which contributes significantly to my professional development.</p>
          </div>
        </div>
      </div>
  
  </div>
  <div className="flex flex-col m-4 gap-4">
      <div className="w-[60vh] h-[18vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
        <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
        <div className="flex flex-row items-start">
          <img className="ml-[10%] mt-[4%] w-[200px] h-[auto]" src="https://i.ibb.co/q7dtwRN/kubek.png" />
          <div className="p-12 pt-6">
            <h1 className="text-[26px] text-left tracking-[2%] font-[500] font-[Poppins]">Freelancing		</h1>
            <p className="text-[8px] text-left tracking-[2%] font-[400] font-[Poppins]">I have improved my skills by taking on a diverse range of freelancing projects. My freelancing portfolio includes graphic design, web development and mixing engineering. My commitment to delivering high-quality work on time has helped me build a reputation for reliability and excellence in the freelance community.</p>
          </div>
        </div>
      </div>



      <div className="w-[60vh] h-[18vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
        <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
        <div className="flex flex-row items-start">
          <img className="ml-[10%] mt-[4%] w-[200px] h-[auto]" src="https://i.ibb.co/zQqGfZk/majk.png" />
          <div className="p-12 pt-6">
            <h1 className="text-[26px] text-left tracking-[2%] font-[500] font-[Poppins]">Work</h1>
            <p className="text-[8px] text-left tracking-[2%] font-[400] font-[Poppins]">My career includes a position at PapillonMedia, where I excelled in project management and fast task execution. Clients have distinguished me for my professionalism.</p>
          </div>
        </div>
      </div>
        
  </div>
    </div>
    </div>
    



  <div className="hero min-h-screen" id="signup"
    style={{backgroundImage: 'url(https://i.ibb.co/gmbsT6L/Sign-up.png)', objectFit:"cover"}}>
    <div className="text-center text-neutral-content items-center" >
        <button className="btn btn-sm bg-transparent h-9 mb-2 text-[14px] hover:bg-transparent"
          style={{color:"black"}}>Make your life easier </button>
        <h1
          className="mb-5  lg:text-[80px] md:text-[50px] sx:text-[45px] text-[47px] mx-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Join our community</h1>
        <p
          className="mb-5 md:mx-[180px] mx-[20px] lg:text-[22px]  md:text-[17px] sm:text-[18px] text-[18px]  text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">
          Are you always on the lookout for the latest fashion trends? Join our community by signing up for our app and stay ahead of the curve! Our app is your ultimate destination for finding trending clothes effortlessly. Here&apos;s why you should sign up now:</p>
          
    </div>
    
  </div>

</main>

    </>
  );
}
export default Home;