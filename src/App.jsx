import React, { useState, useEffect } from "react";
import "./App.css";
import saycheersimg1 from "./images/saycheersimg1.png";
import aboutsayhi from "./images/australia-collage-with-photos.jpg";
import qvm from "./images/qvm.jpeg";
import melairport from "./images/melairport.jpeg";
import opera from "./images/opera.jpeg";
import bondi from "./images/bondi.jpeg";
import reef from "./images/reef.jpeg";
import ullru from "./images/ullru.jpeg";
import  uaeCollage from "./images/uae-aboutus.jpeg";
import dxb from "./images/dbx.jpeg";
import auh from "./images/suh.jpeg";
import shj from "./images/shj.jpeg";
import dwc from "./images/dwc.jpeg"
// UAE Images - using placeholders for now
// const uaeCollage = "/api/placeholder/600/400"; // Placeholder for UAE collage
// const dxb = "/api/placeholder/400/300"; // Dubai International Airport
// const auh = "/api/placeholder/400/300"; // Abu Dhabi International Airport
// const shj = "/api/placeholder/400/300"; // Sharjah International Airport
// const dwc = "/api/placeholder/400/300"; // Al Maktoum International Airport

// SlideShow component for the About section
const SlideShow = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);
  
  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Say Cheers ${index === 0 ? 'Australia' : 'UAE'}`}
          className={`slideshow-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("all"); // 'all', 'australia', or 'uae'

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const filterLocationsByRegion = (region) => {
    setActiveRegion(region);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <div className="logo-text">
                Say<span>Cheers</span>
              </div>
            </div>
            
            <div className="mobile-menu-button" onClick={toggleMenu}>
              <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            
            <nav className={menuOpen ? 'active' : ''}>
              <ul>
                <li>
                  <a href="#home" onClick={closeMenu}>Home</a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>About</a>
                </li>
                <li>
                  <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
                </li>
                <li>
                  <a href="#locations" onClick={closeMenu}>Locations</a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>Contact</a>
                </li>
              </ul>
            </nav>
            <a href="#locations" className="btn find-booth-btn">
              Find a Booth
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Capture <span>Unforgettable</span> Moments in Australia & UAE
              </h1>
              <p>
                Take home more than just memories! Our custom photo booths at
                iconic landmarks in Australia and the UAE let you capture your journey with
                personalized, location-branded photos you can instantly share or
                print.
              </p>
              <a href="#how-it-works" className="btn">
                Discover How
              </a>
            </div>
            <div className="hero-image">
              <img
                src={saycheersimg1}
                alt="Say Cheers Photo Booth"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Say Cheers</h2>
          </div>
          <div className="about-content">
            <div className="about-images">
              <div className="slideshow-container">
                {/* Using React's useState and useEffect to create the slideshow */}
                <SlideShow images={[aboutsayhi, uaeCollage]} interval={2000} />
              </div>
            </div>
            <div className="about-text">
              <h3>We Create Tourist Memories That Last</h3>
              <p>
                Say Cheers is an innovative photo booth experience designed
                specifically for tourists visiting iconic destinations across Australia and the UAE.
                We believe that the best souvenirs aren't things you buy—they're moments you capture.
              </p>
              <p>
                Our custom-designed booths feature destination-specific
                branding, allowing you to commemorate your visit to landmarks
                like the Sydney Opera House in Australia or Dubai International Airport in the UAE,
                and many more locations across both regions.
              </p>
              <p>
                With Say Cheers, you're not just taking a photo—you're creating
                a personalized memento of your adventure that you can
                instantly share with friends and family around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Find a Booth</h3>
              <p>
                Locate a Say Cheers photo booth at one of our popular
                tourist destinations across Australia and the UAE. Look for our vibrant yellow and pink
                branding!
              </p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Strike a Pose</h3>
              <p>
                Step inside the booth, select your custom location template, and
                get ready to smile! Our staff will help you capture the perfect
                shot.
              </p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Share or Print</h3>
              <p>
                Instantly share your photos on social media by logging in
                through our booth, or print a physical copy to take home as a
                souvenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="locations">
        <div className="container">
          <div className="section-title">
            <h2>Our Locations</h2>
          </div>
          
          <div className={`region-filter ${activeRegion === 'australia' ? 'australia-active' : activeRegion === 'uae' ? 'uae-active' : ''}`}>
            <button 
              className={`filter-btn ${activeRegion === 'all' ? 'active' : ''}`}
              onClick={() => filterLocationsByRegion('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeRegion === 'australia' ? 'active' : ''}`}
              onClick={() => filterLocationsByRegion('australia')}
            >
              Australia
            </button>
            <button 
              className={`filter-btn ${activeRegion === 'uae' ? 'active' : ''}`}
              onClick={() => filterLocationsByRegion('uae')}
            >
              UAE
            </button>
          </div>
          
          <div className="locations-grid">
            {/* Australia Locations */}
            {(activeRegion === 'all' || activeRegion === 'australia') && (
              <>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${qvm})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Melbourne Location 1</h3>
                    <p>
                      Melbourne's historic market featuring custom "Welcome to Melbourne Location 1" photo template.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${melairport})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Melbourne Airport</h3>
                    <p>
                      Capture your arrival or departure with our "Melbourne Airport
                      welcomes you" photo booth.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${opera})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Sydney Opera House</h3>
                    <p>
                      Commemorate your visit to Australia's most iconic landmark
                      with a custom photo.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${bondi})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Bondi Beach</h3>
                    <p>
                      Capture your beach day at Australia's famous Bondi Beach with
                      our custom templates.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${reef})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Great Barrier Reef</h3>
                    <p>
                      Remember your Great Barrier Reef adventure with our
                      underwater-themed booth.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card australia">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${ullru})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Uluru</h3>
                    <p>
                      Take home a special memory from your visit to this sacred
                      Australian landmark.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
              </>
            )}
            
            {/* UAE Locations */}
            {(activeRegion === 'all' || activeRegion === 'uae') && (
              <>
                <div className="location-card uae">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${dxb})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Dubai International Airport (DXB)</h3>
                    <p>
                      The world's #1 international passenger airport - capture your arrival to the UAE!
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card uae">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${auh})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Abu Dhabi International Airport (AUH)</h3>
                    <p>
                      Home to Etihad Airways with the newly opened Midfield Terminal - perfect for premium travelers.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card uae">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${shj})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Sharjah International Airport (SHJ)</h3>
                    <p>
                      A budget airline hub popular among South Asian tourists - affordable photo experiences.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
                <div className="location-card uae">
                  <div
                    className="location-image"
                    style={{ backgroundImage: `url(${dwc})` }}
                  ></div>
                  <div className="location-details">
                    <h3>Al Maktoum International Airport (DWC)</h3>
                    <p>
                      An emerging tourism hub in Dubai South - capture memories at this next-gen airport.
                    </p>
                    <span className="coming-soon">Coming Soon</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Unique Features</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🖼️</div>
              <h3>Custom Location Templates</h3>
              <p>
                Each booth features templates specific to its location, complete
                with iconic branding and artwork from Australia and the UAE.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Instant Social Sharing</h3>
              <p>
                Log in to your social media accounts directly from our booth and
                share your photos instantly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖨️</div>
              <h3>Physical Prints</h3>
              <p>
                Take home a high-quality printed photo as a tangible memory of
                your adventures in Australia and the UAE.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍💼</div>
              <h3>Friendly Staff Assistance</h3>
              <p>
                Our staff are on hand to help you create the perfect photo and
                answer any questions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Fun Props & Accessories</h3>
              <p>
                Enhance your photos with location-specific props and accessories
                for added fun and cultural immersion.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Memories</h3>
              <p>
                Create lasting memories at a fraction of the cost of traditional
                tourist souvenirs.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Tourists Say</h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "We stumbled upon the Say Cheers booth at Melbourne Location 1 and decided to give it a try. Best souvenir from our trip to Melbourne! We shared it instantly with family back home and they loved it."
              </div>
              <div className="testimonial-author">Sarah &amp; John, USA</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Such a cool concept! The photo quality was amazing and the Melbourne Airport template made for a perfect welcome memory. The staff was super friendly and helped us get the perfect shot."
              </div>
              <div className="testimonial-author">Raj &amp; Priya, India</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "What a fun way to remember our visit to Australia! We took photos at three different Say Cheers booths during our trip. Affordable and much more personal than just buying generic souvenirs."
              </div>
              <div className="testimonial-author">The Petersons, Canada</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Have Questions or Suggestions?</h3>
              <p>
                We're expanding to more iconic locations across Australia and the UAE! If you have
                a suggestion for where we should place our next Say Cheers
                booth, or if you're a venue interested in hosting one, we'd love
                to hear from you.
              </p>
              <p>
                <strong>Email:</strong> hello@saycheers.io
              </p>
              <p>
                <strong>Operating Hours:</strong> Our booths are typically open
                during venue operating hours
              </p>
            </div>
            <div className="contact-form">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  alert("Thank you for your message!");
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="business">Business Partnership</option>
                    <option value="location">Location Suggestion</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much does it cost to use a Say Cheers photo booth?</h3>
              <p>
                Our photo booth services are affordably priced, with digital
                photos starting at $5 in Australia and 20 AED in the UAE. Printed photos start at $10/40 AED.
                Combo packages with both digital and physical copies are also available.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I share my photos on social media?</h3>
              <p>
                Our booths allow you to log in to your social media accounts
                directly from the touchscreen. Alternatively, we can email your
                digital photos to you instantly.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I use my own phone to take photos?</h3>
              <p>
                While our booths offer the highest quality photos with custom
                templates, you're welcome to use your phone to capture the
                moment as well!
              </p>
            </div>
            <div className="faq-item">
              <h3>Where are Say Cheers booths currently located?</h3>
              <p>
                We're a new startup currently finalizing our first
                installations across Australia and the UAE. Check our Locations section for the latest
                updates on booth deployments.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are the booths wheelchair accessible?</h3>
              <p>
                Yes, all our booths are designed to be fully accessible to
                everyone, including wheelchair users.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I book a Say Cheers booth for a private event?</h3>
              <p>
                Absolutely! We offer custom-branded photo booth services for
                private events, corporate functions, and special occasions in both Australia and the UAE.
                Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Say Cheers</h3>
              <p>
                Capturing iconic locations and your precious
                memories in a single photo. The perfect souvenir for your
                adventures in Australia and the UAE!
              </p>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li>
                  <a href="#locations">Locations</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Popular Locations</h3>
              <ul>
                <li>
                  <a href="#locations">Australia</a>
                </li>
                <li>
                  <a href="#locations">Sydney Opera House</a>
                </li>
                <li>
                  <a href="#locations">Dubai International Airport</a>
                </li>
                <li>
                  <a href="#locations">Abu Dhabi International Airport</a>
                </li>
                <li>
                  <a href="#locations">Sharjah International Airport</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>hello@saycheers.io</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Say Cheers Photo Booth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;