import React, { useState } from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Body,
  Container,
  Footer,
  IconContainer,
  ImageContainer,
  Row,
  RowsContainer,
  RowText,
  RowTitleText,
  SubmitButton,
  SubTitle,
  Title,
  TitleConatiner,
  TableContainer,
  Table,
  TimeButton,
  TimeButtonContainer,
  Tablee,
} from "../components/ShowTable";

export default function OnsiteReservPage() {
  const [table, setTable] = useState(false);

  return (
    <Container>
      <Body>
        <ImageContainer />
        <TableContainer>
          <Tablee />
          <Table />
          <Tablee />
          <Tablee />
          <Tablee />
          <Tablee />
          <Table />
          <Table />
          <Table />
          <Tablee />
          <Tablee />
          <Table />
          <Table />
          <Tablee />
          <Table />
          <Tablee />
        </TableContainer>
      </Body>
    </Container>
  );
}