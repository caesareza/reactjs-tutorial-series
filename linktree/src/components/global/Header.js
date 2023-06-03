import LogoCatCaming from "../../images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={LogoCatCaming} alt="cats coming" />
      </div>
      <p>
        <span>Honeyed Pastry</span> <br />
        Good Pastry for a good day
      </p>
    </header>
  );
}
