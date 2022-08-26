import styled from "styled-components";

export const ListContainer = ({ display, checklist }) => {
  if (display) {
    if (checklist) {
      return (
        <PersonsListContainer>
          <div>checklist</div>
          <div>ss</div>
        </PersonsListContainer>
      )
    }
    return (
      <PersonsListContainer>
        <div>opa</div>
        <div>ss</div>
      </PersonsListContainer>
    )

  } else {
    return (
      <PersonsListContainer invisible>
        <div>.</div>
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
