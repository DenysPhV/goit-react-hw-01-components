export default function Statistics({ id, label, percentage }) {
  return (
    <section>
      <h2>{id}</h2>

      <ul>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      </ul>
    </section>
  );
}
