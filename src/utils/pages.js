const path = require(`path`);

exports.createBuildablePage = ({ buildableId, buildableType }) => {
  return {
    path: `/buildable/${buildableId}`,
    component: path.resolve(
      `./src/templates/${buildableType.toLowerCase()}.js`,
    ),
    context: {
      buildableId: buildableId,
    },
  };
};
