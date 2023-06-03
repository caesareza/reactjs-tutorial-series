import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.nama;

    const shoppingData = [data, input.value].flat();
    setData(shoppingData);

    form.reset();
  };

  const onDeleteCart = (value) => {
    const dataBaru = data.filter((val) => val !== value);
    setData(dataBaru);
  };

  return (
    <main>
      <h1>
        Let's Find The <span className="yellow">Best Food</span> Around You
      </h1>
      <form onSubmit={onSubmit}>
        <input name="nama" id="nama" required={true} type="text" />
        <button>Simpan</button>
      </form>

      <ul className="my-shopping-list">
        {data.length <= 0 && <div>Shopping list kamu kosong</div>}
        {data.map((value, index) => (
          <li key={index}>
            <span>{value}</span>
            <button onClick={() => onDeleteCart(value)}>Hapus</button>
          </li>
        ))}
      </ul>

      <div className="nav">
        <div className="nav-content">
          <div>{data.length} items</div>
          <button onClick={() => setData([])}>Hapus Semua</button>
        </div>
      </div>
    </main>
  );
}

export default App;
