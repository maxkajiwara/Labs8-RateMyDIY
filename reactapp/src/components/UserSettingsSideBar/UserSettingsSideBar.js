// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

//Styles
const UserSideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 50%;
	background: #FFF;
	border: 3px solid black;
	border-radius: 4px;
`;

const UserSideBarItem = styled.div`
font-size: 18px;
	display: flex;
  justify-content: center;
  flex-direction: column;
	height: 24px;
	padding: 0px 6px;
  &:hover { background: lightblue;
    transition-duration: .1s;
  }
`;
class UserSideBar extends Component {
  render() {
    return (
      <UserSideBarContainer>
        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/summaries')
          }}>
          Summaries
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/positions')
          }}>
          Positions
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/education')
          }}>
          Education
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/skills')
          }}>
          Skills
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/resumes')
          }}>
          Resumes
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/billing')
          }}>
          Billing
				</UserSideBarItem>

        <UserSideBarItem
          onMouseDown={() => {
            this.props.history.push('/settings')
          }}>
          Settings
				</UserSideBarItem>

      </UserSideBarContainer>
    );
  }
}

export default UserSideBar;
