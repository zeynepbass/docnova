
import { Form, Alert } from "antd";
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import FormInput from "../../components/FormInput";
import FormCheckbox from "../../components/FormCheckbox";
import SubmitButton from "../../components/FormButton";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const lang = useSelector((state) => state.language.lang); 
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const handleLogin = (values) => {
    dispatch(loginUser(values));
    navigate("/docnova");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6f0ff",
      }}
    >
      <div
        style={{
          padding: "32px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {error && <Alert message={error} type="error" showIcon />}
        <Form
          name="login"
          layout="vertical"
          onFinish={handleLogin}
          autoComplete="off"
          initialValues={{
            email: "devmelauser@yopmail.com",
            password: "Work123???",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1e40af",
              marginBottom: "8px",
            }}
          >
            {t("welcome")}
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "24px",
            }}
          >
            {t("loginMessage")}
          </p>

          <FormInput
            label={t("email")}
            name="email"
            rules={[{ required: true, message: t("emailRequired") }]}
          />

          <FormInput
            label={t("password")}
            name="password"
            type="password"
            rules={[{ required: true, message: t("passwordRequired") }]}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <FormCheckbox>{t("rememberMe")}</FormCheckbox>

            <Link
              to="/forgot-password"
              style={{
                color: "#3b82f6",
                pointerEvents: "none",
                opacity: 0.5,
              }}
              onClick={(e) => e.preventDefault()}
            >
              {t("forgotPassword")}?
            </Link>
          </div>

          <SubmitButton loading={loading}>
            {t("loginButton")}
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
}
