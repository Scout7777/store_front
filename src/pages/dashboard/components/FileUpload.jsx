import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileUpload = ({ value, onChange, ...props }) => {
  // console.log({ value, onChange, props })
  // const defaultFile = value || {}
  const [status, setStatus] = useState();

  const handleOnChange = ({file={}}) => {
    // console.log(file)
    setStatus(file.status)
    switch (file.status) {
      case "done":
        if (file.response && file.response.status === 201) {
          const fileInfo = file.response.data
          console.log('文件上传后端返回的数据：', fileInfo)
          onChange && onChange(fileInfo)
        }
        break;
      case "uploading":
      case "error":
      case "removed":
    }
  }

  const HOST = window.location.hostname === 'localhost' ? 'http://localhost:8080' : window.location.origin;

  return <Upload
      onChange={handleOnChange}
      action={`${HOST}/api/files/upload`}
      maxCount={1}
      >
        {
          status === 'done'
          ? <Button icon={<UploadOutlined />}>上传成功</Button>
          : status === 'uploading'
          ? <Button icon={<UploadOutlined />}>正在上传...</Button>
          : status === 'error'
          ? <Button icon={<UploadOutlined />}>上传失败</Button>
          : <Button icon={<UploadOutlined />}>上传</Button>
        }
  </Upload>
}

export default FileUpload;
