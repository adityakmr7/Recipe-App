import React from "react";

import { Routes } from "./src/Routes";
import { AppProvider } from "./src/context/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
