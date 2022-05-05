import React from 'react';

const Header = React.lazy(() => import('Header/Header'));

function App() {
  return (
    <div>
      Shell
      <React.Suspense fallback="Loading Button">
        <Header />
      </React.Suspense>
    </div>
  );
}

export default App;
