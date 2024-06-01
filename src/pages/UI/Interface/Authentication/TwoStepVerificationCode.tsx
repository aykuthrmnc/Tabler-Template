import { useEffect } from "react";

const TwoStepVerificationCode = () => {
  useEffect(() => {
    const inputs: any = document.querySelectorAll("[data-code-input]");

    // Attach an event listener to each input element
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", (e: any) => {
        // If the input field has a character, and there is a next input field, focus it
        if (e.target.value.length === e.target.maxLength && i + 1 < inputs.length) {
          inputs[i + 1].focus();
        }
      });
      inputs[i].addEventListener("keydown", (e: any) => {
        // If the input field is empty and the keyCode for Backspace (8) is detected, and there is a previous input field, focus it
        if (e.target.value.length === 0 && e.keyCode === 8 && i > 0) {
          inputs[i - 1].focus();
        }
      });
    }
  }, []);

  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <form className="card card-md" action="./" method="get" autoComplete="off" noValidate={true}>
        <div className="card-body">
          <h2 className="card-title card-title-lg text-center mb-4">Authenticate Your Account</h2>
          <p className="my-4 text-center">
            Please confirm your account by entering the authorization code sent to <strong>+1 856-672-8552</strong>.
          </p>
          <div className="my-5">
            <div className="row g-4">
              <div className="col">
                <div className="row g-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row g-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control form-control-lg text-center py-3"
                      maxLength={1}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      data-code-input=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <label className="form-check">
              <input type="checkbox" className="form-check-input" />
              Dont't ask for codes again on this device
            </label>
          </div>
          <div className="form-footer">
            <div className="btn-list flex-nowrap">
              <a href="./2-step-verification.html" className="btn w-100">
                Cancel
              </a>
              <a href="#" className="btn btn-primary w-100">
                Verify
              </a>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center text-secondary mt-3">
        It may take a minute to receive your code. Haven't received it? <a href="./">Resend a new code.</a>
      </div>
    </div>
  );
};
export default TwoStepVerificationCode;
