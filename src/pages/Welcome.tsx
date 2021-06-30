import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import { useModel } from 'umi';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const { initialState } = useModel('@@initialState');
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Typography.Text strong>
          {/* <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '} */}
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
        </Typography.Text>
        <CodePreview>我的身份是{initialState?.currentUser?.role}</CodePreview>
      </Card>
    </PageContainer>
  );
};
