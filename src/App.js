import FLowConversation from './componenets/flow_conversations/FLowConversation';
import GrowTogether from './componenets/grow_together/GrowTogether';
import Header from './componenets/header/Header';
import HeroSection from './componenets/hero_section/HeroSection';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    <GrowTogether />
    <FLowConversation />
    </div>
  );
}

export default App;
