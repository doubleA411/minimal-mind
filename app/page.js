import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Projects from "@/components/ui/projects";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from 'next/image'

export default function Home() {

  const projects = [
    {
      title: "Resume Builder",
      desc: "Standerized Format Resumes in a Few Minutes.",
      link: "",
    },
    {
      title: "porto",
      desc: "Minimalist Portfolio Building Tool.",
      link: "https://theporto.me",
    },
    {
      title: "Tweak",
      desc: "Windows Screenshot Editing Software.",
      link: "https://tweakit.live",
    },
    {
      title: "reform",
      desc: "Give your (g)form a Better Look.",
      link: "",
    },
    {
      title: "caseit",
      desc: "Change The Letter Cases in Browser's Input Box.",
      link: "",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 lg:justify-between p-10 lg:p-24">
      <div className=" flex justify-between w-full">
        <Avatar>
          <AvatarImage src={"/aakash.png"} />
          <AvatarFallback className="dark:text-white">AA</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
      <hr className=" dark:bg-white bg-black h-[1px] w-full" />

      <div className="grid">
        <div className=" flex flex-col gap-8   ">
          <p className=" font-bold lg:text-6xl dark:text-white text-black">
            The Suite of Minimal Mind.
          </p>
          <p className=" text-zinc-400 lg:text-lg">
            It empowers CS students and graduates with specialized tools to
            enhance their professional profiles, fostering uniqueness on social
            media platforms for a standout digital presence.
          </p>
          <div className=" flex gap-4">
            <Button variant="outline" className=" dark:text-white">
              Get Started
            </Button>
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>

        <div className="mb-20 bg-gradient-to-tr from-orange-400 to-blue-700 w-[200px] h-[100px] lg:w-[650px] lg:h-[300px] blur-[40px] lg:blur-[120px]"></div>
        <h1 className=" absolute top-1/2 left-1/2 lg:mt-20 text-xl   -translate-x-1/2 translate-y-1/2 lg:text-5xl lg:w-[550px] text-center font-bold">Boost Your Professional & Online Presence  </h1>

    {/* <div className="mb-20 p-24 border rounded-lg flex flex-col">
      <p>Start with Resume Building</p>

    </div> */}


      <div className=" flex flex-col gap-8 w-full">
        <p className=" font-semibold text-2xl">Students Pack</p>
        <div className=" flex flex-wrap gap-4 ">
          {projects.slice(0, 2).map((e) => (
            <Projects key={e.title} title={e.title} desc={e.desc} link={e.link} />
          ))}
        </div>
      </div>
      <hr className="dark:bg-white bg-black h-[1px] w-full" />
      <div className=" flex flex-col gap-8 w-full">
        <p className=" font-semibold text-2xl">Social Pack</p>
        <div className=" flex flex-wrap gap-4 ">
          {projects.slice(2, 4).map((e) => (
            <Projects key={e.title} title={e.title} desc={e.desc} link={e.link} />
          ))}
        </div>
      </div>

      <hr className="dark:bg-white bg-black h-[1px] w-full" />
      <p className=" font-semibold text-2xl w-full">All Tools</p>
      <div className=" flex flex-wrap gap-4">
        {projects.map((project) => (
          <Projects
            key={project.title}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
      <hr className="dark:bg-white bg-black h-[1px] w-full" />

      <div className=" flex gap-8 w-full justify-between">
        <div className=" flex flex-col">
          <p className=" text-3xl">Minimal Mind</p>
          <p className=" text-zinc-400">minimal is everything;</p>
        </div>
        <div className=" flex flex-wrap gap-8">
          <div className=" flex flex-col gap-4">
            <p>Social links</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <p>How to use ?</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <li>Resume Builder</li>
              <li>porto</li>
              <li>Tweak</li>
              <li>reform</li>
              <li>caseit</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <p>Contact</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <li>Email</li>
              <li>Phone</li>
            </ul>
          </div>

          <div className=" flex flex-col gap-4">
            <p>Packs</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <li>Students Pack</li>
              <li>Social Pack</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
