import React from 'react';
import { graphql } from 'gatsby';

import BuildableDetail from 'src/components/buildable-detail';

export default ({ data }) => {
  const {
    sentinel,
    imageName,
    ...stats
  } = data.warframeArsenal.sentinelByBuildableId;
  return <BuildableDetail name={sentinel} imageUrl={imageName} stats={stats} />;
};

export const query = graphql`
  query($buildableId: Int!) {
    warframeArsenal {
      sentinelByBuildableId(buildableId: $buildableId) {
        sentinel
        shield
        health
        armor
        energy
        imageName
      }
    }
  }
`;
