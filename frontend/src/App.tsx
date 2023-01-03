import { Form, Formik } from "formik";

import { Button } from "./components/Elements/Button";
import SelectField from "./components/Form/SelectField";

const options = [
  { label: "Buzina", value: "Sergipe" },
  { label: "Indio", value: "Emo bombado" },
];

function App() {
  return (
    <Formik
      initialValues={{ alicate: "Sergipe", alicatero: "Emo bombado" }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="p-4">
          <SelectField options={options} name="alicate" />
          <SelectField options={options} name="alicatero" size="md" />
          <Button type="submit" content="Bora" />
        </Form>
      )}
    </Formik>
  );
}

export default App;
