import "./modal.css";
import logoWhite from "../../assets/img/hc-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoGoogle from "../../assets/img/google.png";
import { useState } from "react";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";

const Modal = ({ handleUserData, setVisible, visible }) => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className="modal-root">
      <div
        className="modallog"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="leftPart">
          <span>
            <img src={logoWhite} alt="logo hp blanc" />
            {isActive ? (
              <h3>Welcome to HappyCow</h3>
            ) : (
              <h3>
                Join the largest vegan and vegetarian community in the world.
              </h3>
            )}
          </span>
        </div>
        <div className="rigthPart">
          <main>
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <FontAwesomeIcon
                icon="fa-regular fa-circle-xmark"
                size="xl"
                style={{ color: "#BBBB", opacity: "90%" }}
              />
            </button>

            <span>
              <div className={!isActive ? "clic" : null}>
                <button onClick={handleToggle}>Login</button>
              </div>

              <div className={isActive ? "clic" : null}>
                <button onClick={handleToggle}>Sign Up</button>
              </div>
            </span>
            <nav>
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=202351993123002&kid_directed_site=0&app_id=202351993123002&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv8.0%2Fdialog%2Foauth%3Fapp_id%3D202351993123002%26cbt%3D1685464513307%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2141c1e056ced%2526domain%253Dwww.happycow.net%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.happycow.net%25252Ff25caf9ea27ed%2526relation%253Dopener%26client_id%3D202351993123002%26display%3Dpopup%26domain%3Dwww.happycow.net%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.happycow.net%252Fsearchmap%252F%253Fs%253D3%2526location%253Dparis%2526metric%253Dkm%2526limit%253D81%2526order%253Ddefault%2526lat%253D48.862745677928004%2526lng%253D2.341666898392019%2526zoom%253D15.25%2526page%253D3%2526radius%253D0%26locale%3Den_US%26logger_id%3Df3701069ff06a44%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd7921766c824%2526domain%253Dwww.happycow.net%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.happycow.net%25252Ff25caf9ea27ed%2526relation%253Dopener%2526frame%253Df39b75223e149c8%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252Cemail%252Cuser_hometown%26sdk%3Djoey%26version%3Dv8.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd7921766c824%26domain%3Dwww.happycow.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.happycow.net%252Ff25caf9ea27ed%26relation%3Dopener%26frame%3Df39b75223e149c8%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=fr_FR&pl_dbl=0">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f"
                  size="xl"
                  style={{ color: "#3a5898" }}
                />
              </a>
              <a href="https://accounts.google.com/gsi/select?client_id=755501293095-br77j34ovtp5cqatla3kvblr3s0vr117.apps.googleusercontent.com&ux_mode=popup&ui_mode=card&as=FEKf8kV0E2%2BvqcF18oOf8Q&channel_id=de255cfaf8eae37f92140e42fda105652cc405a8196a1132ca95de01f2baec58&origin=https%3A%2F%2Fwww.happycow.net">
                <img className="logoSM" src={logoGoogle} alt="logo google" />
              </a>

              <a href="https://appleid.apple.com/auth/authorize?client_id=com.smoothlandon.happycow.website&redirect_uri=https%3A%2F%2Fwww.happycow.net%2F&response_type=code%20id_token&state=Yy83bmhQSkhvTTBicVBaU2VlTEwvdz09&scope=name%20email&response_mode=web_message&frame_id=86b3ecd0-fd72-4a33-ad40-fbaff32c123c&m=11&v=1.5.4">
                <FontAwesomeIcon
                  icon="fa-brands fa-apple"
                  size="xl"
                  style={{ color: "#050505" }}
                />
              </a>
            </nav>

            <p>OR</p>
          </main>

          {isActive ? (
            <SignUpForm handleUserData={handleUserData} />
          ) : (
            <LoginForm handleUserData={handleUserData} />
          )}
        </div>
      </div>
    </section>
  );
};
export default Modal;
