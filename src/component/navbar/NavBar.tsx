import React from 'react';


interface NavbarProps {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export default function Navbar({ leftContent, centerContent, rightContent }: NavbarProps) {
  return (
    <nav style={{
      display: 'flex',
      flexDirection:  "row",
      justifyContent: 'space-between',
      padding: '10px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }}>{leftContent}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>{centerContent}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>{rightContent}</div>
    </nav>
  );
}
