// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Loader from '../../components/Loader/Loader';
// import Navbar from '../../components/Navbar/Navbar';
// import HeroSlider from '../../components/HeroSlider/HeroSlider';
// import TrustStats from '../../components/TrustStats/TrustStats';
// import Services from '../../components/Services/Services';
// import StudyDestinations from '../../components/StudyDestinations/StudyDestinations';
// import ApplicationProcess from '../../components/ApplicationProcess/ApplicationProcess';
// import SuccessStories from '../../components/SuccessStories/SuccessStories';
// import TestPreparation from '../../components/TestPreparation/TestPreparation';
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// import About from '../../components/About/About';
// import Testimonials from '../../components/Testimonials/Testimonials';
// import CTASection from '../../components/CTASection/CTASection';
// import Contact from '../../components/Contact/Contact';
// import Footer from '../../components/Footer/Footer';
// import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
// import './home.css';

// const HomePage = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 850,
//       once: true,
//       offset: 40,
//       easing: 'ease-out-cubic',
//     });
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const loader = document.querySelector('.loader-shell');
//       if (loader) {
//         loader.classList.add('hidden');
//       }
//     }, 1600);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="home-page">
//       <Loader visible={true} />
//       <Navbar />
//       <main>
//         <HeroSlider />
//         <TrustStats />
//         <Services />
//         <StudyDestinations />
//         <ApplicationProcess />
//         <SuccessStories />
//         <TestPreparation />
//         <WhyChooseUs />
//         <About />
//         <Testimonials />
//         <CTASection />
//         <Contact />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default HomePage;



























import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import TrustStats from '../../components/TrustStats/TrustStats';
import Services from '../../components/Services/Services';
import StudyDestinations from '../../components/StudyDestinations/StudyDestinations';
import ApplicationProcess from '../../components/ApplicationProcess/ApplicationProcess';
import SuccessStories from '../../components/SuccessStories/SuccessStories';
import TestPreparation from '../../components/TestPreparation/TestPreparation';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTASection from '../../components/CTASection/CTASection';

import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import './home.css';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 40,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <Loader visible={loading} />
      <Navbar />
      <main>
        <HeroSlider />
        <TrustStats />
        <Services />
        <StudyDestinations />
        <ApplicationProcess />
        <SuccessStories />
        <TestPreparation />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTASection />
       
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;