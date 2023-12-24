export default function Contact() {
  return (
    <div className="contact">
      <div className="section">Contact</div>
      <p>
        Have any <a>questions?</a>
      </p>
      <p>
        Even if you don't have any, you can <a>reach out to me!</a>
      </p>
      <div className="contact-info">
        <a href="mailto:stjepanbonic89@gmail.com" target="_blank">
          <img src="../email.svg" alt="Email" />
          <p>stjepanbonic89@gmail.com</p>
        </a>
        <a href="https://www.instagram.com/stjepanbonic/" target="_blank">
          <img src="../instagram.svg" alt="Instagram" />
          <p>@stjepanbonic</p>
        </a>
      </div>
    </div>
  );
}
