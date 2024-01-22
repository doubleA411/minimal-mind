import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Projects from "@/components/ui/projects";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from 'next/image'

export default function Home() {

  const projects = [
    {
      title: "amateur",
      desc: "Standerized Format Resumes in a Few Minutes.",
      link: "amateur-alpha.vercel.app",
    },
    {
      title: "porto",
      desc: "Minimalist Portfolio Building Tool.",
      link: "https://theporto.me",
    },
    {
      title: "tweak",
      desc: "Windows Screenshot Editing Software.",
      link: "https://tweakit.live",
    },
    {
      title: "reform",
      desc: "Give your (g)form a Better Look.",
      link: "https://reform-alpha.vercel.app/",
    },
    {
      title: "caseit",
      desc: "Change The Letter Cases in Browser's Input Box.",
      link: "https://github.com/doubleA411/caseit",
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
      <h1 className=" absolute top-1/2 left-1/2 lg:mt-20 text-xl xs:mt-10  -translate-x-1/2 translate-y-1/2 lg:text-5xl lg:w-[550px] text-center font-bold">
        Boost Your Professional & Online Presence{" "}
      </h1>

      <div className=" flex lg:flex-row flex-col-reverse gap-4 w-full items-center justify-between">
        <div className="md:w-[400px]">
          <p className=" text-sm md:text-lg md:leading-12">
            Introducing <code>amateur</code> the easiest way to create
            professional resumes in standard format. Streamline your
            resume-building process with a user-friendly interface and seamless
            customization options. Craft impactful resumes effortlessly, perfect
            for job applications. No more formatting struggles focus on
            showcasing your skills with <code>amateur</code>. Your go-to
            solution for standout resumes!
          </p>
        </div>
        <video
          className=" rounded-lg border"
          src="/resume.mov"
          loop
          autoPlay
          controls
          width={600}
        ></video>
      </div>

      <div className=" flex lg:flex-row-reverse flex-col-reverse gap-4 w-full items-center justify-between">
        <div className="md:w-[400px]">
          <p className=" text-sm md:text-lg md:leading-12">
            Introducing <code>porto</code> your shortcut to a stunning online
            presence! Simply input your details, and voila your personalized
            website is ready to impress. No coding, no hassle just a seamless
            experience to showcase your talents. Deploy and share your
            professional portfolio with ease. Elevate your online presence
            effortlessly with <code>porto</code>.
          </p>
        </div>
        <video
          className=" rounded-lg border"
          src="/porto.mov"
          loop
          autoPlay
          controls
          width={600}
        ></video>
      </div>

      <div className="my-20 flex flex-wrap gap-8 w-full md:justify-evenly items-start justify-start">
        <div className=" flex flex-col gap-5 text-3xl font-black">
          <h1>005+ Countries</h1>
          <h1>100+ Users</h1>
          <p className=" text-zinc-300 font-normal text-sm">trusted across the globe </p>
        </div>
        <p className=" w-[400px] text-sm md:text-xl">
          Minimal Mind, more than a name Im your friendlyc companion in every endeavor. Expect a blend of reliability and
          warmth, where your satisfaction is our priority. Join our community
          for a delightful experience, Im not just
          building projects; building connections that last.
        </p>
      </div>
      <hr className=" dark:bg-white bg-black h-[1px] w-full" />

      <div className=" flex flex-col gap-8 w-full">
        <p className=" font-semibold text-2xl">Students Pack</p>
        <div className=" flex flex-wrap gap-4 ">
          {projects.slice(0, 2).map((e) => (
            <Projects
              key={e.title}
              title={e.title}
              desc={e.desc}
              link={e.link}
            />
          ))}
        </div>
      </div>
      <hr className="dark:bg-white bg-black h-[1px] w-full" />
      <div className=" flex flex-col gap-8 w-full">
        <p className=" font-semibold text-2xl">Social Pack</p>
        <div className=" flex flex-wrap gap-4 ">
          {projects.slice(2, 4).map((e) => (
            <Projects
              key={e.title}
              title={e.title}
              desc={e.desc}
              link={e.link}
            />
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
              <a href="https://www.instagram.com/aakashsuresh62">
                <li>Instagram</li>
              </a>
              <a href="https://twitter.com/aakashsuresh62">
                <li>Twitter</li>
              </a>
              <a href="https://www.linkedin.com/in/aakashsuresh62/">
                <li>LinkedIn</li>
              </a>
              <a href="https://github.com/doubleA411">
                <li>GitHub</li>
              </a>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <p>How to use ?</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <li>amateur</li>
              <li>porto</li>
              <li>tweak</li>
              <li>reform</li>
              <li>caseit</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <p>Contact</p>
            <ul className=" flex flex-col gap-4 text-zinc-400 cursor-pointer">
              <a href="mailto:doublea.py@gmail.com">
                <li>Email</li>
              </a>
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
