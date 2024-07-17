import React from 'react';
import styled from 'styled-components';

interface SVGGridProps {
    icons: React.ReactNode[];
}

export const SVGGrid: React.FC<SVGGridProps> = ({ icons }) => {
    return (
        <GridContainer>
            {icons.map((icon, index) => (
                <GridItem key={index}>{icon}</GridItem>
            ))}
        </GridContainer>
    );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
