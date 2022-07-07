import React from 'react';
import styled from 'styled-components';

import Flex from '/components/layout/flex';
import Sidebar from '/components/molecules/sidebar';

const Content = styled.div`

`;

export default ({ children }: any) => {
  return (
    <Flex style={{ width: '100%', height: '100%' }} gap={24} align="flex-start">
      <Sidebar style={{ width: '280px', height: '100%', flexShrink: 0 }} />

      <Content style={{ width: '100%', height: '100%' }}>
        {children}
      </Content>
    </Flex>
  );
};