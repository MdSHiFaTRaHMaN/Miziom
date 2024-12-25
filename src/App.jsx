import AgencySection from "./Components/homepage/AgencySection";
import Bannar from "./Components/homepage/Bannar";
import BlogSection from "./Components/homepage/BlogSection";
import FaqSection from "./Components/homepage/FaqSection";
import Footer from "./Components/homepage/Footer";
import Gellary from "./Components/homepage/Gellary";
import Navbar from "./Components/homepage/Navbar";
import NewsletterSection from "./Components/homepage/NewsletterSection";
import ReviewSection from "./Components/homepage/ReviewSection";
import ServicesSection from "./Components/homepage/ServicesSection";
import TeamSuport from "./Components/homepage/TeamSuport";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Bannar />
      </div>
      <div id="about">
        <TeamSuport />
      </div>
      <div>
        <AgencySection />
      </div>
      <div id="service">
        <ServicesSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <div id="gellary">
        <Gellary />
      </div>
      <div>
        <NewsletterSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div>
        <ReviewSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
