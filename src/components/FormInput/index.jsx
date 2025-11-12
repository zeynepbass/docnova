
import { Form, Input } from 'antd';

export default function InputType({ label, name, rules }) {
  return (
    <Form.Item label={label} name={name} rules={rules} >
      {name === "password" ? <Input.Password /> : <Input />}
    </Form.Item>
  );
};

