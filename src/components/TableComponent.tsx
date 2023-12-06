import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { TextField } from '@fluentui/react/lib/TextField';
import TableState from '../interfaces/TableState'; 


const TableComponent: React.FC = () => {
  const [state, setState] = React.useState<TableState>({
    items: [],
    newItem: {
      column1: '',
      column2: '',
      column3: '',
    },
    warning: '',
  });

  const columns: IColumn[] = [
    { key: 'id', name: 'ID', fieldName: 'id', minWidth: 50, maxWidth: 100, isResizable: true },
    { key: 'column1', name: 'Name', fieldName: 'column1', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Address', fieldName: 'column2', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'University', fieldName: 'column3', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

  const addItem = () => {
    if (!state.newItem.column1 || !state.newItem.column2 || !state.newItem.column3) {
      setState((prev) => ({ ...prev, warning: 'Please fill in all the input boxes before adding an item.' }));
      return;
    }

    const newItemCopy = {
      id: state.items.length + 1,
      ...state.newItem,
    };

    setState((prev) => ({
      items: [...prev.items, newItemCopy],
      newItem: { column1: '', column2: '', column3: '' },
      warning: '',
    }));
  };

  const onInputChange = (columnName: keyof typeof state.newItem) => (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    setState((prev) => ({ ...prev, newItem: { ...prev.newItem, [columnName]: newValue || '' } }));
  };

  return (
    <div className="formContainer">
      <TextField label="Column 1" placeholder='Enter Your Name' value={state.newItem.column1} onChange={onInputChange('column1')} />
      <TextField label="Column 2" placeholder='Enter Your Address' value={state.newItem.column2} onChange={onInputChange('column2')} />
      <TextField label="Column 3" placeholder='Enter Your University' value={state.newItem.column3} onChange={onInputChange('column3')} />

      <PrimaryButton text="Add Item" onClick={addItem} />

      {state.warning && <div className="warning">{state.warning}</div>}

      <DetailsList
        items={state.items}
        columns={columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
        styles={{ root: { marginBottom: '20px' } }}
      />
    </div>
  );
};

export default TableComponent;
