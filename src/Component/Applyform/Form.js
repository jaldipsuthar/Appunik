import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import "./form.css";
function Form() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [selectFile, setSelectFile] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleJobChange = (e) => {
    setJobtitle(location.state.newTitle);
  };
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };
  const handleSubmit = (e) => {
    debugger;
    const formData = new FormData();
    formData.append("Details", JSON.stringify(formData));
    let Details = {
      name: name,
      phone: phone,
      email: email,
      detail: detail,
      jobtitle: jobtitle,
      file: selectFile,
    };

    console.log(Details);
    setName("");
    setPhone("");
    setEmail("");
    setDetail("");
    setJobtitle("");
    e.preventDefault();
  };
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    debugger;
    hiddenFileInput.current.click(event);
  };
  const handleChanges = (event) => {
    debugger;
    setSelectFile(event.target.files[0]);
  };

  return (
    <>
      <section className="form_banner">
        <div className="form_container ">
          <div className="container">
            <div className="row mt-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  value={name || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row mt-3  ">
              <div className="offset-2"></div>
              <div className="col-lg-4">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone no"
                  value={phone || ""}
                  onChange={(e) => {
                    handlePhoneChange(e);
                  }}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-4">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  value={email || ""}
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                  variant="outlined"
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row mt-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Job Title"
                  variant="outlined"
                  value={jobtitle || ""}
                  onChange={(e) => {
                    handleJobChange(e);
                  }}
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row my-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Description"
                  value={detail}
                  onChange={(e) => {
                    handleDetailChange(e);
                  }}
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </div>
              <div className="offset-2"></div>
            </div>
            <div className="row my-3">
              <div className="offset-2"></div>
              <div className="col-lg-8">
                <Button onClick={handleClick}>
                  Upload a file{" "}
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChanges}
                    style={{ display: "none" }}
                  />
                </Button>

                {selectFile && <label>{selectFile.name}</label>}
              </div>

              <div className="offset-2"></div>
            </div>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
