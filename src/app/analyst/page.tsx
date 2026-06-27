import React from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { ChatBox } from "../../components/analyst/ChatBox";
import { Sources } from "../../components/analyst/Sources";
import { useChatStore } from "../../store/chatStore";

export default function AnalystPage() {
  const { activeSources } = useChatStore();

  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Analyst Workspace"
        description="Interactive conversational interface backed by our real-time SEC Edgar, Form 10-K, and Bloomberg Terminal grounding models."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Conversation Stream */}
        <div className="lg:col-span-2">
          <ChatBox />
        </div>

        {/* Right Grounding Sources Sidebar */}
        <div className="lg:col-span-1">
          <Sources sources={activeSources} />
        </div>
      </div>
    </div>
  );
}
