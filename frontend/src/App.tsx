import { Form, Formik } from "formik";

import { Button } from "./components/Elements/Button";
import SelectField from "./components/Form/SelectField";
import AppProvider from "./providers/AppProvider";

const options = [
  { label: "Buzina", value: "Sergipe" },
  { label: "Indio", value: "Emo bombado" },
];

function App() {
  return (
    <AppProvider>
      <Formik
        initialValues={{ alicate: "Sergipe", alicatero: "Emo bombado" }}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          throw new Error("Cu");
        }}
      </Formik>
    </AppProvider>
  );
}

export default App;
