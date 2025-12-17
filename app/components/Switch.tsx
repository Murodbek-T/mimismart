import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-border">
        <input id="one" type="checkbox" />
        <label htmlFor="one">
          <div className="handle">
            <div className="dot"></div>
          </div>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-border {
    border-radius: 50px;
    margin-bottom: 45px;
    padding: 1px 2px;
    background: linear-gradient(
        to bottom right,
        white,
        rgba(220, 220, 220, 0.5)
      ),
      white;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.24);
  }

  .toggle-border:last-child {
    margin-bottom: 0;
  }

  .toggle-border input[type="checkbox"] {
    display: none;
  }

  .toggle-border label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background: rgba(216, 216, 216);
    border-radius: 50px;
    cursor: pointer;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.3);
    transition: background 0.5s;
  }

  .toggle-border input[type="checkbox"]:checked + label {
    background: rgba(216, 216, 216);
  }

  .dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: red;
    border-radius: 50%;
    left: 11.5px;
    top: 11.5px;
  }

  .handle {
    position: absolute;
    top: 0.5px;
    left: 0.5px;
    width: 28.33px;
    height: 28.33px;
    border: 1px solid #e5e5e5;
    background: repeating-radial-gradient(
        circle at 50% 50%,
        rgba(200, 200, 200, 0.1) 0%,
        rgba(200, 200, 200, 0.1) 2%,
        transparent 2%,
        transparent 3%,
        rgba(200, 200, 200, 0.1) 3%,
        transparent 3%
      ),
      conic-gradient(
        white 0%,
        silver 10%,
        white 35%,
        silver 50%,
        white 60%,
        silver 70%,
        white 80%,
        silver 95%,
        white 100%
      );
    border-radius: 50%;
    box-shadow: -30px 0px 20px 5px #fffa;
    transition: left 0.4s;
  }

  .toggle-border input[type="checkbox"]:checked + label > .handle {
    left: calc(100% - 39px + 10px);
    box-shadow: 30px 0px 20px 5px #fffa;
  }
  .toggle-border input[type="checkbox"]:checked + label > .handle > .dot {
    background: rgba(30, 176, 47, 1);
  }
`;

export default Switch;
