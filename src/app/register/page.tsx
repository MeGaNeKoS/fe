"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/component/navbar/NavBar";
import InputField from "@/component/field/InputField";
import PasswordButton from "@/component/field/PasswordButton";
import backButton from "@/component/backButton";
import styles from "./register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormFilled = formData.username.trim() && formData.email.trim() && formData.password.trim();

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch
      console.error("Passwords do not match");
      return;
    }

    try {
      // API call for registration
      // Store token in cookies
      router.push("/profile"); // Redirect on successful registration
    } catch (error) {
      // Handle registration error with user feedback
      console.error("Registration error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  return (
    <>
      <Navbar
        leftContent={backButton(<h1>Back</h1>)}
      ></Navbar>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Register</h1>

          <InputField
            id="email"
            type="email"
            placeholder="Enter Email"
            required={true}
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            id="username"
            type="text"
            placeholder="Enter Username"
            required={true}
            value={formData.username}
            onChange={handleChange}
          />

          <InputField
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            required={true}
            value={formData.password}
            onChange={handleChange}
          >
            <PasswordButton
              showPassword={showPassword}
              hidden={!formData.password}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputField>

          <InputField
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required={true}
            value={formData.confirmPassword}
            onChange={handleChange}
          >
            <PasswordButton
              showPassword={showConfirmPassword}
              hidden={!formData.confirmPassword}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </InputField>

          <button type="submit" className={styles.button} disabled={!isFormFilled}>Register</button>
          <p className={styles.login}>
            Have an account? <Link href="/login">Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
