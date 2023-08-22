export interface InputProps {
    register: any;
    handleBlur: any;
    handleChange: any;
    data: any;
    phoneError: any;
    // Các props khác nếu cần
  }
  
  export interface MyFormComponentsProps {
    children: string;
    inputComponent: JSX.Element;
    inputProps: InputProps;
  }
  