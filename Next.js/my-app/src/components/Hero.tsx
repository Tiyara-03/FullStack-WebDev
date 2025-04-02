import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

export default function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="absolute top-3 left-2 inset-0">
        <img src="/chromecast.png" alt="na" />
      </div>
      <div className="p-4 z-10 relative w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent">Master the art of music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi saepe iure, repudiandae commodi ad qui officiis voluptatum? Iste quisquam laudantium, veritatis tenetur reprehenderit quo expedita impedit illum nulla debitis?</p>
            <div className="mt-4">
                <Link href={"/courses"} >
                    <Button
                    borderRadius="1.75rem" className="" >
                        Explore Courses
                    </Button>
                </Link>
            </div>
      </div>
    </div>
  )
}
