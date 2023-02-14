/* eslint-disable @typescript-eslint/return-await */
import { Form, Formik } from "formik";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import * as yup from "yup";

import { Button } from "@/components/Elements/Button";
import TextField from "@/components/Form/TextField";
import { useStore } from "@/stores";

import bgImage from "../assets/bg-login-modal.jpg";

import type { LoginDTO } from "../api/login";

export function LoginModal() {
  const {
    authStore: { isLogging, login },
    modalStore: { closeModal },
  } = useStore();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Invalid email address"),
    password: yup.string().required("Inform your password"),
  });

  const handleLogin = async (loginDto: LoginDTO) => {
    await login(loginDto);
    closeModal();
  };

  return (
    <div className="flex justify-center items-stretch bg-white w-[100rem] h-[45rem] rounded-sm">
      <div
        className="relative h-full w-1/2 hidden items-center bg-cover bg-no-repeat text-white md:flex"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        <div className="w-full px-24 z-20">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl text-left my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 left-0 p-4 space-x-4 flex justify-center z-20">
          <Button icon={MdOutlineFacebook} size="xs" variant="basic-white" />
          <Button icon={AiOutlineTwitter} size="xs" variant="basic-white" />
          <Button icon={AiOutlineInstagram} size="xs" variant="basic-white" />
          <Button icon={IoLogoLinkedin} size="xs" variant="basic-white" />
        </div>
      </div>

      <div className="w-full flex justify-center items-center h-full bg-white">
        <div>
          <h2 className="my-6 text-7xl font-semibold text-eerie-black">
            Aware
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async ({ email, password }) =>
              await handleLogin({ email, password })
            }
          >
            {({ isValid, dirty }) => (
              <Form className="w-full">
                <TextField
                  name="email"
                  placeholder="Email"
                  size="lg"
                  className="mb-2 mt-4 w-[40rem]"
                />
                <TextField
                  name="password"
                  placeholder="Password"
                  type="password"
                  size="lg"
                  className="mb-2 mt-4 w-[40rem]"
                />
                <div className="text-right text-lg text-gray-400 hover:underline hover:text-onyx transition-colors ease-in">
                  <a href="/">Forgot your password?</a>
                </div>
                <Button
                  className="rounded-full uppercase w-60 mx-auto mb-2 mt-4"
                  content="Login"
                  size="xl"
                  type="submit"
                  disabled={!isValid || !dirty}
                  loading={isLogging}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
