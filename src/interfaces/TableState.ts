interface TableState {
    items: {
      id: number;
      column1: string;
      column2: string;
      column3: string;
    }[];
    newItem: {
      column1: string;
      column2: string;
      column3: string;
    };
    warning: string;
  }
  
  export default TableState;
  