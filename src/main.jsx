import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./languajes/es/global.json";
import global_en from "./languajes/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",  
  resource: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App className="m-0 p-0 box-content" />
    </I18nextProvider>
  </React.StrictMode>
);
