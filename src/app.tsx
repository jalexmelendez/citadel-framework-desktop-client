import React from 'react';
import ReactDOM from 'react-dom';
import {
  AdminGuesser,
  hydraDataProvider,
  hydraSchemaAnalyzer,
} from '@api-platform/admin';

const Admin = () => (
  <AdminGuesser
    // Use your custom data provider or resource schema analyzer
    dataProvider={hydraDataProvider({ entrypoint: 'http://localhost:8000/api' })}
    schemaAnalyzer={hydraSchemaAnalyzer()}
  />
);

ReactDOM.render(<Admin />, document.getElementById('root'));