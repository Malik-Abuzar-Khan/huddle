import BuildCommunity from './componenets/build_community/BuildCommunity';
import FLowConversation from './componenets/flow_conversations/FLowConversation';
import Footer from './componenets/footer/Footer';
import GrowTogether from './componenets/grow_together/GrowTogether';
import Header from './componenets/header/Header';
import HeroSection from './componenets/hero_section/HeroSection';
import YourUsers from './componenets/your_users/YourUsers';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    <GrowTogether />
    <FLowConversation />
    <YourUsers />
    <BuildCommunity />
    <Footer />
    </div>
  );
}

export default App;
