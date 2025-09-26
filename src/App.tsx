import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Roadmap from './components/Roadmap';
import FourComponent from './components/FourComponent';
import Memories from './components/memories';
import FifthComponent from './components/fifthComponent';
import Memories2 from './components/memories2';
import SixthComponent from './components/sixthcomponent';
import Team from './components/team';

function App() {
  return (
    <div className="min-h-[300vh] bg-black">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center text-white text-sm font-medium tracking-wider">
          <div className="text-lg font-bold">
            Code Matrix<br />
          </div>
          <div className="hidden md:flex space-x-14">
            <a href="#" className="hover:text-blue-300 transition-colors">THE PROJECT</a>
            <a href="#" className="hover:text-blue-300 transition-colors">IMPACT IN ACTION</a>
            <a href="#" className="hover:text-blue-300 transition-colors">JOIN THE JOURNEY</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Marquee Section */}
      <Marquee />

      {/* Roadmap Section */}
      <Roadmap />
      <FourComponent />
      <Memories />
      <Memories2 />
      <FifthComponent />
      <SixthComponent />
      <Team />
      
    </div>
  );
}

export default App;