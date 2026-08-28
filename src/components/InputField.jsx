import iconUpload from "../assets/images/icon-upload.svg";

function InputField({
  type,
  labelTitle,
  className,
  id,
  fileName,
  handleChange,
  handleRemoveImage,
  iconInfo,
  placeholder,
  error,
  name,
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="label-title">
        {labelTitle}
      </label>

      {type === "file" ? (
        <label htmlFor={id} className="dropzone">
          <input
            type="file"
            id={id}
            accept="image/png, image/jpeg"
            className={className}
            onChange={handleChange}
          />
          {fileName ? (
            <div className="dropzone__preview">
              <img
                className="image-upload"
                src={fileName}
                alt="avatar preview"
              />
              <div className="dropzone__actions">
                <button
                  type="button"
                  className="remove-btn"
                  onClick={handleRemoveImage}
                >
                  Remove image
                </button>
                <button type="button" className="change-btn">
                  Change image
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="dropzone__icon">
                <img src={iconUpload} alt="Upload avatar" />
                <p className="dropzone__text">
                  Drag and drop or click to upload
                </p>
              </div>
              {error && (
                <div className="error-text">
                  <img src={iconInfo} alt="" />
                  <span>{error}</span>
                </div>
              )}
            </>
          )}
        </label>
      ) : (
        <>
          <input
            type={type}
            name={name}
            className={`${className} ${error ? "input-error" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && (
            <div className="error-text">
              <img src={iconInfo} />
              <span>{error}</span>
            </div>
          )}
        </>
      )}

      {type === "file" && (
        <span className="form-info">
          <img src={iconInfo} alt="" /> Upload your photo (JPG or PNG, max size:
          500KB).
        </span>
      )}
    </div>
  );
}
export default InputField;