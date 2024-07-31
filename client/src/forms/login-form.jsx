import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../schemas/user";

import {
  FormButton,
  FormError,
  FormField,
  FormHeader,
  FormInput,
  FormItem,
  FormLabel,
  FormLink,
  FormMessage,
  FormSuccess,
  Form,
} from "./../components/form/";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const LoginForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const lgForm = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
    mode: "onChange",
  });

  const login = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("ewis_sl_user", data.token);
        setSuccess("Successfully logged In");
        navigate("/dashboard");
      } else {
        setError("Username Or Password Incorrect");
      }
    } catch (error) {
      setError("Username Or Password Incorrect");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form>
      <div className="flex  items-center gap-3 mb-8 justify-center">
        <div className="bg-blue-200 rounded-full  w-10 h-10 p-2">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/forgot-password-8196882-6559358.png"
            alt="reset password"
          />
        </div>
        <h1 className="text- text-[#000] text-xl">Login</h1>
      </div>
      <form onSubmit={lgForm.handleSubmit(login)}>
        <FormField
          control={lgForm.control}
          name="usernameOrEmail"
          render={({ field, fieldState }) => (
            <FormItem>
              {/* <FormLabel text="username" htmlFor="username" /> */}
              <FormInput
                {...field}
                placeholder="Username or Email"
                type="text"
              />
              <FormMessage {...fieldState} />
            </FormItem>
          )}
        />
        <FormField
          control={lgForm.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              {/* <FormLabel text="password" htmlFor="password" /> */}
              <FormInput {...field} placeholder="password" type="password" />
              <FormMessage {...fieldState} />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <FormItem>
          <FormButton
            classes="w-full"
            text="Login"
            type="submit"
            isProcessing={isLoading}
          />
        </FormItem>
        <FormLink href="/forgot-password" text="Forgot Password" />
      </form>
    </Form>
  );
};

export default LoginForm;
