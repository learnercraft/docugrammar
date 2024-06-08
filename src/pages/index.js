import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <>
            <header className={clsx("hero", styles.heroBanner)}>
                <div className="container">
                    <div className="row">
                        <div className="col margin-bottom--md text--center">
                            <svg width="200" height="200">
                                <use href="./img/grammarsaurus-black-home.svg#grammarsaurus-icon" className="logo-home"></use>
                            </svg>
                        </div>
                    </div>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link className="button button--secondary button--lg" to="/intro">
                            Read now
                        </Link>
                    </div>
                </div>
            </header>
            <header className={clsx("hero hero--dark")}>
                <div className="container">
                    <div className="row">
                        <div className="col col--4 text--center">
                            <img src="./img/peu_logo.svg" width="200" />
                        </div>
                        <div className="col col--8">
                            <h2>About Practical English Usage</h2>
                            <p>
                                Practical English Usage (PEU) answers the questions that teachers and learners ask about
                                English grammar and vocabulary with clear, corpus-informed explanations and examples.
                            </p>
                            <p>
                                It is written by Michael Swan and published by Oxford University Press. It is intended
                                mainly for advanced students and teachers of English as a foreign or second language.
                            </p>
                            <p>
                                PEU includes more than 600 entries divided into two parts -- grammar and vocabulary.
                                From usage of tenses to changes in English, it aims to give the most important
                                information to deal with common language problems.
                            </p>
                            <div>
                                <Link className="button button--secondary button--lg" to="/about">
                                    More info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default function Home() {
    return (
        <Layout
            title="Homepage"
            description="PEUsaurus - Practical English Usage in web format (powered by Docusaurus)">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
