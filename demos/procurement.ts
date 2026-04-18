import type { DemoConfig } from "@/lib/demos";

export const procurementDemo: DemoConfig = {
  slug: "procurement",
  title: "Construction Procurement Automation",
  subtitle: "Materials schedule to purchase order in under a minute",
  description:
    "Watch AI automatically parse a materials schedule from Buildertrend, send quote requests to suppliers, compare the responses, and generate a purchase order — all with one click.",
  triggerTaskId: "procurement.demo-run",
  estimatedDurationSeconds: 50,
  steps: [
    {
      id: "parsing-materials",
      label: "Parsing Materials Schedule",
      description:
        "AI reads the Buildertrend email and extracts line items across multiple categories",
      outputType: "table",
    },
    {
      id: "sending-rfqs",
      label: "Sending Quote Requests",
      description: "Drafting and sending RFQ emails to preferred suppliers",
      outputType: "email-preview",
    },
    {
      id: "collecting-quotes",
      label: "Processing Supplier Quotes",
      description: "Reading and parsing incoming quote emails",
      outputType: "json",
    },
    {
      id: "comparing-quotes",
      label: "Comparing Quotes",
      description:
        "AI analyses pricing, lead times, completeness, and payment terms",
      outputType: "comparison",
    },
    {
      id: "approval",
      label: "Requesting Approval",
      description: "Sending comparison summary for one-click approval",
      outputType: "html",
    },
    {
      id: "generating-po",
      label: "Generating Purchase Order",
      description: "Creating PO and emailing the winning supplier",
      outputType: "email-preview",
    },
    {
      id: "syncing-xero",
      label: "Syncing to Xero",
      description: "Pushing the PO to the accounting system",
      outputType: "text",
    },
  ],
  ctaText: "Want this for your business?",
  ctaUrl: "https://calendly.com/donefast/intro",
};
