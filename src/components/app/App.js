function App() {
  return (
    <div>
      <p>TEST</p>
      {/* <div className="container">
        <div className="item item--1">1: Orange</div>
        <div className="item item--2">2: Olive</div>
        <div className="item item--3">3: Salmon</div>
        <div className="item item--4">4: Sky Blue</div>
        <div className="item item--5">5: Hot Pink</div>
        <div className="item item--6">6: Medium Purple</div>
      </div> */}

      <div className="grid-container">
        <div className="grid-item item-1">Header</div>
        <div className="grid-item item-2">Sidebar</div>
        <div className="grid-item item-3">Small box 1</div>
        <div className="grid-item item-4">Small box 2</div>
        <div className="grid-item item-5">Small box 3</div>
        <div className="grid-item item-6">Main content</div>
        <div className="grid-item item-7">Footer</div>
      </div>
    </div>
  );
}

export default App;
