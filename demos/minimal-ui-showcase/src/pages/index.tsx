import React from 'react';
import styled from 'styled-components';

import Flex from './flex';

import calendarIcon from './calendar.svg';
import fireIcon from './fire.svg';
import launchIcon from './launch.svg';

const Wrap = styled.div`
  height: 100%;
  width: 980px;
`;

const Header = styled.div`
  display: flex;
  padding: 12px 0;
  gap: 24px;
`;

const Calendar = styled.div`
  display: flex;
  gap: 12px;
  border-right: 1px solid #ccc;
  align-items: center;
`;

const CalendarText = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 12px;
`;

const Selector = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const SelectorIcon = styled.div<{ color?: string }>`
  width: 48px;
  height: 48px;
  background: ${props => props.color || '#ff3b38'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #21224e;
`;

const Subheading = styled.div`
  font-weight: bold;
  font-size: 22px;
  // letter-spacing: .5px;
  color: #21224e;
`;

const Label = styled.div`
  font-size: 22px;
  // letter-spacing: .5px;
  color: #21224e;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  color: #21224e;
`;

const Sup = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #5a5a71;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 4px 0px rgba(0,0,0,.1);
`;

const Button = styled.button`
  padding: 12px 24px;

  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;

  cursor: pointer;
  position: relative;
  top: 0;

  // background: none;
  // border: 1px solid #6c6dff;
  // color: #6c6dff;
  background: #6c6dff;
  border: none;
  color: white;

  &:active {
    top: 1px;
  }
`;

const Input = styled.input`
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: block;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  font-family: Lato;
  font-size: 16px;
`;

const Table = styled.div`

`;

const TableHeaderRow = styled.div`
  display: flex;
`;

const TableHeaderItem = styled.div`
  padding: 12px;
  width: 100%;
  font-size: 14px;
`;

const TableRow = styled.div`
  display: flex;

  &:nth-child(2n) {
    background: #F8FAFB;
    border-radius: 8px;
  }
`;

const TableItem = styled.div`
  padding: 12px;
  width: 100%;
  font-size: 16px;
`;

const FlatCard = styled.div`
  background: #e2edf9;
  border-radius: 8px;
`;

export default () => {
  return (
    <Wrap>
      <Header style={{ marginBottom: 24 }}>
        <Calendar style={{ flexShrink: 0 }}>
          <img src={calendarIcon} />
          <CalendarText>26 June</CalendarText>
        </Calendar>

        <Flex style={{ width: 'auto' }} gap={12}>
          <Selector>
            <SelectorIcon>
              <img src={fireIcon} style={{ width: 28 }} />
            </SelectorIcon>
          </Selector>

          <Selector>
            <SelectorIcon color="#6c6dff">
              <img src={fireIcon} style={{ width: 28 }} />
            </SelectorIcon>
          </Selector>
        </Flex>

        <Input placeholder="Search for entries..." />
      </Header>

      <Heading style={{ marginBottom: 24 }}>Available Insurances</Heading>

      <Card style={{ padding: 24 }}>
        <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
          <Flex justify="flex-start" gap={12}>
            <SelectorIcon color="#6c6dff">
              <img src={fireIcon} style={{ width: 28 }} />
            </SelectorIcon>

            <div>
              <Subheading style={{ marginBottom: 4 }}>Insurance for Volkswagen Golf</Subheading>
              <Sup>Last updated 12 June</Sup>
            </div>
          </Flex>

          <Button><Flex gap={8}><img style={{ width: 18 }} src={launchIcon} /> Apply</Flex></Button>
        </Flex>

        <Flex style={{ marginBottom: 24 }}>
          <FlatCard style={{ width: '100%', padding: 24 }}>
            <Flex style={{ marginBottom: 20 }} justify="space-between">
              <Label>Insurance Amounts</Label>
              <Sup style={{ textDecoration: 'underline', cursor: 'pointer' }}>What is that?</Sup>
            </Flex>
            <Flex justify="flex-start" gap={48}>
              <div>
                <Heading>$40,000.00</Heading>
                <Sup>Total Coverage</Sup>
              </div>

              <div>
                <Heading>$20,000.00</Heading>
                <Sup>Injury Coverage</Sup>
              </div>

              <div>
                <Heading>$10,000.00</Heading>
                <Sup>Civil Responsibility Coverage</Sup>
              </div>
            </Flex>
          </FlatCard>
        </Flex>

        <Table>
          <TableHeaderRow>
            <TableHeaderItem>Date</TableHeaderItem>
            <TableHeaderItem>Amount</TableHeaderItem>
            <TableHeaderItem>Interest</TableHeaderItem>
            <TableHeaderItem>Body</TableHeaderItem>
            <TableHeaderItem>Rest</TableHeaderItem>
          </TableHeaderRow>
          <TableRow>
            <TableItem>12.08</TableItem>
            <TableItem>$200.12</TableItem>
            <TableItem>$120.12</TableItem>
            <TableItem>$80</TableItem>
            <TableItem>$4000</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>12.08</TableItem>
            <TableItem>$200.12</TableItem>
            <TableItem>$120.12</TableItem>
            <TableItem>$80</TableItem>
            <TableItem>$4000</TableItem>
          </TableRow>
          <TableRow>
            <TableItem>12.08</TableItem>
            <TableItem>$200.12</TableItem>
            <TableItem>$120.12</TableItem>
            <TableItem>$80</TableItem>
            <TableItem>$4000</TableItem>
          </TableRow>
        </Table>
      </Card>
    </Wrap>
  );
};
