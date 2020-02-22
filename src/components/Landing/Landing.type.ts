export interface ILandingProps {
  userEmail: string;
  orderIsInitiated: boolean;
  amount: number;
  orderSuccess: boolean;
  onOrderClick: () => void;
  onEmailInput: (e: any) => void;
  onAmountInputBlur: (event: any) => void;
  setAmount: (amount: number) => void;
  setOrderSuccess: () => void;
}

export interface ILandingState {
  userEmail: string;
}
