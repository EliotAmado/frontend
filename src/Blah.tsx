import React from 'react';
import styles from './Blah.module.css'; //importing css styles

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo" />
        </div>
      </div>
      <div className="col align-self-center text-start">
        <h1 className={styles.h1}>{props.saying}</h1>
      </div>
    </>
  );
}

export default TopBanner; //exporting topbanner function from this file
