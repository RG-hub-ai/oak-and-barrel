"use client";

import { useEffect } from "react";

export function N8nChat() {
  useEffect(() => {
    // Load CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Load and initialize chat
    const loadChat = async () => {
      const { createChat } = await import("@n8n/chat");

      createChat({
        webhookUrl: "https://n8n.srv913082.hstgr.cloud/webhook/1f8c4009-ac5c-4b38-b7c3-dc61ec47d4fd/chat",
        mode: "window",
        showWelcomeScreen: true,
        defaultLanguage: "en",
        initialMessages: [
          "Hi there! Welcome to The Oak and Barrel.",
          "How can I help you today? Ask me about our menu, reservations, or events!",
        ],
        i18n: {
          en: {
            title: "The Oak and Barrel",
            subtitle: "We're here to help you 24/7",
            footer: "",
            getStarted: "Start a Conversation",
            inputPlaceholder: "Type your message...",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    };

    loadChat();

    return () => {
      link.remove();
    };
  }, []);

  return null;
}
