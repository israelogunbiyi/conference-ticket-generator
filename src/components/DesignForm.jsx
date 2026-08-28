import InputField from "./InputField";
import Pattern from "./Pattern";
import patternTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternBottom from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternLine from "../assets/images/pattern-lines.svg";
import patternCircle from "../assets/images/pattern-circle.svg";
import logo from "../assets/images/logo-full.svg";

import iconInfo from "../assets/images/icon-info.svg";
import "../styles/DesignForm.css";

function DesignForm({
  fileName,
  setFileName,
  formData,
  setFormData,
  error,
  setError,
  setGenerate,
}) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      fullName: "",
      email: "",
      username: "",
      avatar: "",
    };

    if (!formData.fullName.trim()) {
      newError.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newError.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newError.email = "Please enter a valid email address.";
    }

    if (!formData.username.trim()) {
      newError.username = "GitHub username is required.";
    }

    if (!fileName) {
      newError.avatar = "Please upload your photo to continue.";
    }
    setError(newError);

    const hasError = Object.values(newError).some((msg) => msg !== "");
    if (hasError) return;
    console.log("Submitting:", formData, fileName);

    setGenerate(true);
  };

  const MAX_FILE_SIZE = 500 * 1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png"];

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError((prev) => ({
        ...prev,
        avatar: "Please upload a JPG or PNG image.",
      }));
      setFileName(null);
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError((prev) => ({
        ...prev,
        avatar: "File too large. Please upload a photo under 500KB.",
      }));
      setFileName(null);
      e.target.value = "";
      return;
    }

    setError((prev) => ({ ...prev, avatar: "" }));
    setFileName(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setFileName(null);
    setError((prev) => ({ ...prev, avatar: "" }));
  };

  return (
    <section className="hero">
      <div className="hero__decor">
        <Pattern lineTop="pattern-line" pattern={patternLine} />
        <Pattern top="squiggle--top-right" pattern={patternTop} />
        <Pattern bottom="squiggle--bottom-left" pattern={patternBottom} />
        <Pattern circle="circle" pattern={patternCircle} />
      </div>

      <div className="hero__content">
        <header>
          <img src={logo} />
        </header>
        <form className="form-submit" onSubmit={handleSubmit} noValidate>
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p>Secure your post at next year's biggest coding conference.</p>

          <InputField
            type="file"
            id="avatar-upload"
            labelTitle="Upload Avatar"
            className="dropzone-input"
            fileName={fileName}
            handleChange={handleChange}
            handleRemoveImage={handleRemoveImage}
            error={error.avatar}
            iconInfo={iconInfo}
          />

          <InputField
            type="text"
            name="fullName"
            labelTitle="Full Name"
            className="text-input"
            value={formData.fullName}
            onChange={handleInputChange}
            error={error.fullName}
          />

          <InputField
            type="text"
            name="email"
            labelTitle="Email Address"
            placeholder="example@gmail.com"
            className="text-input"
            value={formData.email}
            onChange={handleInputChange}
            error={error.email}
          />

          <InputField
            type="text"
            name="username"
            labelTitle="GitHub Username"
            placeholder="@yourusername"
            className="text-input"
            value={formData.username}
            onChange={handleInputChange}
            error={error.username}
          />

          <button type="submit" className="btn-submit">
            Generate My Ticket
          </button>
        </form>
      </div>
    </section>
  );
}





export default DesignForm;
