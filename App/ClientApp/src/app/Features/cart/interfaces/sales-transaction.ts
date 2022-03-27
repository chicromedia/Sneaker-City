import { ICartRequest } from "./cart-request";
import { CreditCard } from "./credit-card";
import { BillingInfo } from "./billing-info";

export interface SalesTransaction
{
  orderId: string;
  billingInfo: BillingInfo;
  card: CreditCard;
  requests: ICartRequest[]
}
