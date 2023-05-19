import { Box, Button, IconButton, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridDeleteForeverIcon, GridDeleteIcon, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  // use categories to create rows for
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createAt: new Date(category.created_at).toLocaleDateString('pt-BR'),
  }));
  
  const columns: GridColDef[] = [
    { 
      field: 'name', 
      headerName: 'ID',
      flex: 1, 
    },
    { 
      field: 'description', 
      headerName: 'Description',
      flex: 1, 
    },
    { 
      field: 'isActive', 
      headerName: 'Active',
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    {
      field: 'createAt',
      headerName: 'Created At',
      flex: 1,
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell,
    },
  ];

  
  function renderActionsCell(rowData: GridRenderCellParams) {
    return(
      <IconButton
       color= "secondary"
       onClick={() => console.log("clicked")}
       arial-label = "delete"
      >
        <GridDeleteForeverIcon />
      </IconButton>
      );
    }

    function renderIsActiveCell(rowData: GridRenderCellParams) {
      return(
        <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
        </Typography>
      );
      }

  return(
    <Box maxWidth="lg" sx={{ mt: 4, mb:4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{marginBottom: "1rem"}}
        >
          New Category
        </Button>
      </Box>
      {/*<Typography variant="h3" component="h1">
        CategoriesList Page
        {categories.map((category) => (
          <Typography key={category.id}>{category.name}</Typography>
        ))}   
      </Typography>*/}
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows} columns={columns} />
      </div>
    </Box>
  )};