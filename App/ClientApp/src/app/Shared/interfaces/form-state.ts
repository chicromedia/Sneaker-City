export interface FormState<T = any>
{
  dirty?: boolean;
  model?: T;
  status?: 'VALID' | 'INVALID'
}
