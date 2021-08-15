import styles from "./ButtonPagination.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export default function ButtonPagination() {
  const countries = useSelector((state) => state.countries);
 
  const [page, setPage] = useState(0);
  const filtred = countries.slice(page, page + 10);
  console.log(filtred.length)
  const next_Page = () => {
    if (filtred.length <= page + 10) {
      setPage(page);
    } else setPage(page + 10);
  };
  const prev_Page = () => {
    if (page < 9) {
      setPage(0);
    } else {
      setPage(page - 10);
    }
  };
  const first_Page = () => {
    setPage(0);
  };
  // const last_Page = () => {
  //     setPage(countries.length - 10)
  // };
  useEffect(() => {
    first_Page();
  }, [filtred]);
  var button = false;

  if (countries.length >= 10) {
    button = true;
  }

  let buttonInit = true;
  let buttonEnd = true;

  if (page === 0) {
    buttonInit = false;
  }

  if (page === 240) {
    buttonEnd = false;
  }

  return (
    <div>
      {button ? (
        <div className={styles.container}>
          {buttonInit ? (
            <button className={styles.button} onClick={prev_Page}>
              Back
            </button>
          ) : (
            <div></div>
          )}
          {buttonEnd ? (
            <button className={styles.button} onClick={next_Page}>
              Next
            </button>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
