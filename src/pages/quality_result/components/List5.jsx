import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const List5 = () => {
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
          title="血液透析患者传染病诊断构成"
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

export default List5;
