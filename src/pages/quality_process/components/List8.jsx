import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const List8 = () => {
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
          <StatisticCard
            statistic={{
              title: '今日UV',
              tip: '供应商信息',
              value: 79,
              precision: 2,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '冻结金额',
              value: 112893,
              precision: 2,
              suffix: '元',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '信息完整度',
              value: 92,
              suffix: '/ 100',
            }}
          />
          <StatisticCard
            statistic={{
              title: '冻结金额',
              value: 112893,
              precision: 2,
              suffix: '元',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default List8;
