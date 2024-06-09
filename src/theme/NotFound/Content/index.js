import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function NotFoundContent({ className }) {
    return (
        <main className={clsx("container margin-vert--xl", className)}>
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h1" className="hero__title">
                        <span className="noto-color-emoji-regular">⚠️ </span>
                        <Translate id="theme.NotFound.title" description="The title of the 404 page">
                            Page not found
                        </Translate>
                    </Heading>
                    <p>
                        <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
                            We couldn't find the page you were looking for. Please check to ensure the URL is correct.
                        </Translate>
                    </p>
                    <p>
                        <Translate id="theme.NotFound.p2" description="The 2nd paragraph of the 404 page">
                            If you followed a link that brought you here, please open an issue on GitHub and report the
                            broken URL to help us fix it.
                        </Translate>
                    </p>
                    <div className="text--center">
                        <img src={useBaseUrl("/img/undraw_by_the_road_re_vvs7.svg")} />
                    </div>
                </div>
            </div>
        </main>
    );
}
