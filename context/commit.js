const github = require('@actions/github');

module.exports = {
  getCommitContext: () => {
    const context = github.context;
    const message = context.payload.head_commit ? context.payload.head_commit.message : '';

    return {
      ref: process.env.GITHUB_REF,
      runNumber: process.env.GITHUB_RUN_NUMBER,
      sha: process.env.GITHUB_SHA,
      triggeredBy: context.payload.head_commit && context.payload.head_commit.author.name
        ? context.payload.head_commit.author.name
        : process.env.GITHUB_ACTOR,
      repository: process.env.GITHUB_REPOSITORY,
      message,
    };
  },
};