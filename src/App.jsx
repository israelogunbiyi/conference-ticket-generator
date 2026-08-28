import { useState } from "react";
import "./App.css";
import DesignForm from "./components/DesignForm";
import DesignTicket from "./components/DesignTicket";

function App() {
  const [fileName, setFileName] = useState(null);
  const [generate, setGenerate] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    avatar: ""
  });

  const [error, setError] = useState({
    fullName: "",
    email: "",
    username: "",
  });
  return (
    <>
      {generate ? (
        <DesignTicket fileName={fileName} formData={formData} />
      ) : (
        <DesignForm
          fileName={fileName}
          setFileName={setFileName}
          formData={formData}
          setFormData={setFormData}
          error={error}
          setError={setError}
          setGenerate={setGenerate}
        />
      )}
    </>
  );
}

export default App;
