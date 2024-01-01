import Link from "next/link";
import styles from "./backButton.module.css";
import React from "react";

export default function backButton(child: React.ReactNode) {
  return (
    <>
      <Link href="/" className={styles.backButton}>
        <svg className={styles.backArrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12 15l-6-5 6-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
        {child}
      </Link>
    </>
  )
}