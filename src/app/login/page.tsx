"use client";


import React, { FormEvent, useState } from "react";
import styles from "./login.module.css";


import { useRouter } from "next/navigation";
import Navbar from "@/component/navbar/NavBar";
import backButton from "@/component/backButton";
import InputField from "@/component/field/InputField";
import PasswordButton from "@/component/field/PasswordButton";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const isFormFilled = Boolean(username.trim() && password.trim());

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    const JSONdata = JSON.stringify(data);

    try {
      // Store the token in local storage or cookies

      localStorage.setItem("token", "test token" /*result.token*/); // Replace 'token' with the actual key you want to use

      // Redirect to the About page
      router.push("/profile");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., show an error message)
    }

  }

  return (
    <>
      <Navbar
        leftContent={backButton(<h1>Back</h1>)}
      ></Navbar>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Login</h1>
          <InputField
            id="username"
            type="text"
            placeholder="Enter Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <InputField
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <PasswordButton
              type="button"
              showPassword={showPassword}
              hidden={!password}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputField>


          <button type="submit" className={styles.button} disabled={!isFormFilled}>Login</button>
          <p className={styles.register}>
            No account? <Link href="/register">Register here</Link>
          </p>
        </form>
      </div>
    </>
  )
}