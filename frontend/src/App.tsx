import { MdFacebook } from "react-icons/md";
import { Button } from "./components/Elements/Button";

function App() {
  return (
    <div>
      <Button size="xs" icon={MdFacebook} />
      <Button size="sm" icon={MdFacebook} />
      <Button size="md" icon={MdFacebook} content="teste" />
      <Button size="lg" icon={MdFacebook} content="teste" />
      <Button size="xl" icon={MdFacebook} content="teste" />
      <Button size="2xl" icon={MdFacebook} content="Teste" />
    </div>
  );
}

export default App;
