import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";

/**
 * @interface ActionProps
 * @property label - Label of the button to be displayed
 * @property testId - A requirement for test cases to be developed in the future
 * @property additionalProps - Additional properties for the button, please refer to @interface ButtonProps of @mui/material
 */
export interface ActionProps {
  label: string;
  testId: string;
  additionalProps: ButtonProps;
}

/**
 * @interface CustomDialogProps
 * @property isOpen - Specifies whether the dialog is open
 * @property heading - The title/heading of the dialog
 * @property bodyContentAlignment - Alignment of the content within the dialog body ('left', 'center', 'right')
 * @property closeModalEnabled - Specifies if a close button should be displayed (default: true)
 * @property actions - An array of ActionProps defining the buttons/actions within the dialog
 * @property children - The content to be displayed within the dialog
 */
export interface CustomDialogProps {
  isOpen: boolean;
  heading?: string;
  bodyContentAlignment?: 'left' | 'center' | 'right';
  closeModalEnabled?: boolean;
  actions?: ActionProps[];
  children: ReactNode;
}
