import foto from "./components/img/foto.jpg";
import { Profile } from "./components/profile";

function App() {
  return (
    <Profile
      img={foto}
      nome="John Doe"
      bio="Full-stack javascript developer at Acme Inc."
      email="john.doe@email.com"
      phone="+5511987654321"
      githubUrl="https://github.com"
      linkedlinUrl="https://linkedin.com"
      twitterUrl="https://twitter.com"
    />
  );
}

export default App;
