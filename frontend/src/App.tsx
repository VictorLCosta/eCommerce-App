import { Form, Formik } from "formik";
import { MdFacebook } from "react-icons/md";
import * as Yup from "yup";
import { Button } from "./components/Elements/Button";
import TextField from "./components/Form/TextField";

function App() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Escreva saporra direito"),
    lastname: Yup.string().required("Escreva saporra direito").min(8),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{ name: "Victor", lastname: "Lima", age: 0 }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ dirty, isSubmitting, isValid }) => (
        <Form className="p-8 w-full" autoComplete="off">
          {dirty && "ta sujo hein parça"}
          <br />
          <TextField
            size="xs"
            name="name"
            placeholder="Teste..."
            label="Maconha"
          />
          <br />
          <TextField
            size="sm"
            name="lastname"
            placeholder="Teste..."
            startIcon={MdFacebook}
          />
          <br />
          <TextField
            size="md"
            name="assimass"
            placeholder="Teste..."
            endIcon={MdFacebook}
          />
          <br />
          <TextField size="lg" name="assimas" placeholder="Teste..." />
          <br />
          <TextField size="xl" name="assima" placeholder="Teste..." />
          <br />
          <TextField size="2xl" name="age" placeholder="Teste..." />
          <br />
          <Button
            content="Submit"
            type="submit"
            disabled={isSubmitting || !dirty || !isValid}
          />
        </Form>
      )}
    </Formik>
  );
}

export default App;
