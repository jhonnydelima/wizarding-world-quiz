/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDB }) {
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        externalQuestions={externalDB.questions}
        externalBg={externalDB.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverResponse) => {
        if (serverResponse.ok) {
          return serverResponse.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((responseToObject) => responseToObject);
      // .catch((err) => {
      //   // console.error(err);
      // });

    // console.log('externalDB', externalDB);
    // console.log('Info que o Next nos dá', context.query.id);
    return {
      props: {
        externalDB,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
