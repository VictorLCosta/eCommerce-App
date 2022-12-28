import Image from "./components/Elements/Image/Image";

function App() {
  return (
    <>
      <Image
        size="xs"
        src="https://dummyimage.com/400x400/000/ffffff&text=Dummy+Image"
      />
      <Image
        size="sm"
        src="https://dummyimage.com/400x400/000/ffffff&text=Dummy+Image"
      />
      <Image
        size="md"
        src="https://dummyimage.com/400x400/000/ffffff&text=Dummy+Image"
      />
      <Image
        size="lg"
        src="https://dummyimage.com/400x400/000/ffffff&text=Dummy+Image"
        avatar
      />
      <Image
        size="xl"
        src="https://dummyimage.com/400x400/000/ffffff&text=Dummy+Image"
      />
      <Image
        size="2xl"
        src="https://dummyimage.com/600x600/000/ffffff&text=Dummy+Image"
        circular
      />
    </>
  );
}

export default App;
