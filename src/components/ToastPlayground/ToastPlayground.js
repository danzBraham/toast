import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variantOption, setVariantOption] = React.useState("notice");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ message, variantOption });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="current-variant-option"
                    value={option}
                    checked={option === variantOption}
                    onChange={(e) => setVariantOption(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button className={styles.button}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
