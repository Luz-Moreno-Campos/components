
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {

  const navLinks = [
    { index: 0, name: 'About Us', url: 'https://www.components.com/about' },
    { index: 1, name: 'Adventures', url: 'https://www.components.com/adventures' },
    { index: 2, name: 'Destinations', url: 'https://www.components.com/destinations' },
    { index: 3, name: 'Contact', url: 'https://www.components.com/contact' }
  ]

  const title = "Go Wild Travel";
  const text = "Your Next Adventure Starts Here"

  const primaryBtnLabel = "Explore Trips"
  const secondaryBtnLabel = "Book Now"


  const galleryImages = [
    { index: 0, caption: "Hike the Mountains", alt: 'A man mountain-hiking', url:'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { index: 1, caption: 'Feel the Heights', alt: 'A person paraglinding', url: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { index: 2, caption: 'Explore the Ocean Depths', alt: 'People diving', url: 'https://images.unsplash.com/photo-1517627043994-b991abb62fc8?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { index: 3, caption: 'Admire the Northern Lights', alt: 'The Northern Lights', url: 'https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]

  return (
    <>
      <Header navLinks={navLinks} />
     <Banner title={title} text={text} primaryBtnLabel={primaryBtnLabel} secondaryBtnLabel={secondaryBtnLabel}/>
      <Gallery galleryImages={galleryImages} />
      <Footer />
    </>
  );
}

export default App;
