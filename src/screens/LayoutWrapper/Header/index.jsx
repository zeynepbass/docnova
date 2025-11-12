import { useEffect } from 'react';
import { Menu, Input, Row, Col, Space } from "antd";
import Select from "../../../components/Select";
import Dropdown from "../../../components/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { useTranslation } from "react-i18next";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.companies);
  const lang = useSelector((state) => state.language.lang); 
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  const Logout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuItems = [
    { key: "1", label: t("home") },
    { key: "2", label: t("about") },
    { key: "3", label: t("contact") },
  ];

  return (
    <header
      style={{
        backgroundColor: "#f0f5ff",
        padding: "0.5rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Row align="middle" justify="space-between">

        <Col>
          <Link to="/docnova">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/image006.png"
                alt="Logo"
                style={{ height: 50 }}
              />
              <p style={{ color: "gray", fontSize: "0.7rem", marginLeft: 8 }}>
                Docnova
              </p>
            </div>
          </Link>
        </Col>


        <Col flex="auto">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="custom-menu"
            style={{
              backgroundColor: "transparent",
              fontWeight: "bold",
              borderBottom: "none",
              justifyContent: "center",
            }}
            defaultSelectedKeys={["1"]}
          />
        </Col>


        <Col>
          <Space>
            <Input.Search
              placeholder={t("search")}
              style={{ width: 400 }}
            />
            <Select /> 
          </Space>
        </Col>


        <Dropdown Logout={Logout} user={user} lang={[t("welcome"),t("soon"),t("logout"),]}/>
      </Row>
    </header>
  );
}
