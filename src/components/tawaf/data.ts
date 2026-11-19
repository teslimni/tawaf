import lemu from "@/assets/lemu.jpg";
import oseni from "@/assets/oseni.jpg";
import muaz from "@/assets/muaz.png";
import haleemah from "@/assets/haleemah-clean.jpg";
import lateef from "@/assets/lateef.jpg";
import mutiat from "@/assets/mutiat.jpg";
import anas from "@/assets/anas.jpg";
import fatimoh from "@/assets/fatimoh-clean.png";

export const rungs = [
  {
    tag: "Path A · Rung 1", name: "Zakat Grant", kind: "Non-recoverable",
    who: "Zakat-eligible founders at survival stage, with priority for women-led and marginalized micro-enterprises",
    how: "Given in full ownership (tamlik). No repayment, profit share or equity. Can be staged against milestones.",
    success: "A formalized business that runs and earns on its own",
    next: "Graduates to Qard Hassan",
  },
  {
    tag: "Path B · Rung 2", name: "Qard Hassan", kind: "Interest-free loan",
    who: "Founders with proven revenue and the capacity to repay",
    how: "Principal only, no fees or margin. Repayment follows cash flow, with a grace period. Repaid funds finance the next founder.",
    success: "Full repayment and an investment-ready business",
    next: "Graduates to partnership capital",
  },
  {
    tag: "Path C · Rung 3", name: "Mudarabah & Musharakah", kind: "Partnership capital",
    who: "Scalable ventures cleared on our Investment Readiness Scorecard",
    how: "Profit and loss are shared by contract. Returns come from profit, never from interest, and no return is guaranteed.",
    success: "A profitable partnership ready for outside investment",
    next: "Graduates to external capital",
  },
  {
    tag: "Rung 4", name: "External & Strategic Capital", kind: "The market",
    who: "Halal venture and angel funds, riba-free revenue-based financing, waqf-backed evergreen funds, strategic partners and high-impact grants",
    how: "Advancement follows a Scorecard threshold and a readiness audit. Ventures that are not ready are held, not pushed.",
    success: "A market-ready enterprise that strengthens the ecosystem",
    next: "Returns to the circuit as a giver",
  },
];

export const phases = [
  { t: "Recruitment & Discovery", d: "Open applications and community nominations. A diagnostic intake, business audit and founder interview assess traction, ethics, scalability and commitment, then route each founder to the right path." },
  { t: "Foundation & Structuring", d: "Business, financial, brand and leadership structuring. Path A focuses on formalization, Path B on investor-grade records, Path C on partnership-grade financials and governance." },
  { t: "Business Incubation", d: "Eight to twelve weeks of masterclasses, mentorship pods, weekly implementation sprints and KPI tracking.", note: "Required for Path A" },
  { t: "Venture Readiness", d: "Each venture is scored on scalability, market viability, financial health, founder strength and operational maturity." },
  { t: "Demo Day & Capital Access", d: "Founders present to investors, ethical finance institutions, grant makers and partners. This is the gateway to partnership and external capital." },
  { t: "Post-Program Scaling", d: "Alumni network, monthly accountability, loan servicing, partnership management and investor relations." },
  { t: "Impact & Ecosystem Building", d: "Showcases, investor matchmaking and community visibility, so each graduate opens doors for the next cohort." },
];

export const governance = [
  { t: "Shariah Advisory Board", d: "Rules on eligibility, fund structures, loan and partnership terms, hardship cases and borderline path assignments." },
  { t: "Three segregated pools", d: "The Zakat fund, the Qard Hassan revolving fund and partnership capital are held and accounted for separately. Nothing moves between them without a ruling." },
  { t: "Zakat integrity", d: "Zakat passes to the recipient in full ownership. The program keeps no equity, collateral or claim." },
  { t: "Free of riba", d: "Qard Hassan recovers principal only. Documented hardship can be rescheduled, partly forgiven or converted to Sadaqah by ruling." },
  { t: "True partnership", d: "Mudarabah and Musharakah share profit and loss by contract, with no guaranteed return. This is the only path where equity or profit share arises." },
  { t: "Transparent reporting", d: "Funding partners receive quarterly impact data through our Zakat Impact Tracker, alongside documented beneficiary stories." },
];

export const measures = {
  "Path A": ["Recipients who reach a stable business", "Income that lasts beyond the grant", "Graduations into Qard Hassan"],
  "Path B": ["Recovery rate", "How fast capital recycles to new founders", "Graduations into partnership capital"],
  "Path C": ["Profit-share returns", "Partnership survival", "Ventures securing external capital"],
};

export const partners = [
  { role: "Lead funding partner", name: "Zakat Foundation of America", d: "Brings global Zakat credibility, compliance expertise and international reach to TAWAF's pilot." },
  { role: "Co-capital partner", name: "The Tahara Collective", d: "Brings community capital, donor relationships and links to Muslim entrepreneurs across Nigeria." },
  { role: "Investment partner", name: "Nivara & Co.", d: "A Lagos-based investment fund with interests across Europe, the Americas and other world markets. Brings investment discipline and international reach to TAWAF's path toward partnership and external capital." },
];

export type Person = { name: string; role: string; bio?: string; photo?: string };

export const team: Person[] = [
  { name: "Lateef Bello", photo: lateef, role: "Founder & Principal Administrator", bio: "Over 15 years in philanthropy, grantmaking and international development, including a $90M+ foundation portfolio at Elevance Health Foundation. Master of Philanthropic Studies, IU Lilly Family School of Philanthropy." },
  { name: "Mutiat Olagoke", photo: mutiat, role: "Co-Founder & Operations Lead", bio: "Leads grassroots mobilization, women's enterprise development and community accountability across Nigeria." },
  { name: "Anas Tulib", photo: anas, role: "Principal Administrator", bio: "Enterprise development practitioner in Islamic social finance and program management. Anchors TAWAF's implementation." },
  { name: "Fatimoh Salaudeen", photo: fatimoh, role: "Chief of Staff", bio: "Coordinates the team's priorities, partner communications and day-to-day execution so TAWAF delivers on its commitments to founders and funders." },
];

export const advisors: Person[] = [
  { name: "Sheikh Nurudeen Lemu", role: "Islamic education and Shariah", photo: lemu },
  { name: "Dr. Umar Oseni", role: "Islamic law and finance; Secretary General, OIC Arbitration Center", photo: oseni },
  { name: "Imam Muaz Ibrahim", role: "Chief Imam, Indianapolis Muslim Community Association", photo: muaz },
  { name: "Ustadha Haleemah Ahmad", role: "Islamic scholar and researcher; Islamic finance", photo: haleemah },
];
