import styled from "styled-components";
export const Table = styled.table`
  font-family: "Arial";
`;
export const TableHeader = styled.th`
  text-align: center;
  padding: 5px;
`;

export const TableData = styled.td`
  text-align: center;
  font-size: 11pt;
`;
export const TableDataId = styled(TableData)`
  text-align: right;
`;
export const TableDataText = styled(TableData)`
  padding-left: 10pt;
`;
export const TableDataButton = styled(TableData)`
  padding-left: 10pt;
`;
