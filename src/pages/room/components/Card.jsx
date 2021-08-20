import React, { useState } from 'react';
import { Row, Col } from 'antd';
// import { InfoCircleFilled } from '@ant-design/icons';

// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';

const PatientCard = (props) => {
  const [select, setSelect] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: 216,
          height: 68,
          padding: 0,
          boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
        }}
        key={props.index}
        onClick={props.open}
      >
        <Row>
          <Col
            span={8}
            style={{
              fontSize: '16px',
              color: '#3F529E',
              backgroundColor: '#DADDEA',
              height: '68px',
              padding: '16px',
              fontFamily: 'SourceHanSansSC-Bold',
              textAlign: 'center',
            }}
          >
            <div>{props.index + 1}床</div>
          </Col>
          <Col span={16} style={{ backgroundColor: 'white', height: '68px', padding: '12px' }}>
            <div style={{ fontSize: '20px' }}>{props.name}</div>
            <div style={{ display: 'inline' }}>HD</div>
            <div style={{ display: 'inline', marginLeft: 12 }}>住院</div>
            {/* <InfoCircleFilled
              style={{
                fontSize: '21px',
                position: 'absolute',
                right: '15.5px',
                top: '23.5px',
                color: '#B5A647',
              }}
            /> */}
          </Col>
        </Row>
      </div>
      {props.selectMode ? (
        <div
          onClick={() => {
            console.log(`${props.index} <> 点击了`);
            setSelect(!select);
            console.log(props);
          }}
        >
          {select ? (
            <div
              style={{
                width: 216,
                height: 68,
                position: 'absolute',
                top: 0,
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: '#496AA7',
                zIndex: 10,
              }}
            ></div>
          ) : (
            <div
              style={{
                width: 216,
                height: 68,
                position: 'absolute',
                top: 0,
                background: 'rgba(0,0,0,0.4)',
                zIndex: 10,
              }}
            ></div>
          )}
        </div>
      ) : (
        <div
          onClick={() => {
            console.log(`${props.index} <> 点击了`);
            setSelect(!select);
            console.log(props);
          }}
        ></div>
      )}
    </div>
  );
};
export default PatientCard;
