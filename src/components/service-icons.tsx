import type { ReactNode } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const serviceIcons: Record<string, ReactNode> = {
  "managed-it": (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
      <path d="M8 10l2.5 2.5L16 7" />
    </svg>
  ),
  "white-label-helpdesk": (
    <svg {...iconProps}>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a2 2 0 01-2 2h-3" />
    </svg>
  ),
  "network-server-management": (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="4" y="10.5" width="16" height="5" rx="1" />
      <rect x="4" y="17" width="16" height="3.5" rx="1" />
      <circle cx="7.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  "device-management": (
    <svg {...iconProps}>
      <rect x="2" y="5" width="12" height="9" rx="1" />
      <path d="M1 17h14" />
      <rect x="17" y="9" width="5" height="9" rx="1" />
      <path d="M18.5 16h2" />
    </svg>
  ),
  "onboarding-offboarding": (
    <svg {...iconProps}>
      <circle cx="10" cy="7" r="3" />
      <path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 8h5m0 0l-2-2m2 2l-2 2" />
    </svg>
  ),
  "cloud-migration": (
    <svg {...iconProps}>
      <path d="M7 18a4 4 0 01-.5-7.97A5 5 0 0116.9 9H17a3.5 3.5 0 010 7H7z" />
      <path d="M12 21v-6m-2 2l2-2 2 2" />
    </svg>
  ),
  "web-development": (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M9 13l-2 2 2 2M15 13l2 2-2 2" />
    </svg>
  ),
  "virtual-desktops": (
    <svg {...iconProps}>
      <rect x="2" y="4" width="13" height="9.5" rx="1" />
      <path d="M5.5 17.5h6M8.5 13.5v4" />
      <circle cx="19" cy="8.5" r="3.4" />
      <path d="M19 6.8v1.9l1.3 1.3" strokeWidth="1.4" />
    </svg>
  ),
};
