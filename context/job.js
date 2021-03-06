const core = require("@actions/core");

module.exports = {
  getJobContext: () => {
    const event = core.getInput('event', { required: true });
    const type = core.getInput('type', { required: false });
    const environment = core.getInput('environment', { required: false });
    const { status = 'Unknown' } = JSON.parse(process.env.JOB_CONTEXT || {});

    return {
      event,
      environment,
      type,
      status: status === 'Success' && event === 'build-start' ? 'In Progress' : status,
      workflow: process.env.GITHUB_WORKFLOW,
    }
  },
};