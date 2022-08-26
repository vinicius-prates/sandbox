import { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../global_components/Navbar/Navbar";
import { InputsContainer } from "./components/InputsContainer";
import { ListContainer } from "./components/ListContainer";

export const JustifyManage = () => {
  const [checklist, setChecklist] = useState(false);

  return (
    <>
      <Navbar />
      <Whole>
        <InputsContainer checklist={checklist} setChecklist={setChecklist} />
        <div className="ListContainerBlock">
          {checklist && <ListContainer display={true} checklist />}
          {!checklist && <ListContainer display={true} />}
          <ListContainer display={true} />
        </div>
      </Whole>
    </>
  );
};

const Whole = styled.div`
  height: 100vh;
  background-color: #eff1f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ListContainerBlock{
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;
