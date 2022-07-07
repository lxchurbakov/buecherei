import React from 'react';
import styled from 'styled-components';

import Clickable from '/components/atoms/clickable';
import Flex from '/components/layout/flex';
import { PropsOf } from '/libs/utils';

const Wrap = styled(Flex)`
  width: auto;
`;

const Icon = styled.img`
  width: 20px;
`;

export type Props = {
  options: { value: string, src: string }[],
  value: string;
  onChange: (value: string) => void;
};

export default ({ options, value, onChange, ...props }: Props & Partial<Pick<PropsOf<typeof Wrap>, 'style' | 'className'>>) => {
  return (
    <Wrap gap={4} {...props}>
      {options.map((option) => (
        <Clickable style={{ padding: 12 }} key={option.value} onClick={() => onChange(option.value)} active={value === option.value}>
          <Flex align="center" justify="center"><Icon src={option.src} /></Flex>
        </Clickable>
      ))}
    </Wrap>
  );
};
