import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const PORTFOLIO_LINKS = [
    {
      content: "Website Source Code",
      link: "https://github.com/zzosdunk/eshop",
    },
    { content: "Personal Landing Page", link: "https://dzosym.com/" },
    { content: "Github", link: "https://github.com/zzosdunk" },
  ];

  const SOCIAL_LINKS = [
    {
      content: "LinkedIn",
      link: "https://www.linkedin.com/in/denys-zosym-498b39141/",
    },
    { content: "Facebook", link: "https://www.facebook.com/zzosdunk" },
    { content: "Instagram", link: "https://www.instagram.com/zonikmus/" },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["footer-col-1"]}>
            <h3>Download Our App</h3>
            <p>Download App for iOS and Android mobile phone.</p>
            <div className={styles["app-logo"]}>
              <img
                src="https://i.postimg.cc/8PPQN4Kc/app-store.webp"
                alt="mobStore-img"
              />
              <img
                src="https://i.postimg.cc/N0RP12JZ/play-store.webp"
                alt="mobStore-img"
              />
            </div>
          </div>
          <div className={styles["footer-col-2"]}>
            <p>
              Our purpose is to sustainably make the pleasure and benefits of
              sports accessible to the many.
            </p>
          </div>
          <div className={styles["footer-col-3"]}>
            <h3>Useful Links</h3>
            <ul>
              {PORTFOLIO_LINKS.map((link) => {
                return (
                  <li key={link.content}>
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles["footer-col-4"]}>
            <h3>Follow Us</h3>
            <ul>
              {SOCIAL_LINKS.map((link) => {
                return (
                  <li key={link.link}>
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright {year} - Denys Zosym</p>
      </div>
    </div>
  );
};

export default Footer;
