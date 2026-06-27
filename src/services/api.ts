import axios from "axios";
import { CompanyData } from "../types";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const apiService = {
  analyzeCompany: async (companyName: string): Promise<CompanyData> => {
    const trimmedName = companyName.trim();

    if (!trimmedName) {
      throw new Error("Company name is required.");
    }

    const response = await apiClient.post("/analyze", {
      company: trimmedName,
    });

    return response.data;
  },

  generatePdf: async (companyData: CompanyData): Promise<Blob> => {
    const response = await apiClient.post(
      "/reports/pdf",
      { companyData },
      {
        responseType: "blob",
      }
    );

    return response.data;
  },

  generatePpt: async (companyData: CompanyData): Promise<Blob> => {
    const response = await apiClient.post(
      "/reports/ppt",
      { companyData },
      {
        responseType: "blob",
      }
    );

    return response.data;
  },
};