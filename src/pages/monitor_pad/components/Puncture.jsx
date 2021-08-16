import React from 'react';
// import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';
import Sign from './Signature';

import FormItemDivider from '@/components/FormItemDivider';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleGetMsg = (value) => {
    console.log(value);
    this.setState({ value });
  };
  state = {};

  handleSubmit = () => {
    console.log('执行');
    console.log(this.state.value);
    this.props.onSubmit();
  };

  render() {
    return (
      <ModalForm
        title="穿刺/换药"
        width={900}
        visible={this.props.visible}
        modalProps={{
          onCancel: this.props.onCancel,
          destroyOnClose: true,
        }}
        onFinish={this.handleSubmit}
      >
        <FormItemDivider>穿刺/换药签名</FormItemDivider>
        <div>
          <Sign getUrl={this.handleGetMsg} />
        </div>
      </ModalForm>
    );
  }
}
export default CreateForm;
