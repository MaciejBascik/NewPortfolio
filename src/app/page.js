'use client'
import { GiClick } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Home() {

  return (
    <>
    

<div className="bg-[#11071F] font-customFont text-white">

  <div className="hero sectionWrapper2 min-h-[50vh] md:min-h-[90vh] relative" id="hero">
    <div className="text-[12px] md:text-[19px] text-left tracking-[2%]  absolute bottom-[75%] top-[17%] md:bottom-[75%] md:ml-[80px] 3xl:bottom-[75%] 3xl:mt-[50px] ">
      <p>Hello! I Am <span className="text-[#7127BA]">Maciej Bascik</span></p>
      <img alt="appImage"   className="w-[45%] bottom-[-100%] absolute md:right-[70%] md:bottom-[-140%] lg:right-[70%] lg:bottom-[-130%] lg:w-[50%] 3xl:right-[80%] 3xl:bottom-[-650%] 3xl:w-[50%]" src="https://i.postimg.cc/3N5DBXPy/Arrow.png"/> 

    </div>
    <div className=" flex items-center justify-center ">
        <img alt="appImage"  className="w-[50%] md:w-[35%] mr-2" src="https://i.postimg.cc/FHtnL8Wm/Me.png"/>
        <div className="max-w-[40%] ">
        <p className="text-[9px] md:text-[19px] text-left tracking-[2%] underline">A Developer who</p>
        <h1 className="leading-[126.7%] tracking-[2%] text-[25px] md:text-[50px] text-white ">Makes sure the UI is <span className="text-[#7127BA]">intuitive</span>...</h1>
        <p className="text-[10px] lg:text-[14px] text-left mt-[20px]">Because if my mom can&apos;t use it, i&apos;ve failed.</p>
      </div>
    </div>

  </div>
  <div className="flex items-center justify-center min-h-[50vh] md:min-h-[50vh]">
  <div className="max-w-[85%] md:max-w-[45%] ">
    <h1 className="leading-[126.7%] tracking-[2%] md:text-[25px] lg:text-[50px] text-[20px] text-white ">I&apos;m a Software Engineer. </h1>
    <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%]">Currently, I&apos;m a Software Engineer at <span className="text-[#7127BA]">PapillonMedia</span></p>
    <p className="text-[10px] leading-[166.7%] md:text-[13px] lg:text-[18px] text-left mt-[20px] font-[300]">A Computer Science Student, functioning in the industry for 1+ years now.
    I make meaningful and delightful digital products that create an equilibrium between user needs and business goals. I am still improving and learning new things everyday to make my products perfect.</p>
    </div>
    </div>
    
  <div id="about" className="hero min-h-[100vh] w-[100%]" style={{backgroundImage: "url('https://i.ibb.co/1zC7WW1/Frame-1.png')"}}>
  <div className="flex flex-col">
    <div className="m-[2vh]">
          <h1 className="leading-[126.7%] tracking-[2%] text-[25px] md:text-[35px] text-white justify-normal">Experience</h1>
    </div>
    <div className="justify-center items-center flex flex-col md:flex-col lg:flex-row ">
      <div className="flex flex-col m-4 gap-4 lg:gap-6 lg:m-10">
      <div className="card cardWrapper w-[42vh] h-[27vh] md:w-[80vh] md:h-[32.5vh] lg:w-[80vh] lg:h-[35.5vh]  3xl:h-[30vh]  rounded-b-2xl rounded-t-[5px]" >

          <div className="flex flex-row items-start">
            <img alt="appImage"  className="hidden md:flex p-[5%] pl-[8%] w-[150px] md:w-[300px] h-[auto]" src="https://i.ibb.co/5hz8T1F/zaroa.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[20px] lg:text-[30px] 3xl:text-[35px] text-left tracking-[2%] font-[500] font-[Poppins]">Courses</h1>
              <p className="mt-3 3xl:mt-8 text-[10px] md:text-[11px] lg:text-[13px] 3xl:text-[15px] text-left tracking-[2%] font-[400] font-[Poppins]">I have completed courses in &quot;Python from Beginner to Advanced&quot;, &quot;NextJS Crash Course&quot;, &quot;React Crash Course&quot;, and earned the INF 03 qualification, significantly enhancing my skills and professional development.</p>
            </div>
          </div>
        </div>
        <div className="card cardWrapper w-[42vh] h-[27vh] md:w-[80vh] md:h-[32.5vh] lg:w-[80vh] lg:h-[35.5vh]  3xl:h-[30vh] rounded-b-2xl rounded-t-[5px]" >
            <div className="flex flex-row items-start">
            <img alt="appImage"  className="hidden md:flex p-[5%] pl-[8%] w-[150px] md:w-[300px] h-[auto]" src="https://i.ibb.co/zQqGfZk/majk.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[20px] lg:text-[30px] 3xl:text-[35px] text-left tracking-[2%] font-[500] font-[Poppins]">Freelancing</h1>
              <p className="mt-3 3xl:mt-8 text-[10px] md:text-[11px] lg:text-[13px] 3xl:text-[15px] text-left tracking-[2%] font-[400] font-[Poppins]">I&apos;ve honed skills in graphic design, web development, and mixing engineering through freelancing, earning a reputation for reliability and excellence by delivering high-quality work on time.</p>
            </div>
          </div>
        </div>
    </div>
    <div className=" flex flex-col  gap-4">
        <div className="card cardWrapper w-[42vh] h-[27vh] md:w-[80vh] md:h-[32.5vh] lg:w-[80vh] lg:h-[35.5vh]  3xl:h-[30vh] rounded-b-2xl rounded-t-[5px]">
               <div className="flex flex-row items-start">
            <img alt="appImage"  className="hidden md:flex p-[5%] pl-[8%] w-[150px] md:w-[300px] h-[auto]" src="https://i.ibb.co/n864LLB/foto.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[20px] lg:text-[30px] 3xl:text-[35px] text-left tracking-[2%] font-[500] font-[Poppins]">School</h1>
              <p className="mt-3 3xl:mt-8 text-[10px] md:text-[11px] lg:text-[13px] 3xl:text-[15px] text-left tracking-[2%] font-[400] font-[Poppins]">My education includes top grades in computer science and has developed my critical thinking and problem-solving skills through various projects and collaborations.</p>
            </div>
          </div>
        </div>
        <div className="card cardWrapper   w-[42vh] h-[27vh] md:w-[80vh] md:h-[32.5vh] lg:w-[80vh] lg:h-[35.5vh] 3xl:h-[30vh] rounded-b-2xl rounded-t-[5px]">
            <div className="flex flex-row items-start">
            <img  alt="appImage"  className="hidden md:flex p-[5%] pl-[8%] w-[150px] md:w-[300px] h-[auto]" src="https://i.ibb.co/TWbMQRV/kubek.png" />
            <div className="p-[72px] pt-9 pl-5">
              <h1 className="text-[20px] lg:text-[30px] 3xl:text-[35px] text-left tracking-[2%] font-[500] font-[Poppins]">Work</h1>
              <p className="mt-3 3xl:mt-5 text-[10px] md:text-[11px] lg:text-[13px] 3xl:text-[16px] text-left tracking-[2%] font-[400] font-[Poppins]">My career includes a position at PapillonMedia, where I excelled in project management and fast task execution. Clients have distinguished me for my professionalism.</p>
            </div>
          </div>
        </div>
  </div>
  </div>
    </div>
    </div>
    


    
    <div className="hero min-h-[70vh] md:min-h-[100vh] font-customFont" id="looking">
      <div className="flex  flex-col items-center justify-center ">
      <p className="text-[13px] md:text-[21px] lg:text-[24px] text-center tracking-[2%] font-[400] max-w-[100%]">I&apos;m currently looking to join a <span className="text-[#7127BA]">cross-functional</span> team <br></br>
      <span className="text-[9px] md:text-[14px] lg:text-[17px]  ">that values improving people&apos;s lives through accessible design</span> </p>
          <img  alt="appImage"  className="w-[100%] md:w-[80%] mt-3 md:mt-8" src="https://i.ibb.co/Y0FM4Fx/Skills.png"/>
      </div>
    </div>






  <div className="hero min-h-[60vh] md:min-h-[100vh] font-[Poppins] flex flex-col p-10" id="projects">
  
  <div className="flex  flex-col max-w-[80%] mr-[35%] md:max-w-[50%] md:mr-[20%]">
    <p className="text-[8px] md:text-[16px] text-left tracking-[2%] max-w-[100%] text-[#9857D3] font-semibold">Featured  Project</p>
    <div className="flex flex-row">
    <p className="text-[17px] md:text-[34px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6] mb-5 font-semibold">ViralClothes</p>
    <div className="w-[18.7px] h-[18.7px] md:w-[37.4px] md:h-[37.4px] flex flex-row mt-1 ml-2 md:mt-2 md:ml-3">
      <img alt="appImage"  src="https://i.ibb.co/4FVh4Y5/Card.png"/>
      <img alt="appImage"  src="https://i.ibb.co/JrzbcGF/Card2.png"/>
    </div>
    </div>


    <div className="relative z-0 flex flex-row">
      <div className="card relative z-10 w-[100%] md:w-[80%]">
        <div className="cardWrapper p-3 md:p-5 lg:p-10 flex flex-row">
          <p className="text-[9px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">
            ViralClothes is an innovative application designed to help users stay on top of the latest fashion trends on TikTok. By leveraging keyword-based search algorithms, ViralClothes curates a dynamic list of trending clothing items, ensuring users are always in vogue.
          </p>

        </div>
      </div>
      <img alt="appImage"  className="w-[100%] absolute z-0 bottom-[-5%] left-[125%] md:w-[100%] md:bottom-[-8vh] md:left-[100%] lg:bottom-[-30vh] lg:left-[100%] transform -translate-x-1/2" src="https://i.ibb.co/HD9VBQ6/Mask-group.png"/>
    </div>
    <div className="flex flex-row m-5 gap-4 justify-center align-middle items-center  z-0">
    <a href="https://viralclothes.vercel.app/"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"  /></a>
    <p className="text-[10px] md:text-[13px] lg:text-[18px]  text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Demo</p>
    <a href="https://github.com/MaciejBascik/ViralClothes"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"/></a>
    <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Github</p>
    </div>




  </div>


  <div className="flex  flex-col max-w-[80%] ml-[35%] md:max-w-[50%] md:ml-[20%] my-[10%]">
    <p className="text-[8px] md:text-[16px] text-right tracking-[2%] max-w-[100%] text-[#9857D3] font-semibold">Featured  Project</p>
    <div className="flex flex-row ml-auto">
    <div className="w-[18.7px] h-[18.7px] md:w-[37.4px] md:h-[37.4px] flex flex-row mr-6 mt-[2px] md:mt-2 md:mr-12">
      <img alt="appImage"  src="https://i.ibb.co/4FVh4Y5/Card.png"/>
      <img alt="appImage"  src="https://i.ibb.co/4Z4btNT/es.png"/>
    </div>

    <p className="text-[17px] md:text-[34px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6] mb-5 font-semibold">SoundSwipe</p>


    </div>

    <div className="relative flex flex-row ">
      <div className="card relative z-10 w-[100%] md:w-[80%] ml-[auto]">
        <div className="cardWrapper p-3 md:p-5 lg:p-10 flex flex-row">
          <p className="text-[9px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">
          SoundSwipe is an innovative mobile application designed to help users discover new music from various genres. Modeled after the intuitive interaction style of popular dating apps, app makes exploring and curating your music library a fun.
          </p>
        </div>
      </div>
      <img alt="appImage" className="absolute z-0 bottom-[-5%] left-[-25%] md:w-[100%] md:bottom-[-5vh] md:left-[-10%] lg:bottom-[-25vh] lg:left-[-10%] transform -translate-x-1/2  w-[100%]" src="https://i.ibb.co/7zF3WJW/Portfolio.png"/>
        </div>
    <div className="flex flex-row m-5 gap-4 justify-center align-middle items-center ml-auto">
      <a href="https://maciejbascik.github.io/SoundSwipe/"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]" /></a>
      <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Demo</p>
      <a href="https://github.com/MaciejBascik/SoundSwipe"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"/></a>
      <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Github</p>
    </div>


  </div>



  <div className="flex  flex-col max-w-[80%] mr-[35%] md:max-w-[50%] md:mr-[20%]">
    <p className="text-[8px] md:text-[16px] text-left tracking-[2%] max-w-[100%] text-[#9857D3] font-semibold">Featured  Project</p>
    <div className="flex flex-row">
    <p className="text-[17px] md:text-[34px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6] mb-5 font-semibold">Salad Delight UI</p>
    <div className="w-[18.7px] h-[18.7px] md:w-[37.4px] md:h-[37.4px] flex flex-row mt-1 ml-2 md:mt-2 md:ml-3">
      <img alt="appImage"  src="https://i.ibb.co/4FVh4Y5/Card.png"/>
      <img alt="appImage"  src="https://i.ibb.co/JrzbcGF/Card2.png"/>
    </div>
    </div>


    <div className="relative z-0 flex flex-row">
      <div className="card relative z-10 w-[100%] md:w-[80%]">
        <div className="cardWrapper p-3 md:p-5 lg:p-10 flex flex-row">
          <p className="text-[9px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">
          Salad Delight UI is a React Native application showcasing a beautifully designed user interface for a salad ordering app. Ideal for developers looking to learn and explore React Native.
          </p>

        </div>
      </div>
      <img alt="appImage"  className="w-[90%] 3xl:w-[60%] absolute z-0 bottom-[-5%] left-[125%] md:w-[90%] md:bottom-[-8vh] md:left-[100%] lg:bottom-[-10vh] lg:left-[100%] transform -translate-x-1/2" src="https://i.ibb.co/37MZn4v/Portfolio.png"/>
    </div>
    <div className="flex flex-row m-5 gap-4 justify-center align-middle items-center  z-0">
    <a href="https://github.com/MaciejBascik/SaladDelightUI/assets/96304157/92460e9b-9a31-4a16-b411-482a727bb05d"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"  /></a>
    <p className="text-[10px] md:text-[13px] lg:text-[18px]  text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Overview</p>
    <a href="https://github.com/MaciejBascik/SaladDelightUI-ReactNative"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"/></a>
    <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Github</p>
    </div>




  </div>

  
  <div className="flex  flex-col max-w-[80%] ml-[35%] md:max-w-[50%] md:ml-[20%] my-[10%]">
    <p className="text-[8px] md:text-[16px] text-right tracking-[2%] max-w-[100%] text-[#9857D3] font-semibold">Featured  Project (in progress)</p>
    <div className="flex flex-row ml-auto">
    <div className="w-[18.7px] h-[18.7px] md:w-[37.4px] md:h-[37.4px] flex flex-row mr-6 mt-[2px] md:mt-2 md:mr-12">
    <img alt="appImage"  src="https://i.ibb.co/4FVh4Y5/Card.png"/>
    <img alt="appImage"  src="https://i.ibb.co/JrzbcGF/Card2.png"/>
    </div>

    <p className="text-[17px] md:text-[34px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6] mb-5 font-semibold">CareerTrack</p>


    </div>

    <div className="relative flex flex-row ">
      <div className="card relative z-10 w-[100%] md:w-[80%] ml-[auto]">
        <div className="cardWrapper p-3 md:p-5 lg:p-10 flex flex-row">
          <p className="text-[9px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">
          App is designed to help you achieve your personal and professional goals through a step-by-step roadmap and personalized action plan. Just like a personal coach, our app provides a clear path to help you succeed.          </p>
        </div>
      </div>
      
      <img alt="appImage" className="w-[25%] 3xl:w-[20%] absolute z-0 bottom-[-5%] left-[-20%] md:w-[27%] md:bottom-[-8vh] md:left-[100%] lg:bottom-[-10vh] lg:left-[-2%] transform -translate-x-1/2" src="https://i.ibb.co/qNkgyJ3/image-removebg-preview.png"/>
        </div>
    <div className="flex flex-row m-5 gap-4 justify-center align-middle items-center ml-auto">
      <a href="https://github.com/MaciejBascik/carrertrack"><GiClick className="text-[20px] md:text-[30px] lg:text-[35px]"/></a>
      <p className="text-[10px] md:text-[13px] lg:text-[18px] text-left tracking-[2%] max-w-[100%] text-[#CCD6F6]">Github</p>
    </div>


  </div>
</div>


  <div className="hero min-h-[60vh] md:min-h-[100vh] font-customFont sectionWrapper" id="contact">
    <div className="flex  flex-col p-20 md:p-40">
      <p className="text-[18px]  md:text-[25px] text-left tracking-[2%] font-[200] max-w-[100%] font">
        Contact </p>
      <p className="text-[10px] md:text-[15px] text-left tracking-[2%] font-[200] max-w-[87%] md:max-w-[67%] mt-10 md:mt-20">
        I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
        through accessible design, or maybe you already have a project in mind? Let&apos;s connect. </p>
      <p className="text-[10px] md:text-[15px] text-left tracking-[2%] font-[200] max-w-[87%] md:max-w-[67%] mt-5 md:mt-10">
      <a href="mailto:maciej.b4scik@gmail.com">maciej.b4scik@gmail.com</a></p>
      <div className="flex  flex-row gap-3  mt-8">
      <a href="https://github.com/MaciejBascik"><FaGithub className="text-[20px] md:text-[35px]"/></a>
      <a href="https://www.linkedin.com/in/maciej-ba%C5%9Bcik-7148511b2/"><FaLinkedin className="text-[20px] md:text-[35px]"/></a>
      </div>
    </div>

  </div>

</div>

    </>
  );
}
export default Home;