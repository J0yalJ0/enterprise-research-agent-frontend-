import axios from "axios";
import { CompanyData } from "../types";

// Production Render Backend
const apiClient = axios.create({
  baseURL: "https://enterprise-research-agent.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export const apiService = {
  analyzeCompany: async (companyName: string): Promise<CompanyData> => {
    const trimmedName = companyName.trim();

    if (!trimmedName) {
      throw new Error("Company name is required.");
    }

    const response = await apiClient.post<CompanyData>("/analyze", {
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

export default apiService;