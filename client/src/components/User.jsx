import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 6rem;
  position: relative;
  flex: none;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  align-items: center;
`;

const Abbreviation = styled.div`
  color: #ffffff;
  font-weight: 500;
  text-transform: capitalize;
`;

const Username = styled.div`
  margin-bottom: 0.25rem;
  color: #2d333f;
  word-break: break-word;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
`;

const VIP = styled.span`
  text-transform: uppercase;
  position: absolute;
  background-color: #fdaf08;
  padding: 2px 0.5rem;
  font-size: 12px;
  border-radius: 1rem;
  font-weight: 700;
  top: -2px;
  color: #fff;
  left: 0;
`;

const Location = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.43;
  color: #6f737b;
  margin-bottom: 0.5rem;
`;

const UserReviews = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.43;
  flex: none;
  white-space: nowrap;
  color: #6f737b;
`;

const ReviewIcon = styled.span`
  background-image: url("data:image/svg+xml;charset=utf-8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><title>universal / icon / details / small / ic_ticket copy</title><path d='M4.5 3.5A1.5 1.5 0 0 0 3 5v4.099a1.5 1.5 0 0 0 1.5 1.5h3.073L9.8 12.091a.5.5 0 0 0 .779-.409l.013-1.083h.908a1.5 1.5 0 0 0 1.5-1.5V5a1.5 1.5 0 0 0-1.5-1.5h-7z' stroke='%236F737B' fill='none'/></svg>");
  display: inline-block;
  position: relative;
  height: 16px;
  width: 16px;
  flex: none;
  margin-right: 0.25rem;
`;

const NumOfReviews = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.43;
  white-space: nowrap;
  color: #6f737b;
`;

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UserBody>
        <Icon style={{background: `rgb${this.props.review.iconColor}`}}>
          <Abbreviation>{this.props.review.abbreviation}</Abbreviation>
        </Icon>
        <Username>
          {this.props.review.vip === 1 ? <VIP>VIP</VIP> : <span></span>}
          <span>{this.props.review.username}</span>
        </Username>
        <Location>{this.props.review.hometown}</Location>
        <UserReviews>
          <ReviewIcon></ReviewIcon>
          <NumOfReviews>
            {this.props.review.numOfReviews === 1 ? this.props.review.numOfReviews + ' review' : this.props.review.numOfReviews + ' reviews'}
          </NumOfReviews>
        </UserReviews>
      </UserBody>
    );
  }
}

export default User;