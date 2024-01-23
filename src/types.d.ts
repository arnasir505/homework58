export interface AlertType {
  id: number;
  type: string;
  content: string;
  canClose: boolean;
  clickDismissable?: boolean;
}
