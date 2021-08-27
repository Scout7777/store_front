import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const Form7List = () => {
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
          title="慢性肾衰竭维持性血液透析患者透析龄平均数、标准差、中位数"
          direction={responsive ? 'column' : 'row'}
        >
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '平均数',
              value: 1893.6,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '标准差',
              value: 13.32,
              precision: 2,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '中位数',
              value: 1193,
              suffix: '人',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default Form7List;
