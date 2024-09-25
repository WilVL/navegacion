import React from "react";
import Navigation from "./Navigation";
import { useState } from "react";
import { myColors } from "./src/styles/Colors";
import { ThemeContext } from "./src/context/ThemeContext";
import MyKeyboard from "./src/components/MyKeyboard";

export default function App() {
  return (
    <Navigation/>
  );
}

