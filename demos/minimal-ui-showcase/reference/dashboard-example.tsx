import React from 'react';
import styled from 'styled-components';

import { Heading, Text, Sup } from '/components/atoms/text';
import Input from '/components/inputs/text';
import Flex from '/components/layout/flex';
import Button from '/components/atoms/button';

import theme from '/libs/theme';

import appsIcon from '/icons/apps.svg';

const Wrap = styled.div`
  padding: 24px;
`;

const Shit = styled.div`
  border-radius: 8px;
  background: #f0f2f5;
  padding: 24px;
  // border: 1px solid ${theme.colors.dark};
  box-shadow: 0 0 2px 0px rgba(0,0,0,.1);
`;

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <Wrap>
      <Input style={{ marginBottom: 48 }} value={value} onChange={setValue} />

      <Flex gap={24} style={{ width: '100%' }} align="flex-start">
        <Shit style={{ width: '100%', position: 'relative' }}>
          <Heading style={{ marginBottom: 4 }}>Sells count</Heading>
          <Text style={{ marginBottom: 24 }}>Sum of all sells without taxes.</Text>

          <div style={{ position: 'absolute', top: 24, right: 24 }}>
            <img src={appsIcon} style={{ cursor: 'pointer', width: 20 }} />
          </div>

          <Flex gap={28} justify="flex-start" style={{ marginBottom: 24 }}>
            <div>
              <Heading>$500.00</Heading>
              <Sup>this month</Sup>
            </div>
            <div>
              <Heading>$2,300.00</Heading>
              <Sup>this quarter</Sup>
            </div>
            <div>
              <Heading>$41,400.00</Heading>
              <Sup>this year</Sup>
            </div>
          </Flex>

          <Button style={{ width: 150 }} type="primary">Review</Button>
        </Shit>

        <Shit style={{ width: '50%', background: '#23232a', color: theme.colors.white }}>
          <Heading style={{ color: 'white', marginBottom: 4 }}>Obligations</Heading>
          <Text style={{ color: 'white', marginBottom: 24 }}>Obligations per user defined in US dollars.</Text>


        </Shit>
      </Flex>
    </Wrap>
  );
};
