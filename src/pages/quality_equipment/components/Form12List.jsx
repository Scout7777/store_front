import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const Form12List = () => {
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
          title="血透室（中心）开放2班床位使用率"
          direction={responsive ? 'column' : 'row'}
        >
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '血透室（中心）透析治疗的例次',
              value: 893,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '核准开放床位数',
              value: 5893,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '使用率',
              value: 0.3,
              precision: 2,
            }}
          />
        </StatisticCard.Group>
        <StatisticCard.Group
          title="血透室（中心）开放3班床位使用率"
          direction={responsive ? 'column' : 'row'}
        >
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '血透室（中心）透析治疗的例次',
              value: 893,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '核准开放床位数',
              value: 5893,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '使用率',
              value: 0.3,
              precision: 2,
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default Form12List;
