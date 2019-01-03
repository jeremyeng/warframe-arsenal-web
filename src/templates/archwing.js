import React from 'react';
import { graphql } from 'gatsby';

import BuildableDetail from 'src/components/buildable-detail';

export default ({ data }) => {
  const {
    archwing,
    imageName,
    ...stats
  } = data.warframeArsenal.archwingByBuildableId;
  return <BuildableDetail name={archwing} imageUrl={imageName} stats={stats} />;
};

export const query = graphql`
  query($buildableId: Int!) {
    warframeArsenal {
      archwingByBuildableId(buildableId: $buildableId) {
        archwing
        shield
        health
        armor
        energy
        imageName
      }
    }
  }
`;
