import styled from "styled-components";

type FlexContainerProps = {
  inline?: boolean;
  padded?: boolean;
};

export const ExLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})``;

/** General-purpose default container */
export const BaseContainer = styled.section``;

/** Flex-container for displaying items in a row */
export const FlexRow = styled(BaseContainer)<FlexContainerProps>`
  align-items: center;
  display: ${({ inline }) => (inline ? "inline-" : "")}flex;
  padding: ${({ padded, theme }) => (padded ? theme.sizes.sm : 0)};
`;

/** Flex-container for displaying items in a column */
export const FlexColumn = styled(FlexRow)`
  flex-direction: column;

  > * {
    width: 100%;
  }
`;

export const Code = styled.code`
  font-family: monospace;
  padding: ${({ theme }) => theme.sizes.sm};
`;

export const GridContainer = styled.div<{ columns?: string }>`
  display: grid;
  grid-template-columns: ${({ columns = "auto auto" }) => columns};
  grid-gap: 0;
`;

export const PageTitle = styled.h1.attrs({ className: "h2" })`
  margin: 0 0 1rem;
`;

export const PageContainer = styled(FlexColumn)`
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 80vmin;
  min-height: 70vmax;
  text-align: left;

  > hr {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0;
    height: 1px;
    margin: 1.5rem 0;
    opacity: 0.6;
  }

  @media screen and (max-width: 600px) {
    max-width: 95vmin;
  }
`;

export const Figure = styled.figure`
  margin-bottom: ${({ theme }) => theme.sizes.md};

  img {
    max-width: 448px;
    height: auto;
    width: 100%;
  }
`;

export const BigValue = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`;

export const CapsLabel = styled.div`
  color: #666;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const DataColumn = styled(FlexColumn)`
  text-align: left;
  width: 50%;
`;

const Icon = styled.span.attrs({ className: "material-icons" })``;
export const MatIcon = ({ icon }: { icon: string }) => <Icon>{icon}</Icon>;
