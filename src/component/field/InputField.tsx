import React from "react";
import styles from "./inputField.module.css"

export default function InputField({
                                     id,
                                     type = "text",
                                     placeholder,
                                     value,
                                     required,
                                     onChange,
                                     className,
                                     children,
                                   }: {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className={styles.label}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className={`${styles.input} ${className}`}
      />
      {children}
    </label>
  );
}
