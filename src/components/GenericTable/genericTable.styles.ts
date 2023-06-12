import { styled } from '@mui/material/styles';

export const GenericTableContainer = styled('div')(
  ({ theme }: any) => ` .tableContainer {

  .table {
     text-transform: capitalize;

     .thead {
        background-color: ${theme.palette.background.blue};

        th {
           color: ${theme.palette.textColors.white};
           text-align:center;
        }
     }

     .tbody {

        tr {
           td {
              text-align: center;
              border-bottom: thin solid grey;
           }
        }
     }
  }
}

`,
);
