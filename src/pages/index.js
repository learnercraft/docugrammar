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
                        <div className="col margin-bottom--lg text--center">
                            <svg width="40vh" height="40vh" className="logo-home">
                                <use href="./img/docugrammar-home-logo.svg#docugrammar-icon"></use>
                            </svg>
                        </div>
                    </div>
                    <Heading as="h1">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link className="button button--secondary button--lg" to="./home">
                            Read now
                        </Link>
                    </div>
                </div>
            </header>
            <div className="card padding-vert--md margin-vert--md">
                <div className="card__body">
                    <div className="container">
                        <div className="row">
                            <div className="col col--4 text--center margin-bottom--lg">
                                <img src="./img/peu_logo.svg" width="200" />
                            </div>
                            <div className="col col--8">
                                <h2>About Practical English Usage</h2>
                                <p>
                                    Practical English Usage (PEU) answers the questions that teachers and learners ask
                                    about English grammar and vocabulary with clear, corpus-informed explanations and
                                    examples.
                                </p>
                                <p>
                                    It is written by Michael Swan and published by Oxford University Press. It is
                                    intended mainly for advanced students and teachers of English as a foreign or second
                                    language.
                                </p>
                                <p>
                                    PEU includes more than 600 entries divided into two parts -- grammar and vocabulary.
                                    From usage of tenses to changes in English, it aims to give the most important
                                    information to deal with common language problems.
                                </p>
                                <div>
                                    <Link className="button button--secondary button--lg" to="./peu/about">
                                        More info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card padding-vert--md margin-vert--md">
                <div className="card__body">
                    <div className="container">
                        <div className="row">
                            <div className="col col--4 text--center margin-bottom--lg">
                                <img src="./img/egt_cover.webp" height="300" />
                            </div>
                            <div className="col col--8">
                                <h2>About English Grammar Today</h2>
                                <p>
                                    English Grammar Today is an up-to-date guide to the grammar of modern English. It is
                                    useful for all users of English but in particular for learners of English at an
                                    intermediate to upper-intermediate level (CEF B1–C1). It will also be helpful to
                                    teachers of English looking for clear explanations and real examples.
                                </p>
                                <p>
                                    English Grammar Today provides a range of grammatical explanations from basic
                                    points, such as how we form questions in English, to more advanced points, such as
                                    how to use particular words and phrases to apologise, to address people, to be
                                    polite, to agree with others or to respond to what is said. They include key
                                    features of grammar, such as adjective, adverb, noun, determiner, ellipsis, main
                                    clause, future, conjunction, as well as individual words and pairs of words which
                                    are commonly confused, such as above/over and make/do.
                                </p>
                                <div>
                                    <Link className="button button--secondary button--lg" to="./egt">
                                        More info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <Layout
            title="Homepage"
            description="DocuGrammar—a collection of grammar references in web format (powered by Docusaurus)">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
