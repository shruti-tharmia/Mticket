import { useContext } from 'react';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import { LocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { ITableProps } from './genericTable.types';
import { GenericTableContainer } from './genericTable.styles';

const GenericTable = ({ data, headers }: ITableProps) => {
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;
  return (
    <GenericTableContainer>
      {data.length > 0 ? (
        <TableContainer className="tableContainer" data-testid="tableContainer">
          <Table className="table" data-testid="table">
            <TableHead className="thead" data-testid="tableHead">
              <TableRow>
                {headers.map((header, index) => {
                  return (
                    <TableCell key={index}>{header.displayName}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody className="tbody" data-testid="tableBody">
              {data?.map((rowData: any, index: number) => {
                return (
                  <TableRow key={index}>
                    {headers.map(header => {
                      return (
                        <TableCell key={header.id}>
                          {rowData[header.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>{localString?.noDataFounf}</p>
      )}
    </GenericTableContainer>
  );
};

export default GenericTable;
