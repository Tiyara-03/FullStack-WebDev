import Featuredcourses from "@/components/Featuredcourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import MusicTestimonial from "@/components/MusicTestimonial";
import Webinar from "@/components/Webinar";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
        <Hero/>
        <Featuredcourses/>
        <WhyChoose/>
        <MusicTestimonial/>
        <Webinar/>
        <Instructors/>
        <Footer/>
      </main>
    </div>
  );
}

