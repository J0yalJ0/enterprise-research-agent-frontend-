export interface KPIMetrics {
  overallScore: number;
  growthScore: number;
  riskScore: number;
  innovationScore: number;
}

export interface FinancialMetric {
  year: string;
  revenue: number;
  netIncome: number;
  margin: number;
}

export interface SentimentDistribution {
  date: string;
  positive: number;
  neutral: number;
  negative: number;
}

export interface MarketShareItem {
  name: string;
  share: number;
  color?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ProductItem {
  name: string;
  description: string;
  segment: string;
}

export interface CompetitorData {
  name: string;
  ticker: string;
  marketCap: string;
  revenue: string;
  share: number;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface CompanyData {
  id: string;
  name: string;
  ticker: string;
  overview: string;
  industry: string;
  founded: string;
  employees: string;
  headquarters: string;
  businessModel: string;
  revenueStreams: string[];
  kpis: KPIMetrics;
  financials: FinancialMetric[];
  sentimentHistory: SentimentDistribution[];
  marketShare: MarketShareItem[];
  leadership: LeadershipMember[];
  products: ProductItem[];
  competitors: CompetitorData[];
}

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  sentiment: "positive" | "neutral" | "negative";
  summary: string;
  credibility: "High" | "Medium" | "Low";
  impact: string;
}

export interface ReportItem {
  id: string;
  title: string;
  type: "pdf" | "ppt";
  date: string;
  companyId: string;
  size: string;
  status: "ready" | "generating" | "failed";
  summaryMarkdown?: string;
}

export interface MessageSource {
  id: string;
  title: string;
  source: string;
  snippet: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  sources?: MessageSource[];
}

export interface AgentState {
  status: "idle" | "searching" | "synthesizing" | "generating" | "completed";
  activity: string;
}
