import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.banner}>
        <img className={styles.bannerBg} src="/images/shape.svg" alt="" />
        <div className={styles.bannerTop}>
          <h1 className={styles.bannerHeader}>Contact Us</h1>
          <p className={styles.bannerDesp}>
            Thank you for your intrest in our services. Please try out the form
            below or e-email us.
          </p>
        </div>
        <div className={styles.bannerBottom}>
          <span className={styles.bannerImage}>
            <Image
              src="/images/contactImage.svg"
              alt=""
              width={825}
              height={550}
            />
          </span>
          <form className={styles.bannerForm} action="submit">
            <input
              type="text"
              placeholder="Your Name*"
              className={styles.bannerInput}
            />
            <input
              type="text"
              placeholder="Your Number*"
              className={styles.bannerInput}
            />
            <input
              type="text"
              placeholder="You Email*"
              className={styles.bannerInput}
            />
            <textarea
              rows="4"
              type="text"
              placeholder="Message"
              className={styles.bannerInput}
            />
            <button>SEND MESSAGE</button>
          </form>
        </div>
        <h1 className={styles.bannerServicesHeader}>Get In Touch</h1>
        <div className={styles.bannerServices}>
          <div className={styles.bannerService}>
            <div className={styles.serviceImage}>
              <Image src="/images/callIcon.svg" width={35} height={35} />
            </div>
            <span className={styles.serviceRight}>
              +837 483 47835
              <br />
              +545 546 4887
            </span>
          </div>
          <div className={styles.bannerService}>
            <div className={styles.serviceImage}>
              <Image src="/images/smsIcon.svg" width={35} height={35} />
            </div>
            <span className={styles.serviceRight}>
              Youremail322@gmail.com
              <br />antoerhone21@gmail.com
            </span>
          </div>
          <div className={styles.bannerService}>
            <div className={styles.serviceImage}>
              <Image src="/images/locationIcon.svg" width={35} height={35} />
            </div>
            <span className={styles.serviceRight}>
            123,youraddress,
              <br />
            your road.office number
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
