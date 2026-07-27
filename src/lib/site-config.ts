export const siteConfig = {
  name: "MSP Orbit",
  tagline: "IT Support that orbits around you",
  domain: "msporbit.com",
  url: "https://msporbit.com",
  phone: "9144061119",
  phoneFormatted: "(914) 406-1119",
  email: "support@msporbit.com",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "managed-it",
    name: "Managed IT",
    short: "Proactive, all-in-one IT management so your systems just work.",
    description:
      "We take full ownership of your day-to-day IT so your team can focus on running the business, not fixing computers. From monitoring to maintenance, we handle it before it becomes a problem.",
    features: [
      "24/7 network and endpoint monitoring",
      "Patch management and system updates",
      "Proactive issue detection and resolution",
      "Vendor management on your behalf",
      "Monthly reporting and strategic IT reviews",
    ],
  },
  {
    slug: "white-label-helpdesk",
    name: "White-Label Helpdesk",
    short: "Helpdesk support delivered under your own brand.",
    description:
      "Already run an MSP or IT brand of your own? We provide tier 1-3 helpdesk support behind the scenes, fully white-labeled, so your customers only ever see you.",
    features: [
      "Tier 1-3 ticket handling under your brand",
      "Phone, email, and chat support coverage",
      "Custom SLAs and escalation paths",
      "Seamless integration with your existing PSA/RMM",
      "Scalable overflow or full outsourced support",
    ],
  },
  {
    slug: "network-server-management",
    name: "Network & Server Management",
    short: "Reliable, secure infrastructure that keeps the lights on.",
    description:
      "We design, monitor, and maintain your network and server infrastructure so downtime stays rare and performance stays high, whether you're on-prem, hybrid, or fully cloud.",
    features: [
      "Firewall, switch, and router configuration",
      "Server health monitoring and maintenance",
      "Uptime monitoring with rapid alerting",
      "Backup and disaster recovery planning",
      "Capacity planning as you grow",
    ],
  },
  {
    slug: "device-management",
    name: "Device Management",
    short: "Every laptop, desktop, and mobile device, managed centrally.",
    description:
      "From procurement to retirement, we manage the full lifecycle of your company's devices with centralized tools that keep everything configured, secure, and compliant.",
    features: [
      "Centralized mobile device management (MDM)",
      "Automated software deployment and updates",
      "Device encryption and security policy enforcement",
      "Asset tracking and lifecycle management",
      "Remote troubleshooting and support",
    ],
  },
  {
    slug: "onboarding-offboarding",
    name: "Employee On/Offboarding",
    short: "New hires ready on day one. Departures handled securely.",
    description:
      "We take IT off your onboarding checklist entirely. New employees get accounts, hardware, and access set up before their first day, and departing employees are deprovisioned immediately to protect your data.",
    features: [
      "Pre-configured hardware and account provisioning",
      "Automated access grants tied to role/department",
      "Immediate access revocation on offboarding",
      "Software license reassignment",
      "Full audit trail for compliance",
    ],
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration",
    short: "Move to the cloud without disrupting the business.",
    description:
      "Whether you're migrating email, file servers, or full infrastructure, we plan and execute cloud migrations that minimize downtime and get your team productive on day one.",
    features: [
      "Microsoft 365 and Google Workspace migrations",
      "Server and application migration to the cloud",
      "Data migration with integrity verification",
      "Hybrid cloud architecture design",
      "Post-migration training and support",
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    short: "A fast, professional website that represents your business.",
    description:
      "We design and build websites for small and growing businesses, from simple brochure sites to more complex web applications, hosted and maintained by a team that also handles your IT.",
    features: [
      "Custom website design and development",
      "Mobile-responsive, fast-loading builds",
      "Ongoing maintenance and updates",
      "Hosting and domain management",
      "SEO-friendly foundations",
    ],
  },
  {
    slug: "virtual-desktops",
    name: "Virtual Desktops",
    short: "Secure, work-from-anywhere desktops in the cloud.",
    description:
      "Give your team a consistent, secure desktop experience from any device, anywhere, with virtual desktop infrastructure that's easier to manage and easier to scale than physical machines.",
    features: [
      "Cloud-hosted virtual desktop environments",
      "Consistent experience across all devices",
      "Centralized security and access control",
      "Rapid provisioning for new users or teams",
      "Reduced hardware costs over time",
    ],
  },
];
