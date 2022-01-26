export interface Modal {
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
    header: string;
    content?: any;
    inputs?: any;
    callbackMethod: () => void;
  }
  