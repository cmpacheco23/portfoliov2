import downArrow from "../../assets/down.svg"
import sensi from "../../assets/sensi.png"
import github from '../../assets/githublogo.svg'
import githubWhite from '../../assets/githubwhite.svg'
import leftArrow from '../../assets/left.svg'
import rightArrow from '../../assets/right.svg'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="card-container">
        {/* start of card one */}
        <div className="w-80 rounded-2xl overflow-clip shadow-lg flex-shrink-0 border border-[#562266]"> 
          <img className="w-[263px] h-[147px] mx-auto mt-3.5 pt-3" src={sensi} alt="" />
          <div className="px-6 py-4">
            <h4 className="text-[#414141] font-semibold text-[24px]">Sensi Food</h4>
            <p>Full-stack food sensitivity tracker app that streamlines allergen tracking and dietary adjustments while fostering community engagement</p>
            <h4 className="text-[#414141] font-semibold text-[24px] ">Languages Used</h4>
            <ul className="text-[#414141]">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>EJS</li>
            </ul>
            <div className="relative group flex flex-col mb-3 justify-center items-center">
              <button className="w-[248px] h-[49px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-center text-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 relative bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF]">

                <a href="https://github.com/cmpacheco23/sensi-snacker-tracker"></a>
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] pr-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                    src={github}
                    alt="github logo"
                  />
                  <img
                    className="w-[33px] h-[25px] pr-2 absolute top-1.5 left-1 opacity-0 transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-0 group-hover:translate-y-0"
                    src={githubWhite}
                    alt="github logo"
                  />
                </div>
                GitHub</button>
            </div>
            
            <div className="relative group flex flex-col mb-3 justify-center items-center">
              <button className="w-[248px] h-[49px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-center text-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 relative bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF]">
                <a href="https://sensi-tracker.fly.dev/"></a>
                View App</button>
            </div>
            <div className="flex">
              <h4 className="text-[#562266] pr-3 font-semibold">More</h4>
              <img src={downArrow} alt="down arrow" />
            </div>
          </div>
        </div>
          {/* end of card one */}
        {/* start of card two */}
        <div className="w-80 rounded-2xl overflow-clip shadow-lg flex-shrink-0 border border-[#562266]"> 
          <img className="w-[263px] h-[147px] mx-auto mt-3.5 pt-3" src={sensi} alt="" />
          <div className="px-6 py-4">
            <h4 className="text-[#414141] font-semibold">Sensi Food</h4>
            <p>Full-stack food sensitivity tracker app that streamlines allergen tracking and dietary adjustments while fostering community engagement</p>
            <h4 className="text-[#414141] font-semibold">Languages Used</h4>
            <ul className="text-[#414141]">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>EJS</li>
            </ul>
            <div className="relative group flex flex-col mb-3 justify-center items-center">
              <button className="w-[248px] h-[49px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-center text-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 relative bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF]">

                <a href=""></a>
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] pr-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                    src={github}
                    alt="github logo"
                  />
                  <img
                    className="w-[33px] h-[25px] pr-2 absolute top-1.5 left-1 opacity-0 transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-0 group-hover:translate-y-0"
                    src={githubWhite}
                    alt="github logo"
                  />
                </div>
                Front-end</button>
            </div>
            <div className="relative group flex flex-col mb-3 justify-center items-center">
              <button className="w-[248px] h-[49px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-center text-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 relative bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF]">

                <a href=""></a>
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] pr-2 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                    src={github}
                    alt="github logo"
                  />
                  <img
                    className="w-[33px] h-[25px] pr-2 absolute top-1.5 left-1 opacity-0 transition-all duration-300 ease-in-out transform group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-0 group-hover:translate-y-0"
                    src={githubWhite}
                    alt="github logo"
                  />
                </div>
                Back-end</button>
            </div>
            <div className="relative group flex flex-col mb-3 justify-center items-center">
              <button className="w-[248px] h-[49px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-center text-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 relative bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF]">
                <a href=""></a>
                View App</button>
            </div>
            <div className="flex">
              <h4 className="text-[#562266] pr-3 font-semibold">More</h4>
              <img src={downArrow} alt="down arrow" />
            </div>
          </div>
        </div>
          {/* end of card one */}

      </div>
      <button className=" w-[234px] h-[39px] text-[#562266] border border-[#562266] rounded-3xl flex items-center justify-between text-[24px] bg-[#FFF] hover:bg-[#A677B5] hover:text-[#FFF] mt-6">
        <div className="flex">
          <img className="pr-3" src={leftArrow} alt="left arrow" />
          <p className="text-[#562266]">Back</p>
          <a href=""></a>
        </div>
        <div className="flex">
          <p className="pr-3 pl-6 text-[#562266]">Right</p>
          <img src={rightArrow} alt="left arrow" />
          <a href=""></a>
        </div>
      </button>
    </div>
  );
}

export default Projects;