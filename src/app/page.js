'use client'
import Link from "next/link";
import Image from "next/image";
function Home() {
  return (
    <>
    

<main className="bg-[#11071F] font-customFont">

  <div className="hero min-h-[90vh]" id="hero" style={{backgroundImage: "url('https://i.postimg.cc/W3mfS3xn/Frame-1.png')"}}>
    <div className="text-[19px] text-left tracking-[2%]  absolute bottom-[75%] ml-[80px]">
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
  <div className="flex items-center justify-center min-h-[30vh]">
  <div className="max-w-[40%] ">
    <h1 className="leading-[126.7%] tracking-[2%] text-[50px] text-white ">I'm a Software Engineer. </h1>
    <p className="text-[18px] text-left tracking-[2%]">Currently, I'm a Software Engineer at <span className="text-[#7127BA]">PapillonMedia</span></p>
    <p className="leading-[166.7%] text-[18px] text-left mt-[20px] font-[300]">A Computer Science Student, functioning in the industry for 1+ years now.
    I make meaningful and delightful digital products that create an equilibrium between user needs and business goals. I am still improving and learning new things everyday to make my products perfect.</p>
    </div>
    </div>
    
  <div id="about" className="hero min-h-[100vh] w-[100%]" style={{backgroundImage: "url('https://i.ibb.co/1zC7WW1/Frame-1.png')"}}>
  <div className="flex flex-col">
    <div className="m-[2vh]">
          <h1 className="leading-[126.7%] tracking-[2%] text-[35px] text-white justify-normal">Experience</h1>
    </div>
    <div className="justify-center items-center flex flex-row ">
      <div className="flex flex-col m-4 gap-4">
      <div className="w-[80vh] h-[28vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
          <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
          <div className="flex flex-row items-start">
            <img className="p-[5%] pl-[8%] w-[300px] h-[auto]" src="https://i.ibb.co/5hz8T1F/zaroa.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[30px] text-left tracking-[2%] font-[500] font-[Poppins]">Courses</h1>
              <p className="text-[11px] text-left tracking-[2%] font-[400] font-[Poppins]">I have completed courses in "Python from Beginner to Advanced," "NextJS Crash Course," "React Crash Course," and earned the INF 03 qualification, significantly enhancing my skills and professional development.</p>
            </div>
          </div>
        </div>
        <div className="w-[80vh] h-[28vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
          <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
          <div className="flex flex-row items-start">
            <img className="p-[5%] pl-[8%] w-[300px] h-[auto]" src="https://i.ibb.co/zQqGfZk/majk.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[30px] text-left tracking-[2%] font-[500] font-[Poppins]">Freelancing</h1>
              <p className="text-[11px] text-left tracking-[2%] font-[400] font-[Poppins]">I have honed my skills through various freelancing projects in graphic design, web development, and mixing engineering. My dedication to delivering high-quality work on time has earned me a reputation for reliability and excellence.</p>
            </div>
          </div>
        </div>
    </div>
    <div className="flex flex-col m-4 gap-4">
        <div className="w-[80vh] h-[28vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
          <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
          <div className="flex flex-row items-start">
            <img className="p-[5%] pl-[8%] w-[300px] h-[auto]" src="https://i.ibb.co/n864LLB/foto.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[30px] text-left tracking-[2%] font-[500] font-[Poppins]">School		</h1>
              <p className="text-[11px] text-left tracking-[2%] font-[400] font-[Poppins]">My education includes top grades in computer science and has developed my critical thinking and problem-solving skills through various projects and collaborations.</p>
            </div>
          </div>
        </div>
        <div className="w-[80vh] h-[28vh] rounded-b-2xl rounded-t-[5px]" style={{ background: "linear-gradient(110.491deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)" }}>
          <div className="bg-[#4F228D] w-[100%] h-[5px] rounded-t-2xl"></div>
          <div className="flex flex-row items-start">
            <img className="p-[5%] pl-[8%] w-[300px] h-[auto]" src="https://i.ibb.co/TWbMQRV/kubek.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[30px] text-left tracking-[2%] font-[500] font-[Poppins]">Work</h1>
              <p className="text-[11px] text-left tracking-[2%] font-[400] font-[Poppins]">My career includes a position at PapillonMedia, where I excelled in project management and fast task execution. Clients have distinguished me for my professionalism.</p>
            </div>
          </div>
        </div>
  </div>
  </div>
    </div>
    </div>
    


    
    <div className="hero min-h-[100vh] font-customFont" id="hero">
    <div className="flex  flex-col items-center justify-center ">
    <p className="text-[24px] text-center tracking-[2%] font-[400] max-w-[100%]">I'm currently looking to join a <span className="text-[#7127BA]">cross-functional</span> team <br></br>
    <span className="text-[17px] ">that values improving people's lives through accessible design</span> </p>
        <img className="w-[80%] mt-8" src="https://i.ibb.co/Y0FM4Fx/Skills.png"/>
    </div>
  </div>



  <div className="hero min-h-[100vh] font-[Poppins] " id="hero">
  
  <div className="flex  flex-col max-w-[50%]">
    <p className="text-[16px] text-left tracking-[2%] max-w-[100%] text-[#9857D3] font-bold">Featured  Project</p>
    <p className="text-[34px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">ViralClothes</p>
    <div className="rounded-2xl  p-10 backdrop-blur-sm" >
      <p className="text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">ViralClothes is an innovative application designed to help users stay on top of the latest fashion trends on TikTok. By leveraging keyword-based search algorithms, ViralClothes curates a dynamic list of trending clothing items, ensuring users are always in vogue.</p>
    </div>
  </div>

</div>


</main>

    </>
  );
}
export default Home;