import styled from "styled-components";

export const ListContainer = (props) => {
  if (props.display) {
    return (
      <PersonsListContainer>
        <div>opa</div>
        <div>ss</div>
      </PersonsListContainer>
    );
  } else {
    return (
      <PersonsListContainer invisible>
        <div>SIM</div>
      </PersonsListContainer>
    );
  }
};

const PersonsListContainer = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  height: 50%;
  visibility: ${props => props.invisible ? 'hidden' : 'visible'};
`;
