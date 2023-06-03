import { RiPaypalLine, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const dataSosmed = [
  {
    id: 1,
    name: "Paypall",
    icon: <RiPaypalLine />,
    url: "https://react.dev",
  },
  {
    id: 2,
    name: "IG",
    icon: <RiInstagramLine />,
    url: "https://react.dev",
  },
  {
    id: 3,
    name: "YT",
    icon: <RiYoutubeLine />,
    url: "https://react.dev",
  },
];

export default function Footer() {
  return (
    <footer>
      <ul>
        {dataSosmed.map((value) => (
          <li key={value.id}>
            <a href={value.url}>{value.icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
