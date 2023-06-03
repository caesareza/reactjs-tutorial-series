const dataLink = [
  {
    id: 1,
    name: "Menu",
    url: "https://react.dev",
  },
  {
    id: 2,
    name: "Online Order",
    url: "https://react.dev",
  },
  {
    id: 3,
    name: "Our Story",
    url: "https://react.dev",
  },
  {
    id: 4,
    name: "Locations",
    url: "https://react.dev",
  },
];
export default function Content() {
  return (
    <main>
      <ul className="menu">
        {dataLink.map((value) => (
          <li key={value.id}>
            <a href={value.url}>{value.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
