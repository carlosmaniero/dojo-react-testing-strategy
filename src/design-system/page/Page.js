import styled from "styled-components";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const Content = styled.section`
  padding: 20px;
`;

export const Page = ({children}) => <div>
  <Header />
  <Content>
      {children}
  </Content>
  <Footer />
</div>;