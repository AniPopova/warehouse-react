import {
  Explanation,
  HTwoMPage,
  RegBox,
  StyledLi,
} from "../../styles/CommonStyles";

function Home() {
  return (
    <>
      <div>
        <div>
          <RegBox>
            <HTwoMPage>Program Functionality:</HTwoMPage>
            <ol>
              <StyledLi>User Authentication:</StyledLi>
              <StyledLi>Product Management:</StyledLi>
              <StyledLi>Order Management:</StyledLi>
              <StyledLi>Inventory Tracking:</StyledLi>
              <StyledLi>Supplier Management:</StyledLi>
              <StyledLi>User Roles and Permissions:</StyledLi>
              <StyledLi>Reports and Analytics:</StyledLi>
            </ol>
          </RegBox>
          <RegBox>
            <HTwoMPage>Instructions for Clients:</HTwoMPage>
            <ol>
              <StyledLi>Login / Signup:</StyledLi>
              <StyledLi>Product Management:</StyledLi>
              <StyledLi>Order Placement:</StyledLi>
              <StyledLi>Inventory Tracking:</StyledLi>
              <StyledLi>SuppStyledLier Interaction:</StyledLi>
              <StyledLi>Reports and Analytics:</StyledLi>
            </ol>
          </RegBox>
        </div>
      </div>
      <footer>
        <RegBox>
          <Explanation>Buy this program here ...</Explanation>
        </RegBox>
      </footer>
    </>
  );
}

export default Home;
