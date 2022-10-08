import { DAOEvent } from "reach/sdk";
import { FormDesc } from "components/Forms/Form";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  border: 1px solid #fff4;
  border-radius: 4px;
  box-shadow: 0 0 8px #000;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  transition: box-shadow 150ms ease-out, background-color 250ms ease-out;
  &:hover {
    box-shadow: 0 0 2px #000;
    background-color: #00000050;
  }
  ${FormDesc} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DAOItem = ({ contract, description, name }: DAOEvent) => (
  <Container to={`/dao/${contract}`} title={`View or join ${name}`}>
    <h6>{name}</h6>
    <FormDesc>{description}</FormDesc>
  </Container>
);

export default DAOItem;
