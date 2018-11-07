// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

//Styles
const UserSettingSideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 50%;
	background: #FFF;
	border: 3px solid black;
	border-radius: 4px;
`;

const UserSettingSideBarItem = styled.div`
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

class UserSettingSideBar extends Component {
  render() {
    return (
      <UserSettingSideBarContainer>
        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/summaries')
          }}>
          Summaries
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/positions')
          }}>
          Positions
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/education')
          }}>
          Education
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/skills')
          }}>
          Skills
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/resumes')
          }}>
          Resumes
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/billing')
          }}>
          Billing
				</UserSettingSideBarItem>

        <UserSettingSideBarItem
          onMouseDown={() => {
            this.props.history.push('/settings')
          }}>
          Settings
				</UserSettingSideBarItem>

      </UserSettingSideBarContainer>
    );
  }
}

export default UserSettingSideBar;
