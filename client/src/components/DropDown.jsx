import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 18rem;
  margin: 0.5rem 0;
  padding: 0;
`;

const TopBar = styled.div`
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0.25rem;
  &:hover {
    border: 2px solid #da3743;
    padding: 5px calc(0.25rem - 1px);
  }
`;

const CurrentChoice = styled.span`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
`;

const CloseIcon = styled.i`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  background: url("data:image/svg+xml;charset=utf-8,<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'><title>icon/ic_up</title><g fill='none' fill-rule='evenodd'><path d='M0 24h24V0H0z'/><g transform='rotate(45 -4.571 18.864)' fill='%23333'><rect transform='matrix(-1 0 0 1 6 0)' width='6' height='2' rx='.5'/><rect transform='matrix(-1 0 0 1 2 0)' width='2' height='6' rx='.5'/></g></g></svg>");
  background-repeat: no-repeat;
  background-position: 50%;
`;

const OpenIcon = styled.i`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'%3E%3Ctitle%3Eicon/ic_down%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cg transform='scale(1 -1) rotate(45 25.607 6.364)' fill='%23333'%3E%3Crect transform='matrix(-1 0 0 1 6 0)' width='6' height='2' rx='.5'/%3E%3Crect transform='matrix(-1 0 0 1 2 0)' width='2' height='6' rx='.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 50%;
`;

const Options = styled.div`
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;
  border-top: 0 none;
  position: absolute;
  background-color: #fff;
  width: 18rem;
  display: block;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  z-index: 900;
`;

const Option = styled.div`
  padding: 0.5rem 0.25rem;
`;

const OptionInner = styled.div`
  display: flex;
  align-items: center;
`;

const Checked = styled.div`
height: 1.5rem;
width: 1.5rem;
background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eicon/ic_radio_filled%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Crect stroke='%23DA3743' stroke-width='7' x='5.5' y='5.5' width='13' height='13' rx='6.5' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
background-position: 50%;
background-repeat: no-repeat;
`;

const Unchecked = styled.div`
height: 1.5rem;
width: 1.5rem;
background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eicon/ic_radio_default%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Crect x='1' y='1' width='18' height='18' rx='9' fill='%23fff' transform='translate(2 2)' stroke='%23333' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
background-position: 50%;
background-repeat: no-repeat;
`;

const Text = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
`;

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      options: ['Newest', 'Highest rating', 'Lowest rating']
    };
    this.clickDropdown = this.clickDropdown.bind(this);
    this.selectChoice = this.selectChoice.bind(this);
  }

  clickDropdown() {
    this.setState({
      dropdown: !this.state.dropdown
    });
  }

  selectChoice(option) {
    this.props.changeChoice(option);
    this.setState({
      dropdown: false
    });
  }

  render() {
    return (
      <Body>
        <TopBar onClick={this.clickDropdown}>
          <CurrentChoice>
            {this.props.currentChoice}
          </CurrentChoice>
          {this.state.dropdown ? <CloseIcon></CloseIcon> : <OpenIcon></OpenIcon>}
        </TopBar>
        {this.state.dropdown ?
          <Options>
            {this.state.options.map((option, index) => {
              return (
                <Option key={index} onClick={() => {this.selectChoice(option)}}>
                  <OptionInner>
                    {option === this.props.currentChoice ? <Checked></Checked> : <Unchecked></Unchecked>}
                    <Text>{option}</Text>
                  </OptionInner>
                </Option>
              );
            })}
          </Options> : 
          <div></div>}
      </Body>
    );
  }
}

export default Sort;