import React from 'react';
import styled, { css } from 'styled-components';

import { Heading, Text, Sup } from '/components/atoms/text';
import Flex from '/components/layout/flex';

import theme from '/libs/theme';

import homeIcon from './icons/home.svg';
import dashboardIcon from './icons/dashboard.svg';

const Wrap = styled.div`
  padding-top: 64px;
  box-sizing: border-box;
  height: 100%;
  border-right: 1px solid ${theme.colors.dark};
`;

const Link = styled(Text)<{ active: boolean }>`
  padding: 12px 24px;
  cursor: pointer;
  user-select: none;

  ${props => props.active && css`
    padding-left: 18px;
    border-left: 6px solid ${theme.colors.text};
    font-weight: bold;
  `};
`;

export default ({ ...props }) => {
  return (
    <Wrap {...props}>
      <div style={{ marginBottom: 120, textAlign: 'center' }}>
        <Heading><em>Minimal UI</em></Heading>
        <Sup><a href="https://github.com/swensson/buecherei/tree/master/demos/minimal-ui-showcase">open on github</a></Sup>
      </div>

      <Link active>
        <Flex justify="flex-start">
          <img src={homeIcon} style={{ width: 24, marginRight: 12, display: 'inline-block' }} /> &nbsp; Home
        </Flex>
      </Link>

      <Link>
        <Flex justify="flex-start">
          <img src={dashboardIcon} style={{ width: 24, marginRight: 12, display: 'inline-block' }} /> &nbsp; Dashboard
        </Flex>
      </Link>
    </Wrap>
  );
};
