import { i18n,  withTranslation } from '@./i18n'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = ({t}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! {t('title')}</a>
        </h1>

        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
        >
          dil degis
        </button>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

export default withTranslation('common')(Home)