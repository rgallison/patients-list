export interface Modal {
    cancelButtonLabel?: string;
    confirmButtonLabel?: string;
    header: string;
    content?: any;
    input?: any;
    callbackMethod: (data:any) => void;
  }
  