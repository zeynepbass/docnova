import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoices = createAsyncThunk(
  "invoice/fetchInvoices",
  async ({ companyId, jwt, startDate, endDate, page = 0, size = 20 }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api-dev.docnova.ai/invoice/search",
        {
          companyId,
          documentType: "OUTGOING",
          startDate,
          endDate,
          page,
          size,
          referenceDocument: "",
          type: null,
          status: null,
          paymentStatus: null,
          isDeleted: false,
        },
        { headers: { "Content-Type": "application/json", "R-Auth": jwt } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fatura verisi alınamadı");
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    selectedInvoice: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearInvoices: (state) => {
      state.invoices = [];
      state.error = null;
    },
    setSelectedInvoice: (state, action) => {
      state.selectedInvoice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearInvoices, setSelectedInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
