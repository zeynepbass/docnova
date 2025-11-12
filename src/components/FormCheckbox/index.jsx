
import { Form,Checkbox } from 'antd';

export default function CheckBox ({ name, children }) {
  return (
    <Form.Item name={name} valuePropName="checked" >
    <Checkbox>{children}</Checkbox>
  </Form.Item>
  );
};

