import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.stackContainer}>
          <div className={styles.stackTitle}>TECHNOLOGY I USE</div>
          <div className={styles.stack}>
            <div className={styles.logo}>
              <img src="/svg/nextjs.svg" alt="Next.js" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/nodejs.svg" alt="Node.js" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/react.svg" alt="React" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/express.svg" alt="Express" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img
                src="/svg/mongodb.svg"
                alt="MongoDB"
                width="50"
                height="50"
              />
            </div>
            <div className={styles.logo}>
              <img src="/svg/mysql.svg" alt="MySQL" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img
                src="/svg/javascript.svg"
                alt="JavaScript"
                width="50"
                height="50"
              />
            </div>
            <div className={styles.logo}>
              <img src="/svg/css.svg" alt="CSS" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/html.svg" alt="HTML5" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/linux.svg" alt="Linux" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/git.svg" alt="Git" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/github.svg" alt="GitHub" width="50" height="50" />
            </div>
          </div>
        </div>
      <div className={styles.textContainer}>
        <div className={styles.info}>
          <div className={styles.aboutTitle}>ABOUT THIS WEBSITE</div>
          <div className={styles.intro}>
            I chose web development as my career only in 2023.
          </div>
          <div className={styles.desc}>
            <p>As I evidently lack years of expertise that many other web
            developers have, I am working double time to close this gap
            by constantly improving daily.</p>
            <p className={styles.separator}>This first version of the project serves{" "}
            <b> 3 demonstrative purposes: &nbsp;<span className={styles.arrow}>---{'>'}</span></b></p>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <b>
            <h3>1) Portfolio</h3>
          </b>
          <p className={styles.boxDesc}>To showcase my current and future work.</p>
        </div>
        <div className={styles.box}>
          <b>
            <h3>2) REST API: Fetching data</h3>
          </b>
          <p className={styles.boxDesc}>
            The Blog page fetches fake data for it's posts, as is usually done for prototype products.
          </p>
        </div>
        <div className={styles.box}>
          <b>
            <h3>3) REST API: GitHub Authentication</h3>
          </b>
          <p className={styles.boxDesc}>
            Integrated thanks to Auth.js, which automatically handles OAuth
            callbacks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
