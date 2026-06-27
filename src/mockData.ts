import { CompanyData, NewsArticle, ReportItem } from "./types";

export const COMPANIES_LIST = [
  { id: "nvidia", name: "Nvidia Corporation", ticker: "NVDA" },
  { id: "microsoft", name: "Microsoft Corporation", ticker: "MSFT" },
  { id: "tesla", name: "Tesla, Inc.", ticker: "TSLA" },
  { id: "amazon", name: "Amazon.com, Inc.", ticker: "AMZN" },
  { id: "openai", name: "OpenAI Inc.", ticker: "PRIVATE" }
];

export const MOCK_COMPANIES_DATA: Record<string, CompanyData> = {
  nvidia: {
    id: "nvidia",
    name: "Nvidia Corporation",
    ticker: "NVDA",
    overview: "Nvidia Corporation is the global leader in programmable graphics processor technologies and accelerated computing. The company pioneered GPU computing, transforming from a PC graphics card specialist into an enterprise AI computing platform provider. Nvidia's compute systems, networks, and software are the primary engine powering modern generative AI models, deep learning, and high-performance computing (HPC) globally.",
    industry: "Semiconductors & AI Infrastructure",
    founded: "1993",
    employees: "29,600",
    headquarters: "Santa Clara, California",
    businessModel: "Nvidia operates a fabless manufacturing business model, focusing on high-value R&D, silicon architecture design, and comprehensive AI software stacks (CUDA, NIM, Enterprise AI). Silicon manufacturing is outsourced primarily to TSMC, while systems are sold directly to cloud service providers (CSPs), server OEMs, and global enterprises.",
    revenueStreams: [
      "Data Center AI Chips & Systems (H100, Blackwell B200)",
      "CUDA Enterprise Software & Subscriptions",
      "GeForce Gaming & Consumer GPUs",
      "Mellanox Networking Systems (Quantum InfiniBand, Spectrum-X)",
      "Omniverse & Professional Visualization",
      "Automotive Autonomous Driving Platforms (DRIVE Orin)"
    ],
    kpis: {
      overallScore: 94,
      growthScore: 98,
      riskScore: 35,
      innovationScore: 97
    },
    financials: [
      { year: "2022", revenue: 26.97, netIncome: 4.37, margin: 16.2 },
      { year: "2023", revenue: 27.00, netIncome: 4.36, margin: 16.1 },
      { year: "2024", revenue: 60.92, netIncome: 29.76, margin: 48.8 },
      { year: "2025", revenue: 96.30, netIncome: 53.00, margin: 55.0 }
    ],
    sentimentHistory: [
      { date: "Q1 2025", positive: 85, neutral: 10, negative: 5 },
      { date: "Q2 2025", positive: 88, neutral: 8, negative: 4 },
      { date: "Q3 2025", positive: 91, neutral: 6, negative: 3 },
      { date: "Q4 2025", positive: 94, neutral: 4, negative: 2 }
    ],
    marketShare: [
      { name: "Nvidia", share: 82.5, color: "#3B82F6" },
      { name: "AMD", share: 11.2, color: "#93C5FD" },
      { name: "Intel", share: 3.8, color: "#BFDBFE" },
      { name: "In-house Custom Silicon", share: 2.5, color: "#E2E8F0" }
    ],
    leadership: [
      {
        name: "Jensen Huang",
        role: "Founder, President & CEO",
        bio: "Jensen Huang founded Nvidia in 1993 and has served as President, CEO, and member of the board. He is widely recognized as one of the world's most visionary tech CEOs, spearheading the company's multi-decade shift into AI and accelerated computing.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
      },
      {
        name: "Colette Kress",
        role: "Executive VP & Chief Financial Officer",
        bio: "Colette Kress joined Nvidia in 2013 as CFO. She has over 25 years of finance experience in the technology sector, previously serving in senior finance roles at Cisco, Microsoft, and Texas Instruments.",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
      }
    ],
    products: [
      { name: "Blackwell GPU Architecture", description: "The world's most powerful enterprise AI chip, executing trillions-parameter generative AI models at 25x lower cost and energy consumption than predecessors.", segment: "Data Center" },
      { name: "CUDA Platform", description: "Proprietary parallel computing platform and programming model that remains Nvidia's primary competitive moat by locking developers into GPU ecosystem.", segment: "Software" },
      { name: "Quantum-X InfiniBand", description: "Ultra-low latency, high-bandwidth networking architecture essential for clustering tens of thousands of GPUs in large-scale AI data centers.", segment: "Networking" }
    ],
    competitors: [
      {
        name: "AMD (Advanced Micro Devices)",
        ticker: "AMD",
        marketCap: "$250B",
        revenue: "$22.6B",
        share: 11.2,
        strengths: ["MI300X AI accelerator shows strong memory capacities", "Competitive open-source software stack (ROCm)", "Robust x86 CPU portfolio"],
        weaknesses: ["Developer lock-in of Nvidia CUDA remains difficult to penetrate", "Late to market on enterprise software tooling", "Lower gross margin leverage"],
        opportunities: ["Hyperscaler desire to source alternative GPU suppliers to lower costs", "Growing adoption of PyTorch which bridges hardware gaps", "PC AI integration momentum"],
        threats: ["Rapid succession of Nvidia Blackwell and Rubydom cycles", "TSMC packaging constraints limiting supply allocations", "Intense pricing wars from dominant market leader"]
      },
      {
        name: "Intel Corporation",
        ticker: "INTC",
        marketCap: "$95B",
        revenue: "$54.2B",
        share: 3.8,
        strengths: ["Gaudi AI acceleration lines provide high value-for-money metrics", "Global fabrication and IDM 2.0 architecture plans", "Deep legacy PC and server footprint"],
        weaknesses: ["Substantial design execution delays", "Severe underperformance in massive-scale AI training", "Financial restructuring and capital constraints"],
        opportunities: ["US CHIPS Act subsidies for domestic foundry capabilities", "Edge AI client deployments in standard business laptops", "Enterprise cost-containment market segment"],
        threats: ["Total loss of high-end AI data center market share to fabless designers", "Erosion of primary x86 CPU server market share", "High capital burn rate during foundry construction phase"]
      }
    ]
  },
  microsoft: {
    id: "microsoft",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    overview: "Microsoft Corporation is a global technology leader operating across cloud services, enterprise software, personal computing, and artificial intelligence. Driven by its mission to empower every person and organization on the planet to achieve more, Microsoft has solidified its modern era through its hyper-scale cloud platform Azure, deep multi-billion dollar strategic alignment with OpenAI, and rapid integration of Copilot AI across its ubiquitous Office ecosystem.",
    industry: "Enterprise Software & Cloud Computing",
    founded: "1975",
    employees: "228,000",
    headquarters: "Redmond, Washington",
    businessModel: "Microsoft utilizes a highly diversified software-as-a-service (SaaS), platform-as-a-service (PaaS), and infrastructure-as-a-service (IaaS) recurring subscription model. It generates high-margin revenue from enterprise cloud contracts, consumer software subscriptions, hardware devices, and digital advertising.",
    revenueStreams: [
      "Azure Cloud Infrastructure & Consumption Services",
      "Microsoft 365 Enterprise SaaS & Copilot Subscriptions",
      "GitHub Developer Platforms & Copilot Subscriptions",
      "LinkedIn Talent, Premium & Advertising Solutions",
      "Xbox Gaming Hardware, Content & Xbox Game Pass",
      "Windows OEM Licensing & Commercial Systems"
    ],
    kpis: {
      overallScore: 92,
      growthScore: 89,
      riskScore: 18,
      innovationScore: 94
    },
    financials: [
      { year: "2022", revenue: 198.27, netIncome: 72.74, margin: 36.7 },
      { year: "2023", revenue: 211.91, netIncome: 72.36, margin: 34.1 },
      { year: "2024", revenue: 245.12, netIncome: 88.13, margin: 36.0 },
      { year: "2025", revenue: 278.40, netIncome: 101.50, margin: 36.5 }
    ],
    sentimentHistory: [
      { date: "Q1 2025", positive: 88, neutral: 9, negative: 3 },
      { date: "Q2 2025", positive: 89, neutral: 8, negative: 3 },
      { date: "Q3 2025", positive: 91, neutral: 7, negative: 2 },
      { date: "Q4 2025", positive: 92, neutral: 6, negative: 2 }
    ],
    marketShare: [
      { name: "Amazon AWS", share: 31.0, color: "#BFDBFE" },
      { name: "Microsoft Azure", share: 25.4, color: "#3B82F6" },
      { name: "Google Cloud", share: 11.5, color: "#93C5FD" },
      { name: "Others", share: 32.1, color: "#E2E8F0" }
    ],
    leadership: [
      {
        name: "Satya Nadella",
        role: "Chairman & Chief Executive Officer",
        bio: "Satya Nadella has been CEO of Microsoft since 2014, leading a massive corporate cultural transformation and strategic pivot toward mobile, cloud, and systemic AI engineering.",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
      },
      {
        name: "Amy Hood",
        role: "Executive VP & Chief Financial Officer",
        bio: "Amy Hood joined Microsoft in 2002 and was named CFO in 2013. Under her fiscal leadership, Microsoft's market capitalization expanded exponentially, driven by Azure cloud margin optimization.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120"
      }
    ],
    products: [
      { name: "Azure AI Studio", description: "A cutting-edge platform enabling enterprise developers to deploy, fine-tune, and monitor generative AI models at scale with high security.", segment: "Cloud Computing" },
      { name: "Microsoft 365 Copilot", description: "Ubiquitous productivity suite integration that automates research, drafting, coding, and analysis inside Word, Excel, and Teams.", segment: "Productivity SaaS" },
      { name: "GitHub Copilot", description: "The world's most widely adopted developer AI pair programmer, driving 55%+ coding efficiency gains across enterprise tech teams.", segment: "Developer Tools" }
    ],
    competitors: [
      {
        name: "Amazon Web Services (AWS)",
        ticker: "AMZN",
        marketCap: "$1.9T (Parent)",
        revenue: "$90.8B",
        share: 31.0,
        strengths: ["First-mover advantage and massive compute scale", "Unmatched catalog of cloud services", "Deep enterprise client stickiness"],
        weaknesses: ["Slower to market on consumer-facing generative AI interfaces", "High-cost switching barriers which irritate some enterprise developers", "Lower perceived integration with Microsoft operating suites"],
        opportunities: ["Expanding Bedrock AI model catalog (Anthropic, Meta, etc.)", "Custom high-efficiency silicon (Trainium, Inferentia)", "Vast enterprise database modernization contracts"],
        threats: ["Azure's hyper-growth and exclusive OpenAI distribution channels", "Google Cloud pricing agility and TPUs", "Severe tech talent recruitment war in generative engineering"]
      },
      {
        name: "Google Cloud Platform (GCP)",
        ticker: "GOOGL",
        marketCap: "$2.1T (Parent)",
        revenue: "$33.1B",
        share: 11.5,
        strengths: ["Pioneering AI research foundations (Transformer architecture)", "Cost-effective, highly scalable custom TPU architectures", "Exceptional data analytics and Kubernetes environments"],
        weaknesses: ["Third-place market share footprint", "Weaker enterprise enterprise executive sales reach", "Historic developer-centric product reputation"],
        opportunities: ["Gemini 3 series model integration across Google Workspace", "Leading-edge agentic workflows and multi-modal models", "Sovereign cloud requirements in Europe and APAC"],
        threats: ["Microsoft and AWS dual oligopoly lock-in", "Severe developer attrition to dedicated AI wrappers", "High capital investments in data centers leading to margin pressure"]
      }
    ]
  },
  tesla: {
    id: "tesla",
    name: "Tesla, Inc.",
    ticker: "TSLA",
    overview: "Tesla, Inc. designs, develops, manufactures, sells, and leases fully electric vehicles, energy generation systems, and utility-scale battery storage solutions. Tesla has positioned itself as an AI and robotics powerhouse, leveraging its expansive consumer vehicle fleet to harvest real-world visual training data for its Full Self-Driving (FSD) neural networks, humanoid Optimus robot, and advanced Dojo supercomputing projects.",
    industry: "Automotive, Energy & Robotics",
    founded: "2003",
    employees: "140,000",
    headquarters: "Austin, Texas",
    businessModel: "Tesla combines high-volume manufacturing with digital software monetization. It sells electric vehicles directly to consumers, bypasses dealerships, and layers high-margin subscription software (FSD) and charging infrastructure services (Supercharger network) on top of its hardware fleet.",
    revenueStreams: [
      "Electric Vehicle Sales & Leases (Model Y, Model 3, Cybertruck)",
      "Full Self-Driving (FSD) Software & Subscriptions",
      "Energy Storage Systems (Megapack, Powerwall)",
      "Regulatory Automotive Carbon Credits",
      "Tesla Supercharging Network & Service Fees"
    ],
    kpis: {
      overallScore: 86,
      growthScore: 82,
      riskScore: 48,
      innovationScore: 95
    },
    financials: [
      { year: "2022", revenue: 81.46, netIncome: 12.58, margin: 15.4 },
      { year: "2023", revenue: 96.77, netIncome: 14.97, margin: 15.5 },
      { year: "2024", revenue: 96.77, netIncome: 13.42, margin: 13.9 },
      { year: "2025", revenue: 104.20, netIncome: 14.80, margin: 14.2 }
    ],
    sentimentHistory: [
      { date: "Q1 2025", positive: 72, neutral: 15, negative: 13 },
      { date: "Q2 2025", positive: 75, neutral: 14, negative: 11 },
      { date: "Q3 2025", positive: 78, neutral: 12, negative: 10 },
      { date: "Q4 2025", positive: 82, neutral: 10, negative: 8 }
    ],
    marketShare: [
      { name: "Tesla EV", share: 51.3, color: "#3B82F6" },
      { name: "Hyundai-Kia EV", share: 7.4, color: "#93C5FD" },
      { name: "Ford EV", share: 6.2, color: "#BFDBFE" },
      { name: "Others (GM, Rivian, BYD)", share: 35.1, color: "#E2E8F0" }
    ],
    leadership: [
      {
        name: "Elon Musk",
        role: "Chief Executive Officer & Technoking",
        bio: "Elon Musk has been CEO of Tesla since 2008. He oversees all product design, engineering, and manufacturing of the company's electric vehicles, battery energy systems, and advanced AI automation.",
        avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=120"
      },
      {
        name: "Vaibhav Taneja",
        role: "Chief Financial Officer",
        bio: "Vaibhav Taneja was appointed CFO in 2023. He has decades of international accounting experience and joined Tesla following its acquisition of SolarCity.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
      }
    ],
    products: [
      { name: "Full Self-Driving (Supervised)", description: "End-to-end neural network autonomous driving software running on custom HW4 silicon, utilizing cameras and AI vision models.", segment: "Autonomous Driving" },
      { name: "Megapack 2XL", description: "Utility-scale containerized lithium-ion battery system designed to stabilize electrical grids and store renewable energy.", segment: "Energy Storage" },
      { name: "Optimus Robot", description: "Bipedal humanoid robot designed to automate repetitive, dangerous, or labor-intensive manufacturing tasks.", segment: "Robotics & AI" }
    ],
    competitors: [
      {
        name: "BYD Auto Co.",
        ticker: "002594.SZ",
        marketCap: "$88B",
        revenue: "$84.3B",
        share: 22.0,
        strengths: ["Fully vertically integrated battery supply chain (Blade Battery)", "Massive domestic market scale and lower manufacturing cost footprint", "Highly agile, rapid model refresh cycles"],
        weaknesses: ["Weaker software and autonomous driving capability compared to Tesla", "Minimal brand premium value in western markets", "Lower gross margin percentages due to price competition"],
        opportunities: ["Aggressive expansion into European and South American auto markets", "Sovereign fleet electrification mandates", "Affordable EV segments ($15K to $25K)"],
        threats: ["Increasing Western tariff walls (US, EU anti-subsidy import tariffs)", "Geopolitical semiconductor trade blockades", "Intense local price competition within Chinese boundaries"]
      },
      {
        name: "Rivian Automotive",
        ticker: "RIVN",
        marketCap: "$11B",
        revenue: "$4.4B",
        share: 4.1,
        strengths: ["High-grade product aesthetic and award-winning truck platform", "Deep, multi-year commercial fleet deal with Amazon", "Exceptional adventure-brand reputation"],
        weaknesses: ["Severe cash burn rate and path to unit-profitability delays", "Single-plant assembly bottlenecks", "Limited production diversity"],
        opportunities: ["Joint venture engineering with Volkswagen Group for software architecture", "Upcoming affordable mid-size SUV lines (R2, R3)", "Commercial vehicle platform licensing"],
        threats: ["Imminent capital constraints requiring dilutive equity financing", "Aggressive price cuts from Tesla eroding premium margins", "Rising consumer interest rates cooling EV premium adoption"]
      }
    ]
  },
  amazon: {
    id: "amazon",
    name: "Amazon.com, Inc.",
    ticker: "AMZN",
    overview: "Amazon.com, Inc. is a global multinational technology conglomerate focused on e-commerce, cloud computing (AWS), digital streaming, and artificial intelligence. Driven by extreme customer obsession, Amazon is integrating massive LLMs and agentic networks across its fulfillment warehouses, Alexa systems, automated retail checkouts, and custom cloud accelerator architectures.",
    industry: "E-Commerce & Cloud Infrastructure",
    founded: "1994",
    employees: "1,525,000",
    headquarters: "Seattle, Washington",
    businessModel: "Amazon operates a powerful high-volume retail marketplace combined with extremely profitable enterprise cloud, subscription Prime services, and high-margin digital advertising. It reinvests operating cash flow aggressively into warehousing, automated fulfillment logistics, and physical data centers.",
    revenueStreams: [
      "Amazon Retail Product Sales & Third-Party Marketplace Fees",
      "AWS Cloud Infrastructure Consumption Contracts",
      "Amazon Prime Consumer Subscription Memberships",
      "Digital Retail Display & Sponsored Product Advertising",
      "Physical Grocery Store Sales (Whole Foods Market)"
    ],
    kpis: {
      overallScore: 89,
      growthScore: 85,
      riskScore: 22,
      innovationScore: 90
    },
    financials: [
      { year: "2022", revenue: 513.98, netIncome: -2.72, margin: -0.5 },
      { year: "2023", revenue: 574.78, netIncome: 30.42, margin: 5.3 },
      { year: "2024", revenue: 621.50, netIncome: 41.20, margin: 6.6 },
      { year: "2025", revenue: 685.00, netIncome: 51.50, margin: 7.5 }
    ],
    sentimentHistory: [
      { date: "Q1 2025", positive: 81, neutral: 12, negative: 7 },
      { date: "Q2 2025", positive: 82, neutral: 13, negative: 5 },
      { date: "Q3 2025", positive: 84, neutral: 11, negative: 5 },
      { date: "Q4 2025", positive: 86, neutral: 10, negative: 4 }
    ],
    marketShare: [
      { name: "Amazon US E-commerce", share: 37.8, color: "#3B82F6" },
      { name: "Walmart", share: 6.4, color: "#93C5FD" },
      { name: "Apple", share: 3.6, color: "#BFDBFE" },
      { name: "Others (eBay, Target)", share: 52.2, color: "#E2E8F0" }
    ],
    leadership: [
      {
        name: "Andy Jassy",
        role: "President & Chief Executive Officer",
        bio: "Andy Jassy succeeded Jeff Bezos as CEO in 2021. He previously founded and led Amazon Web Services (AWS) from its inception, building it into the world's most profitable cloud ecosystem.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120"
      },
      {
        name: "Brian Olsavsky",
        role: "Senior VP & Chief Financial Officer",
        bio: "Brian Olsavsky has served as CFO of Amazon since 2015, overseeing global financial controllership and capital deployment strategies across retail and AWS infrastructure.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120"
      }
    ],
    products: [
      { name: "Amazon Bedrock", description: "Fully managed AWS service offering secure API access to high-performance LLMs from Anthropic, Meta, Cohere, AI21, and Amazon.", segment: "Cloud Computing AI" },
      { name: "Rufus AI Shopping Agent", description: "Generative-AI powered conversational shopping assistant integrated into consumer retail applications to drive purchase conversions.", segment: "E-Commerce" },
      { name: "Proteus Autonomous Robot", description: "Amazon's first fully autonomous mobile warehouse robot, designed to lift, move, and transport heavy packages safely around workers.", segment: "Robotics & Logistics" }
    ],
    competitors: [
      {
        name: "Walmart Inc.",
        ticker: "WMT",
        marketCap: "$560B",
        revenue: "$648.1B",
        share: 6.4,
        strengths: ["Unrivaled physical store network and grocery distribution chain", "Rapidly scaling online marketplace and delivery network", "Powerful retail pricing leverage with suppliers"],
        weaknesses: ["Higher reliance on low-margin physical infrastructure", "Slower tech platform development", "Lower tech talent penetration"],
        opportunities: ["Walmart+ subscription service scaling", "Automating supply stores with regional robotic hubs", "First-party digital retail advertising"],
        threats: ["Amazon Prime's superior delivery speed expectations", "Increasing minimum wage labor costs", "Severe inflation cooling consumer discretionary budgets"]
      },
      {
        name: "Shopify Inc.",
        ticker: "SHOP",
        marketCap: "$94B",
        revenue: "$7.0B",
        share: 10.3,
        strengths: ["The default infrastructure suite for independent D2C merchants", "Exceptional, modern developer ecosystem", "Highly profitable software-only business model"],
        weaknesses: ["No integrated regional warehouse delivery network of its own", "High merchant churn rate", "Dependency on third-party digital advertising conversion"],
        opportunities: ["Shop Pay network checkout optimization", "Integrating generative AI product catalog copy generators", "Expanding digital cross-border trade rails"],
        threats: ["Amazon 'Buy with Prime' encroaching on independent store checkouts", "E-commerce volume normalization", "Merchant transition to low-fee competitors"]
      }
    ]
  },
  openai: {
    id: "openai",
    name: "OpenAI Inc.",
    ticker: "PRIVATE",
    overview: "OpenAI is an artificial intelligence research and deployment company. Driven by its core mission to ensure that artificial general intelligence (AGI) benefits all of humanity, OpenAI catalyzed the modern consumer generative AI revolution through ChatGPT and has established itself as the premier developer platform for frontier large language models (GPT-4o, o1, o3-mini).",
    industry: "Frontier Artificial Intelligence",
    founded: "2015",
    employees: "1,800",
    headquarters: "San Francisco, California",
    businessModel: "OpenAI operates a hybrid commercial-research structure. It generates substantial recurring high-margin SaaS revenue from ChatGPT Plus/Team/Enterprise tiers, developer API usage fees, and strategic licensing dividends from Microsoft Azure cloud allocations.",
    revenueStreams: [
      "ChatGPT Plus Premium Consumer Subscriptions",
      "Developer API Usage Fees (GPT-4o, GPT-o1, Embeddings)",
      "ChatGPT Enterprise & Business Workspace Contracts",
      "Microsoft Strategic Partnership & Revenue Shares",
      "Apple Intelligence & Device Model Integrations"
    ],
    kpis: {
      overallScore: 91,
      growthScore: 96,
      riskScore: 55,
      innovationScore: 99
    },
    financials: [
      { year: "2022", revenue: 0.08, netIncome: -0.54, margin: -675.0 },
      { year: "2023", revenue: 1.60, netIncome: -1.20, margin: -75.0 },
      { year: "2024", revenue: 3.70, netIncome: -2.10, margin: -56.7 },
      { year: "2025", revenue: 5.20, netIncome: -3.00, margin: -57.7 }
    ],
    sentimentHistory: [
      { date: "Q1 2025", positive: 80, neutral: 10, negative: 10 },
      { date: "Q2 2025", positive: 82, neutral: 9, negative: 9 },
      { date: "Q3 2025", positive: 85, neutral: 8, negative: 7 },
      { date: "Q4 2025", positive: 89, neutral: 6, negative: 5 }
    ],
    marketShare: [
      { name: "OpenAI (ChatGPT/API)", share: 64.5, color: "#3B82F6" },
      { name: "Anthropic (Claude)", share: 18.2, color: "#93C5FD" },
      { name: "Google (Gemini)", share: 12.1, color: "#BFDBFE" },
      { name: "Open Source (Llama/Mistral)", share: 5.2, color: "#E2E8F0" }
    ],
    leadership: [
      {
        name: "Sam Altman",
        role: "Chief Executive Officer",
        bio: "Sam Altman is the CEO of OpenAI and former president of Y Combinator. He has guided OpenAI's massive pivot from non-profit lab to the commercial vanguard of deep learning.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
      },
      {
        name: "Sarah Friar",
        role: "Chief Financial Officer",
        bio: "Sarah Friar joined OpenAI as CFO in 2024, previously serving as CEO of Nextdoor and CFO of Square, leading SQ through its successful IPO.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
      }
    ],
    products: [
      { name: "ChatGPT Enterprise", description: "Enterprise-grade conversational workspace with dedicated admin controls, SSO, and guaranteed data-privacy boundaries.", segment: "Enterprise SaaS" },
      { name: "GPT-4o API Suite", description: "Multi-modal vision and audio developer API enabling real-time voice synthesis and advanced image parsing.", segment: "Developer API" },
      { name: "OpenAI o1 / o3-mini Reasoning", description: "Frontier deep reasoning models that spend more time thinking before responding, solving complex math, code, and logical proofs.", segment: "Frontier Models" }
    ],
    competitors: [
      {
        name: "Anthropic PBC",
        ticker: "PRIVATE",
        marketCap: "$18B (Valuation)",
        revenue: "$400M",
        share: 18.2,
        strengths: ["Claude 3.5 Sonnet is recognized as a leader in coding and reasoning", "Constitutional AI principles focusing on enterprise safety", "Major cloud alignments with Amazon and Google"],
        weaknesses: ["Much lower direct consumer brand footprint than ChatGPT", "Smaller corporate capitalization than OpenAI", "Limited native developer tools catalog"],
        opportunities: ["Capturing security-conscious corporate finance compliance departments", "Computer-use API agent automation", "Scaling enterprise custom model fine-tuning services"],
        threats: ["OpenAI's massive developer-ecosystem network effect", "Deep pricing discounts from open-source alternatives", "High capital burn rates on large cluster training runs"]
      },
      {
        name: "Meta Platforms (Open Source Llama)",
        ticker: "META",
        marketCap: "$1.3T",
        revenue: "$134.9B (Parent)",
        share: 5.2,
        strengths: ["Zero license cost deployment for open source parameters", "Massive distributed computing capacity", "Huge developer community customization speed"],
        weaknesses: ["Substantial local hosting and inference cluster management overhead", "No dedicated direct real-time corporate customer support desks", "Lagging slightly on cutting-edge proprietary model capacities"],
        opportunities: ["Expanding Llama 4 multi-modal vision systems inside edge devices", "Open-source fine-tuned vertical compliance systems (legal, med)", "Eroding the pricing power of closed APIs"],
        threats: ["Strict European and US AI regulations targeting developer liabilities", "Lack of direct corporate feedback interfaces", "High-performance inference hardware bottlenecks"]
      }
    ]
  }
};

