
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
const footerlinks = [
  {
    title:'Github',
    href:'https://github.com/ahmadammad908',
  },
  {
    title:'Gmail',
    href:'mailto: ahmadammad.me789@gmail.com',
  },
  {
    title:'Linkedin',
    href:'https://www.linkedin.com/in/ahmad-ammad-545659355/',
  },
]
export const Footer = () => {
  return <footer className="relative z-20 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">Copyright © 2025 Ahmad Ammad. All rights reserved.</div>

        <nav className="flex flex-col md:flex-row items-center gap-8">
          {
            footerlinks.map((link) => (
              <>
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              </>
            ))
          }
         
        </nav>
      </div>
    </div>
  </footer>;
};
