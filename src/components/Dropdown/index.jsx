import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space,Button } from 'antd';
import {Link} from "react-router-dom"
export default function DropUser ({Logout,user,lang=[]})  {
const items = [
  {
    key: '1',
    label: (
      <Button         
        type="text"
      onClick={Logout}
      danger
      style={{ width: "100%", textAlign: "left" }}>
        {lang[2]}
      </Button>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          {lang[1]}
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  }
];

    return(
        <Dropdown menu={{ items }} >
        <Link onClick={e => e.preventDefault()}style={{padding:"10px"}}>
          <Space>
          {lang[0]}
          {user?.map(c => c.name).join(", ")}

  
            <DownOutlined />
          </Space>
        </Link>
      </Dropdown>
    )
  
}