export const MOCK_NEWS_DATA: Record<string, NewsArticle[]> = {
  nvidia: [
    { id: "nv-1", title: "Nvidia Blackwell Shipments Slated to Surge in Q3, Supply Chain Bottlenecks Easing", source: "Bloomberg", date: "2026-06-20", sentiment: "positive", summary: "Supply chain analysis reveals TSMC CoWoS packaging yields have stabilized, paving the way for a massive acceleration in high-end Blackwell enterprise shipments to Microsoft, Meta, and CoreWeave.", credibility: "High", impact: "Major positive driver for data center revenue acceleration." },
    { id: "nv-2", title: "Competitors Form Open Hardware Coalition to Target CUDA Programming Monopoly", source: "Reuters", date: "2026-06-18", sentiment: "neutral", summary: "AMD, Intel, Google, and Meta have expanded their unified software layer partnership, trying to ease compilation of non-CUDA compilers for PyTorch models.", credibility: "High", impact: "Moderate long-term threat to proprietary lock-in." },
    { id: "nv-3", title: "US Commerce Department Reviews AI Export Guardrails Following Silicon Intercepts", source: "The Wall Street Journal", date: "2026-06-12", sentiment: "negative", summary: "Regulatory reviews are exploring stricter latency caps on customized microchip shipments to APAC markets to prevent military parallel supercomputing capabilities.", credibility: "High", impact: "Potential headwinds for APAC shipping volumes." }
  ],
  microsoft: [
    { id: "ms-1", title: "Microsoft Azure Outpaces AWS in Enterprise Generative Workload Adoption", source: "The Financial Times", date: "2026-06-22", sentiment: "positive", summary: "Azure's corporate computing expansion grew 31% YoY, driven by extensive enterprise API integrations of OpenAI o1 models and Microsoft 365 Copilot seats.", credibility: "High", impact: "Reinforces cloud oligopoly market share gains." },
    { id: "ms-2", title: "Azure Infrastructure Team Outlines $45B Carbon-Neutral Nuclear Energy Contracts", source: "Wired", date: "2026-06-15", sentiment: "positive", summary: "Microsoft signed extensive green energy purchase agreements to power secondary data centers in the Midwest, securing base-load power for massive AI clustering.", credibility: "Medium", impact: "Secures long-term electrical power grids for training runs." },
    { id: "ms-3", title: "EU Antitrust Regulators Initiate Audit Over Office Copilot Bundling Concerns", source: "Politico", date: "2026-06-08", sentiment: "negative", summary: "European Commission is reviewing whether bundling Copilot AI into standard commercial Office subscriptions violates fair competitive guidelines.", credibility: "High", impact: "Possible regulatory compliance overhead in EMEA." }
  ],
  tesla: [
    { id: "ts-1", title: "Tesla Supervised FSD Active Driver Miles Exceed 3 Billion, Neural Network v13 Ready", source: "TechCrunch", date: "2026-06-21", sentiment: "positive", summary: "FSD cumulative driving telemetry hits new records, with engineers preparing a massive end-to-end model update to improve multi-lane merging and parking.", credibility: "High", impact: "Strengthens software-based recurring revenue potential." },
    { id: "ts-2", title: "Tesla Unveils Megapack Gigafactory Expansion Plans in Europe, Targets Grid Storage", source: "Handelsblatt", date: "2026-06-14", sentiment: "positive", summary: "New utility battery manufacturing infrastructure announced to address severe grid stabilization demand backlog across the European Union.", credibility: "Medium", impact: "Accelerates high-margin energy storage division growth." },
    { id: "ts-3", title: "Global EV Battery Prices Soften Amid Lithium Overcapacity, Relieving Margin Stress", source: "Barron's", date: "2026-06-10", sentiment: "positive", summary: "Raw material prices have normalized by 18%, boosting gross margins per vehicle for automotive manufacturers during seasonal volume cycles.", credibility: "High", impact: "Strong positive impact on corporate gross margins." }
  ],
  amazon: [
    { id: "az-1", title: "Amazon AWS Deploys 200,000 Custom Trainium2 Chips Across Global Clusters", source: "ZDNet", date: "2026-06-19", sentiment: "positive", summary: "AWS announced general availability of its next-generation custom silicon, reducing fine-tuning model costs by up to 40% compared to equivalent silicon.", credibility: "High", impact: "Eases chip capital constraints and vendor concentration risks." },
    { id: "az-2", title: "Amazon Pharmacy Service Rolls Out AI Prescription Checkouts to 30 US States", source: "Forbes", date: "2026-06-16", sentiment: "positive", summary: "Digital health initiative integrates generative triage to cross-check clinical guidelines against insurance coverages instantly.", credibility: "Medium", impact: "Drives prime-customer health monetization stickiness." },
    { id: "az-3", title: "Fulfillment Workers Strike in Logistics Hubs over Automated Robotic Quotas", source: "CNBC", date: "2026-06-11", sentiment: "negative", summary: "Labor movements are demanding stricter transparency over warehouse automation schedules and physical safety limits on human shifts.", credibility: "High", impact: "Short-term supply logistics friction during seasonal sales." }
  ],
  openai: [
    { id: "op-1", title: "OpenAI Launches o3-mini Reasoning Engine with Multi-Modal Image Input Support", source: "The Verge", date: "2026-06-23", sentiment: "positive", summary: "The new model combines systemized chains of reasoning with ultra-low latency, achieving unparalleled math and logic score benchmarks at Developer API level.", credibility: "High", impact: "Secures API volume and developer engagement dominance." },
    { id: "op-2", title: "OpenAI Completes $6.6B Funding Round, Valuing Corporation at $157B", source: "The New York Times", date: "2026-06-17", sentiment: "positive", summary: "Sovereign investment pools, venture capital firms, and enterprise clients backed the corporate restructuring to fund massive future cluster infrastructure.", credibility: "High", impact: "Ensures financial runway for compute scaling runs." },
    { id: "op-3", title: "Executive Turnovers Continue as OpenAI Transitioning to For-Profit Structure", source: "The Information", date: "2026-06-05", sentiment: "neutral", summary: "Several research scientists have transitioned out of the safety division to establish alternative labs as OpenAI restructures corporate safety systems.", credibility: "High", impact: "Slight reputational attrition but streamlines commercialization." }
  ]
};

