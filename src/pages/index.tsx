import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  return (
    <Layout title="Welcome" description="Aivix Bench Documentation">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Welcome to Aivix Bench Documentation</h1>
            <p>
              Aivix Bench is a voice-first AI agent builder that integrates with
              n8n and GPT-based agents.
            </p>
            <div className="margin-top--lg">
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
