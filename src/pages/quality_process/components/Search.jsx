import React, { useRef } from 'react';
import { Row, Col } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect } from '@ant-design/pro-form';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';

export default (props) => {
  const formRef = useRef();

  return (
    <div style={{ height: '40%', width: '100%', backgroundColor: 'white', padding: 24 }}>
      <LightFilter
        formRef={formRef}
        bordered
        collapseLabel={<FilterOutlined />}
        size={'large'}
        onFinish={props.onSubmit}
      >
        <Row>
          <Col>
            <ProFormSelect
              width="md"
              name="week"
              placeholder="请选择时间"
              valueEnum={{
                1: '三个月内',
                2: '半年内',
                3: '一年内',
                4: '两年内',
                5: '三年内',
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RangePicker
              defaultValue={[moment('2015-06-06', dateFormat), moment('2018-06-06', dateFormat)]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProFormSelect
              width="md"
              name="doctor"
              placeholder="请选择责任医师"
              valueEnum={{
                1: '泰勒医生',
                2: '李时珍医师',
                3: '毛医生',
              }}
            />
          </Col>
        </Row>
      </LightFilter>
    </div>
  );
};
