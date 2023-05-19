import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category{
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  description: string | null;
}

const category: Category = {
  id: "0001",
  name: "Category",
  description: "Category description",
  is_active: true,
  deleted_at: null,
  created_at: "2020-01-01T00:00:00.000Z",
  updated_at: "2020-01-01T00:00:00.000Z",
};

export const inicialState = [  
    category,
    {...category, id: "0002", name: "Peach"},
    {...category, id: "0003", name: "Apple"},
    {...category, id: "0004", name: "Banana"},
  ];


const categoriesSlice = createSlice({
  name: 'categories',
  initialState: inicialState,
  reducers: {
    createCategory(state, actions) {},
    updateCategory(state, actions) {},
    deleteCategory(state, actions) {},
  },
})

// Selector for category
export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;