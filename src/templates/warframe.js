import React from 'react';
import { graphql } from 'gatsby';

import BuildableDetail from 'src/components/buildable-detail';

export default ({ data }) => {
  const {
    warframe,
    imageName,
    ...stats
  } = data.warframeArsenal.warframeByBuildableId;
  return <BuildableDetail name={warframe} imageUrl={imageName} stats={stats} />;
};

export const query = graphql`
  query($buildableId: Int!) {
    warframeArsenal {
      warframeByBuildableId(buildableId: $buildableId) {
        warframe
        shield
        health
        armor
        energy
        imageName
      }
    }
  }
`;
