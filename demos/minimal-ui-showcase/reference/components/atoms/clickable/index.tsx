import React from 'react';
import styled, { css } from 'styled-components';

import { PropsOf } from '/libs/utils';

// #F0F0FE
// #6C6FEF

const ClickableWrap = styled.div<{ active?: boolean }>`
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: translateY(2px);
  }

  &:hover {
    background: #F0F0FE;
  }

  ${props => props.active && css`
    background: #F0F0FE;
  `};
`;

export default ({ active, children, ...props }: { active?: boolean; children: React.ReactNode } & PropsOf<typeof ClickableWrap>) => {
  return (
    <ClickableWrap active={active} {...props}>
      {children}
    </ClickableWrap>
  )
};
