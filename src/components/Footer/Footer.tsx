import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__copyright">© 2025 abratsiuk</div>
      <div>
        <a
          href="https://github.com/abratsiuk/projects-presentation"
          target="_blank"
          className="Footer__repo"
        >
          repo
        </a>
      </div>
    </footer>
  );
};
