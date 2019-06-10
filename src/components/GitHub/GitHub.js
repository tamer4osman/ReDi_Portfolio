import React from "react";
import GitHubCommit from "./GitHubCommit";
import Section from "../section";

const GitHub = props => {
  return (
    <Section heading="GitHub Commits">
      {props.myCommits &&
        props.myCommits.map(commit => (
          <GitHubCommit
            key={commit.id}
            header={commit.actor.login}
            image={commit.actor.avatar_url}
            commitMessage={commit.payload.commits[0].message}
            username={commit.actor.display_login}
          />
        ))}
    </Section>
  );
};

export default GitHub;
