import styled from "styled-components";
import { themeColors } from "../../theme/theme-variables";
const { pink, darkGray } = themeColors;

export const PaymentHeader = styled.div`
  margin-bottom: 16px;
`;

export const PaymentFormElement = styled.form`
  background: ${pink};
`;

export const UserEmail = styled.p`
  color: ${darkGray};
  margin: 0 0 4px 0;
`;

export const AccentContent = styled.span`
  font-weight: 800;
`;

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
