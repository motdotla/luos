import Head from 'next/head';
import Router from 'next/router';
import { Widget } from '@typeform/embed-react';

import '@typeform/embed/build/css/widget.css';
import styles from 'pages/typeform/form.module.scss';

const Form = () => (
  <div className={styles.container}>
    <Head>
      <title>Is Luos for you</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.mainForm}>
      <h1 className={styles.title}>Let&apos;s see how Luos could suit your needs.</h1>
      <Widget
        id="QMXQbzmh"
        className={styles.form}
        onSubmit={({ responseId }) => {
          Router.push('/typeform/diagnostic/' + responseId);
        }}
      />
    </main>
  </div>
);

export default Form;
