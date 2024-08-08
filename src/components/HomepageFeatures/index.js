import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Web format",
        Svg: require("@site/static/img/undraw_online_page_re_lhgx.svg").default,
        description: (
            <>
                DocuGrammar—a collection of grammar references (powered by Docusaurus) in web format. Navigate the
                entries you want with ease. Read anywhere, anytime on any devices with no compromises. Switch to light
                or dark mode at any time.
            </>
        ),
    },
    {
        title: "Open source",
        Svg: require("@site/static/img/undraw_pair_programming_re_or4x.svg").default,
        description: (
            <>
                The source code of DocuGrammar is on GitHub. Mistakes, spelling errors, inconsistent format or anything
                else you can spot can be edited. You can also contribute code or functions to further improve the
                project.
            </>
        ),
    },
    {
        title: "Markdown (for content)",
        Svg: require("@site/static/img/undraw_text_files_au1q.svg").default,
        description: (
            <>
                We mostly use Markdown, which is a simple plain-text format, for the content in <code>/docs</code>. We
                believe Markdown makes it easy to contribute to the project.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
