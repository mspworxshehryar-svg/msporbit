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
  bannerImage: string;
  importance: string[];
  benefits: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "managed-it",
    bannerImage: "/images/svc-managed-it.jpg",
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
    importance: [
      "Every business today runs on technology, but few businesses have the time, budget, or expertise to manage that technology properly in-house. Systems that aren't actively monitored and maintained don't fail gracefully — they fail at the worst possible moment, usually during a busy stretch when downtime is most expensive. Managed IT closes that gap by putting a dedicated team behind your systems around the clock, catching failing hard drives, expiring certificates, and misconfigured backups before they turn into a crisis.",
      "Beyond preventing outages, managed IT gives you a single, accountable partner for the entire technology stack, rather than a patchwork of vendors who only show up when something is already broken. That shift — from reactive firefighting to proactive management — is what separates businesses that treat IT as a cost center from businesses that treat it as a foundation they can build on.",
    ],
    benefits: [
      { title: "Fewer surprises", body: "Continuous monitoring means small issues get caught and fixed before they interrupt your team's work or your customers' experience." },
      { title: "One team, full accountability", body: "No more bouncing between vendors trying to figure out whose responsibility a problem is — we own the outcome." },
      { title: "Predictable costs", body: "Flat monthly pricing replaces unpredictable break-fix bills, so IT becomes a budget line you can actually plan around." },
      { title: "Time back for your team", body: "Your staff stop troubleshooting printers and password resets, and get back to the work that actually grows the business." },
    ],
  },
  {
    slug: "white-label-helpdesk",
    bannerImage: "/images/svc-white-label-helpdesk.jpg",
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
    importance: [
      "Growing IT service providers and internal IT teams often hit the same wall: ticket volume grows faster than headcount, and hiring, training, and retaining tier-1 support staff is slow and expensive. A white-label helpdesk solves that bottleneck by giving you an experienced support team that works entirely behind your brand — your customers or employees never know a third party is involved.",
      "This matters because support quality directly shapes how a business is perceived. A slow or inconsistent helpdesk erodes trust quickly, while fast, competent support builds it. By handling the day-to-day ticket queue under your name, we let you scale support capacity up or down with demand, without the overhead of recruiting and managing a growing internal team.",
    ],
    benefits: [
      { title: "Scale without hiring", body: "Add support capacity instantly during growth or seasonal spikes, without the lead time of recruiting and onboarding new staff." },
      { title: "Consistent brand experience", body: "Every interaction happens under your name, with your tone and standards, so customers never see the handoff." },
      { title: "Tiered expertise on demand", body: "Tier 1 through tier 3 support means routine tickets get resolved fast, and complex issues still get expert attention." },
      { title: "Lower overhead", body: "Skip the cost of benefits, training, and management for an in-house support team you'd otherwise need to build." },
    ],
  },
  {
    slug: "network-server-management",
    bannerImage: "/images/svc-network-server-management.jpg",
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
    importance: [
      "Your network and servers are the plumbing of your business — invisible when everything works, and impossible to ignore the moment something goes wrong. A misconfigured firewall, an overloaded switch, or a server running out of disk space rarely announces itself in advance; it just quietly degrades performance until something breaks outright, often during your busiest hours.",
      "Proper network and server management means someone is watching those systems continuously, not just responding after users start complaining. It's the difference between a planned five-minute maintenance window and an unplanned afternoon of lost productivity while everyone waits for a fix. For any business with more than a handful of employees, professionally managed infrastructure is what makes remote work, cloud services, and even basic email reliable day to day.",
    ],
    benefits: [
      { title: "Fewer outages", body: "Proactive monitoring and maintenance catch failing hardware and capacity issues long before they cause downtime." },
      { title: "Stronger security posture", body: "Properly configured firewalls and access controls close off the easy entry points attackers look for first." },
      { title: "Reliable backups", body: "Verified, tested backups mean a hardware failure or ransomware incident is a recovery story, not a disaster." },
      { title: "Infrastructure that scales", body: "Capacity planning means your network grows with your headcount instead of becoming a bottleneck." },
    ],
  },
  {
    slug: "device-management",
    bannerImage: "/images/svc-device-management.jpg",
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
    importance: [
      "The average employee now touches a laptop, a phone, and often a second device before lunch — and every one of those devices is a potential entry point for malware, data loss, or simple misconfiguration if it isn't managed centrally. Without a consistent process, devices drift: some get security updates, some don't; some are encrypted, some aren't; and IT has no reliable way to know which is which until something goes wrong.",
      "Centralized device management brings every laptop, desktop, and mobile device under one consistent policy, applied automatically rather than department by department or employee by employee. That consistency is what makes audits painless, what makes a lost laptop a non-event instead of a data breach, and what makes rolling out a new security requirement a single afternoon's work instead of a months-long chase.",
    ],
    benefits: [
      { title: "Consistent security everywhere", body: "Every device gets the same encryption, patching, and policy enforcement, regardless of who's using it or where." },
      { title: "Faster troubleshooting", body: "Centralized visibility means we can often diagnose and fix device issues remotely, without waiting on a desk visit." },
      { title: "Painless audits", body: "A full, current inventory of devices and their configurations is available on demand, not assembled under deadline pressure." },
      { title: "Lower device lifecycle costs", body: "Proactive maintenance and clear asset tracking extend device lifespan and simplify budgeting for replacements." },
    ],
  },
  {
    slug: "onboarding-offboarding",
    bannerImage: "/images/svc-onboarding-offboarding.jpg",
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
    importance: [
      "New hires form their first impression of your company in the first hour, and a laptop that isn't ready, accounts that aren't provisioned, or software they can't access sends the wrong message before they've done a single day of work. On the other end, a departing employee whose access isn't revoked immediately isn't just an inconvenience — it's a live security and compliance risk that persists for as long as it goes unnoticed.",
      "Treating on/offboarding as a formal IT process, rather than an afterthought squeezed in between other tasks, removes both risks at once. New employees start productive on day one, with the right hardware and access already configured. Departing employees lose access the moment they leave, with a clear record of exactly what was revoked and when — which matters as much for compliance as it does for peace of mind.",
    ],
    benefits: [
      { title: "Productive from day one", body: "New hires get a fully configured device and correct access from their first login, with no delays chasing IT." },
      { title: "Immediate offboarding", body: "Access is revoked the moment someone leaves, closing the window where a departed employee could still reach company systems." },
      { title: "Clear audit trail", body: "Every access grant and revocation is logged, making compliance reviews and audits straightforward instead of stressful." },
      { title: "Less manual work for managers", body: "Role-based provisioning means access is assigned automatically based on job function, not reconstructed from memory." },
    ],
  },
  {
    slug: "cloud-migration",
    bannerImage: "/images/svc-cloud-migration.jpg",
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
    importance: [
      "Aging on-premises servers eventually become a liability rather than an asset — every year they run, the hardware gets closer to failure, spare parts get harder to find, and the business becomes more dependent on a system nobody wants to touch for fear of breaking it. Migrating to the cloud removes that ticking clock, but only if it's done carefully; a rushed migration can mean lost data, extended downtime, or applications that behave differently than they did before.",
      "A properly planned cloud migration treats the move itself as the risk to manage, not just the destination. That means mapping dependencies before touching anything, migrating in a sequence that avoids surprises, and verifying data integrity at every step — so that the business experiences the migration as a quiet transition rather than a disruptive event, and comes out the other side with infrastructure that's easier to scale, secure, and maintain.",
    ],
    benefits: [
      { title: "No more aging hardware risk", body: "Retiring on-premises servers removes the ongoing risk of hardware failure and the cost of maintaining outdated systems." },
      { title: "Scale on demand", body: "Cloud infrastructure grows with usage, so you're not stuck over-provisioning for peak load or hitting a hard capacity ceiling." },
      { title: "Work from anywhere", body: "Cloud-hosted email, files, and applications mean your team can work securely from any location, not just the office." },
      { title: "Minimal disruption migration", body: "Careful sequencing and verification at each step mean the move happens with little to no impact on daily operations." },
    ],
  },
  {
    slug: "web-development",
    bannerImage: "/images/svc-web-development.jpg",
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
    importance: [
      "For most small and growing businesses, the website is the first — and sometimes only — interaction a prospective customer has with the company before deciding whether to reach out. A slow-loading, outdated, or poorly maintained site quietly costs business every day it's live, whether or not anyone is tracking that cost. And because most businesses don't have web development expertise in-house, sites tend to get built once and then left alone for years.",
      "Treating a website as an ongoing responsibility, maintained by the same team handling the rest of your IT, keeps it fast, secure, and current without requiring a separate vendor relationship. It also means the website benefits from the same security discipline as everything else in the business, rather than sitting on outdated software as a soft target.",
    ],
    benefits: [
      { title: "A site that loads fast", body: "Performance-focused builds mean visitors don't bounce before the page even finishes loading." },
      { title: "Mobile-ready by default", body: "Every build is responsive from the start, so the experience holds up on any device your visitors use." },
      { title: "Ongoing security and updates", body: "Your site gets the same proactive maintenance as the rest of your IT, instead of being forgotten after launch." },
      { title: "One point of contact", body: "Hosting, domain management, and development all run through the same team already managing your IT." },
    ],
  },
  {
    slug: "virtual-desktops",
    bannerImage: "/images/svc-virtual-desktops.jpg",
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
    importance: [
      "Distributed and hybrid teams create a genuine tension for IT: employees want the flexibility to work from anywhere, but every additional device and location is another potential gap in security and consistency. Virtual desktops resolve that tension by moving the actual desktop environment into the cloud — the device someone uses to connect becomes largely irrelevant, because the operating system, applications, and data all live in a centrally managed, secured environment.",
      "That shift matters most for businesses that need to support contractors, seasonal staff, or remote employees without shipping hardware to every location or trusting personal devices with company data. It also simplifies IT's job considerably: instead of securing and patching dozens of physical machines scattered across different homes and offices, there's one environment to manage, and it's identical for every user, every time.",
    ],
    benefits: [
      { title: "Work from any device", body: "Employees get the same secure desktop experience whether they're on a company laptop, a personal computer, or a tablet." },
      { title: "Centralized security", body: "Company data stays inside the managed environment instead of scattered across personal devices, dramatically reducing exposure." },
      { title: "Fast provisioning", body: "New users can be up and running with a fully configured virtual desktop in minutes, not days." },
      { title: "Lower hardware costs", body: "Existing or lower-spec devices can run a virtual desktop just as well as new, high-end hardware, since the heavy lifting happens in the cloud." },
    ],
  },
];
