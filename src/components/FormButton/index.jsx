
import { Form,Button } from 'antd';

export default function SubmitButton ({children }) {
  return (
    <Form.Item wrapperCol={{ offset: 4 }}>
    <Button type="primary" htmlType="submit"  style={{
          padding: "8px 16px", 
          borderRadius: "8px",  
          width: "70%",  
          fontWeight: "600",   
        }} >
      {children}
    </Button>
  </Form.Item>
  );
};

