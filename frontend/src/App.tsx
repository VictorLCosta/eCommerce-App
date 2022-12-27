import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "./components/Elements/Button";
import SelectField from "./components/Form/SelectField";

function App() {
  const validationSchema = Yup.object().shape({
    bands: Yup.string().required(),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{ names: "sonia" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="p-8 w-full" autoComplete="off">
          <SelectField
            name="names"
            size="lg"
            options={[
              { label: "Victor", value: "victor" },
              { label: "Sonia", value: "sonia" },
              { label: "Ademir", value: "ademir" },
            ]}
          />
          <Button type="submit" content="Bora" />
        </Form>
      )}
    </Formik>
  );
}

export default App;
