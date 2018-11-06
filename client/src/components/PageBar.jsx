import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  height: 2rem;
`;

const LeftArrow = styled.div`
&:hover {
  border: solid 2px #da3743;
}
display: inline-flex;
justify-content: space-around;
align-items: center;
height: 2rem;
min-width: 2rem;
cursor: pointer;
border-radius: 5000px;
border: solid 1px #d8d9db;
margin-left: calc(0.5rem - 1px);
margin-right: calc(0.5rem - 1px);
background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='10' viewBox='0 0 7 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EIcon/Carot Down%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M16 17V-7H-8v24z'/%3E%3Cg fill='%23333'%3E%3Cpath d='M5 .765L.757 5.007l1.415 1.415 4.242-4.243z'/%3E%3Cpath d='M2.172 3.593L.757 5.007 5 9.25l1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat 50%;
`;

const LeftArrowNoHover = styled.div`
display: inline-flex;
justify-content: space-around;
align-items: center;
height: 2rem;
min-width: 2rem;
cursor: pointer;
border-radius: 5000px;
border: solid 1px #d8d9db;
margin-left: calc(0.5rem - 1px);
margin-right: calc(0.5rem - 1px);
background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='10' viewBox='0 0 7 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eicon-caret-left%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M16 17V-7H-8v24z'/%3E%3Cg fill-rule='nonzero' fill='%23717171'%3E%3Cpath d='M5 .765L.757 5.007l1.415 1.415 4.242-4.243z'/%3E%3Cpath d='M2.172 3.593L.757 5.007 5 9.25l1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat 50%;
`;

const RightArrow = styled.div`
&:hover {
  border: solid 2px #da3743;
}
display: inline-flex;
justify-content: space-around;
align-items: center;
height: 2rem;
min-width: 2rem;
cursor: pointer;
border-radius: 5000px;
border: solid 1px #d8d9db;
margin-left: calc(0.5rem - 1px);
margin-right: calc(0.5rem - 1px);
background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='10' viewBox='0 0 7 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EIcon/Carot Down%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-9 17V-7h24v24z'/%3E%3Cg fill='%23333'%3E%3Cpath d='M2 .765l4.243 4.242-1.415 1.415L.586 2.179z'/%3E%3Cpath d='M4.828 3.593l1.415 1.414L2 9.25.586 7.836z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat 50%;  
`;

const RightArrowNoHover = styled.div`
display: inline-flex;
justify-content: space-around;
align-items: center;
height: 2rem;
min-width: 2rem;
cursor: pointer;
border-radius: 5000px;
border: solid 1px #d8d9db;
margin-left: calc(0.5rem - 1px);
margin-right: calc(0.5rem - 1px);
background: url("data:image/svg+xml;charset=utf-8,<svg width='7' height='10' viewBox='0 0 7 10' xmlns='http://www.w3.org/2000/svg'><title>icon-caret-right</title><g fill='none' fill-rule='evenodd'><path d='M-9 17V-7h24v24z'/><g fill-rule='nonzero' fill='%23717171'><path d='M2 .765l4.243 4.242-1.415 1.415L.586 2.179z'/><path d='M4.828 3.593l1.415 1.414L2 9.25.586 7.836z'/></g></g></svg>") no-repeat 50%;
`;

const CurrentPage = styled.div`
  border: solid 2px #da3743;
  margin-left: calc(0.5rem - 2px);
  margin-right: calc(0.5rem - 2px);
  border-radius: 5000px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  min-width: 2rem;
  cursor: pointer;
`;

const OtherPages = styled.div`
  &:hover {
    border: solid 2px #da3743;
  }
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  min-width: 2rem;
  cursor: pointer;
  border-radius: 5000px;
  border: solid 1px #d8d9db;
  margin-left: calc(0.5rem - 1px);
  margin-right: calc(0.5rem - 1px);
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Body>
        {this.props.currentPage === 1 ?
          <LeftArrowNoHover></LeftArrowNoHover> :
          <LeftArrow onClick={
            () => {
              return this.props.newPage(this.props.currentPage - 1);
            }
          }></LeftArrow>}
        <div>
          {this.props.pages.map((page, index) => {
            if (page === this.props.currentPage) {
              return <CurrentPage key={index}>{page}</CurrentPage>;
            } else {
              return <OtherPages onClick={
                () => {
                  return this.props.newPage(page);
                }
              } key={index}>{page}</OtherPages>;
            }
          })}
        </div>
        {this.props.currentPage === this.props.pages.length ?
          <RightArrowNoHover></RightArrowNoHover> :
          <RightArrow onClick={
            () => {
              return this.props.newPage(this.props.currentPage + 1);
            }
          }></RightArrow>}
      </Body>
    );
  }
}

export default Review;