export const MOCK_REPORTS_DATA: Record<string, ReportItem[]> = {
  nvidia: [
    { id: "rep-nv-1", title: "Nvidia Q1 2026 Strategic Intelligence Pack", type: "pdf", date: "2026-05-12", companyId: "nvidia", size: "4.8 MB", status: "ready" },
    { id: "rep-nv-2", title: "NVDA vs AMD: Silicon Battleground swot Analysis", type: "ppt", date: "2026-06-01", companyId: "nvidia", size: "12.4 MB", status: "ready" }
  ],
  microsoft: [
    { id: "rep-ms-1", title: "MSFT Azure Cloud Multi-Year Expansion Forecast", type: "pdf", date: "2026-05-20", companyId: "microsoft", size: "6.2 MB", status: "ready" },
    { id: "rep-ms-2", title: "Microsoft Copilot Enterprise ROI & Seat Penetration", type: "ppt", date: "2026-06-10", companyId: "microsoft", size: "18.1 MB", status: "ready" }
  ],
  tesla: [
    { id: "rep-ts-1", title: "TSLA Autonomous Driving & FSD Commercialization Model", type: "pdf", date: "2026-05-18", companyId: "tesla", size: "5.5 MB", status: "ready" },
    { id: "rep-ts-2", title: "Tesla Megapack Grid-Storage Multi-Year Backlog Forecast", type: "ppt", date: "2026-06-05", companyId: "tesla", size: "14.2 MB", status: "ready" }
  ],
  amazon: [
    { id: "rep-az-1", title: "AMZN AWS custom Silicon Deployment & Cost Advantage Pack", type: "pdf", date: "2026-05-25", companyId: "amazon", size: "7.1 MB", status: "ready" },
    { id: "rep-az-2", title: "Amazon Prime Conversions & Rufus AI Shopping Impact", type: "ppt", date: "2026-06-12", companyId: "amazon", size: "11.8 MB", status: "ready" }
  ],
  openai: [
    { id: "rep-op-1", title: "OpenAI Private Market Valuations & Restructuring Analysis", type: "pdf", date: "2026-05-28", companyId: "openai", size: "3.9 MB", status: "ready" },
    { id: "rep-op-2", title: "Frontier o-series Deep-Reasoning API Volume Trajectory", type: "ppt", date: "2026-06-15", companyId: "openai", size: "10.5 MB", status: "ready" }
  ]
};
