import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const Form14List = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <ProCard>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <StatisticCard.Group
          title="血透室（中心）各种透析用装置数量和构成"
          direction={responsive ? 'column' : 'row'}
        >
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '血液透析装置',
              value: 183,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '血液透析过滤装置',
              value: 79,
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default Form14List;
