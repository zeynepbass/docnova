import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Searchbar({  name, placeholder = "Ara...", rules, style }) {
  return (
    <Form.Item name={name} rules={rules} style={style}>
      <Input
        placeholder={placeholder}
        prefix={<SearchOutlined />}
        style={{
          borderRadius: "8px",
          border: "1px solid #b3d1ff",
          padding: "8px 12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
          ...style,
        }}
      />
    </Form.Item>
  );
}
