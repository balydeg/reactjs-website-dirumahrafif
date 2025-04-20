
import parse from 'html-react-parser';
import '../styles/Home.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";


import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection, partnersList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";



function Home() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <section id="home">
        <img src={homeSection.image} />
        <div className="kolom">
          {parse(homeSection.content)}
          <h2>Tetap Sehat, Tetap Semangat</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, nobis.</p>
          <p><a href="" className="tbl-pink">Pelajari Lebih Lanjut</a></p>
        </div>
      </section>

      <section id="courses">
          <div className="kolom">
              {parse(coursesSection.content)}
          </div>
          <img src={coursesSection.image}/>
      </section>

      <section id="tutors">
        <div className="tengah">
            <div className="kolom">
                {parse(tutorsSection.content)}
            </div>
            <Tutors tutorsList={tutorsList} />
        </div>
      </section>

      <section id="partners">
        <div className="tengah">
          <div className="kolom">
              {parse(partnersSection.content)}
          </div>
          <Partners partnersList={partnersList} />
        </div>
      </section>

      <Contact contactSection={contactSection} />

    </div>

    <Footer />
    </>
  )
}

export default Home
