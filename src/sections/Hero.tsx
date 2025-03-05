import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg"
import StartIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from '@/components/HeroOrbit';
export const HeroSection = () => {
  return <div className='py-32 md:py-48 relative z-10 overflow-x-clip ' id='hero'  >
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>


      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>
      <div className=' size-[620px] absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
      <div className=' size-[820px] absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
      <div className=' size-[1020px] absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
      <div className=' size-[1220px] absolute inset-0  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
      {/* shouldOrbit?: boolean; shouldSpin?: boolean; orbitDuration?: string; spinDuration?: string; */}
      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-5 text-emerald-300/20"/>

      </HeroOrbit>
      <HeroOrbit size={550} rotation={0} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="6s" >
        <StartIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-10 text-emerald-300/20" />

      </HeroOrbit>
      <HeroOrbit size={520} rotation={-42} shouldOrbit orbitDuration="38s">
        <SparkleIcon className="size-2 bg-emerald-300/20 rounded-full" />

      </HeroOrbit>
      <HeroOrbit size={590} rotation={100}shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
        <StartIcon className="size-8 text-emerald-300" />

      </HeroOrbit>
      
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-2 bg-emerald-300/20 rounded-full" />

      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-14 text-emerald-300/20" />

      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-3 bg-emerald-300/20 rounded-full" />

      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s" >
        <StartIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      

      
     
      
    </div>




    <div className="container" >
      <div className='flex flex-col items-center '>
        <Image src={memojiImage} className='size-[100px]' alt="Person peeking from behind laptop" />
        <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full
          relative'>
            <div className='bg-green-500 absolute inset-0  rounded-full animate-ping'></div>
          </div>
          <div className='text-sm font-medium'>Available for new projects</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web applications.Let's discuss your next project.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <a href='#project'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl pointer-events-auto z-10'>
          <span className='font-semibold z-10'>Explore My Work</span>
          <ArrowDown className="size-4 z-10" />
        </button>
        </a>
       <a href='https://www.linkedin.com/in/ahmad-evs-a86938239/'>
       <button className='inline-flex  z-10 items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl '>
          <span className='z-10'>👋</span>
          <span className='font-semibold z-10'>Let's Connect</span>
        </button>
       </a>
      </div>
    </div>
  </div>;
};
