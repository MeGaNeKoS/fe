import React from "react";
import styles from "./PasswordButton.module.css"


function ClosedEyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="none" viewBox="0 0 20 17">
      <path fill="url(#a)"
            d="M3.595.176a.491.491 0 0 0-.349-.175.485.485 0 0 0-.363.139.56.56 0 0 0-.034.76l1.763 2.08C1.46 4.96.104 8.136.045 8.28a.545.545 0 0 0 0 .435c.034.072.737 1.745 2.313 3.419 1.576 1.673 3.965 3.419 7.642 3.419a9.995 9.995 0 0 0 4.457-1.022l1.948 2.288a.475.475 0 0 0 .373.18.467.467 0 0 0 .339-.144.551.551 0 0 0 .034-.76L3.595.177Zm4.126 6.45 3.813 4.477a2.733 2.733 0 0 1-1.92.436 2.829 2.829 0 0 1-1.736-.977 3.188 3.188 0 0 1-.747-1.938 3.22 3.22 0 0 1 .59-1.999ZM10 14.466c-2.66 0-4.982-1.03-6.897-3.066A12.09 12.09 0 0 1 1.08 8.498c.364-.742 1.702-3.184 4.236-4.695l1.711 2.008a4.337 4.337 0 0 0-.915 2.758 4.318 4.318 0 0 0 1.011 2.72 3.82 3.82 0 0 0 2.438 1.336 3.71 3.71 0 0 0 2.66-.708l1.508 1.773a9.066 9.066 0 0 1-3.728.777Zm9.955-5.752c-.034.09-.881 2.08-2.787 3.907a.49.49 0 0 1-.72-.045.552.552 0 0 1-.13-.394.573.573 0 0 1 .172-.375 12.06 12.06 0 0 0 2.432-3.31 12.088 12.088 0 0 0-2.025-2.904C14.982 3.56 12.66 2.528 10 2.528a9.252 9.252 0 0 0-1.67.145.486.486 0 0 1-.357-.11.573.573 0 0 1-.116-.729.51.51 0 0 1 .304-.229A10.24 10.24 0 0 1 10 1.442c3.677 0 6.185 1.855 7.642 3.42a14.37 14.37 0 0 1 2.313 3.418.545.545 0 0 1 0 .435Zm-9.413-3.239a.507.507 0 0 1-.326-.226.572.572 0 0 1-.08-.407.546.546 0 0 1 .212-.348.483.483 0 0 1 .38-.086A3.858 3.858 0 0 1 12.88 5.7a4.318 4.318 0 0 1 1 2.409.568.568 0 0 1-.115.394.5.5 0 0 1-.342.194h-.051a.483.483 0 0 1-.34-.14.548.548 0 0 1-.16-.349 3.188 3.188 0 0 0-.74-1.78 2.848 2.848 0 0 0-1.59-.952Z"/>
      <defs>
        <linearGradient id="a" x1="-3.5" x2="24.681" y1="14" y2="4.541" gradientUnits="userSpaceOnUse">
          <stop offset=".024" stopColor="#94783E"/>
          <stop offset=".217" stopColor="#F3EDA6"/>
          <stop offset=".33" stopColor="#F8FAE5"/>
          <stop offset=".486" stopColor="#FFE2BE"/>
          <stop offset=".724" stopColor="#D5BE88"/>
          <stop offset=".809" stopColor="#F8FAE5"/>
          <stop offset=".903" stopColor="#D5BE88"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// For visual indication only, we don't have the correct svg for open eye, nor my skill to create a good one
function OpenEyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="none" viewBox="0 0 20 17">
      <path fill="#000"
            d="M9.629 17C4.159 17 .223 9.039.059 8.7a.626.626 0 0 1 .012-.554C.257 7.813 4.687 0 10 0c5.96 0 9.783 7.84 9.943 8.173a.63.63 0 0 1-.002.528c-.158.322-3.93 7.863-9.924 8.285-.13.009-.26.014-.388.014ZM.753 8.454c.772 1.448 4.498 7.932 9.231 7.599 5.058-.356 8.551-6.29 9.273-7.62C18.535 7.07 15.005.935 10 .935 5.543.936 1.584 7.077.753 8.454Z"/>
      <path fill="#000"
            d="M10 11.767c-1.279 0-2.319-1.466-2.319-3.267 0-1.8 1.04-3.265 2.319-3.265S12.319 6.7 12.319 8.5s-1.04 3.267-2.319 3.267Z"/>
      <path fill="#000"
            d="M10 14.338c-2.285 0-4.144-2.62-4.144-5.838S7.715 2.663 10 2.663s4.144 2.62 4.144 5.837c0 3.219-1.858 5.838-4.144 5.838Zm0-10.74c-1.92 0-3.48 2.199-3.48 4.902 0 2.703 1.56 4.902 3.48 4.902s3.48-2.2 3.48-4.902c0-2.703-1.56-4.902-3.48-4.902Z"/>
    </svg>
  )
}

export type ToggleButtonProps = {
  type?: "button" | "submit" | "reset";
  hidden?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  showPassword: boolean;
};

export default function PasswordButton({ type, hidden, onClick, showPassword }: ToggleButtonProps) {
  return (
    <button
      type={type || "button"}
      hidden={hidden}
      onClick={onClick}
      className={styles.togglePasswordButton}>
      {showPassword ? <ClosedEyeIcon/> : <OpenEyeIcon/>}
    </button>
  );
};
