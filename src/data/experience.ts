// Ordered from newest to earliest as confirmed by the portfolio owner.
// Periods are omitted when exact dates have not been provided.
interface Experience {
  role: string; organization: string; focus: string; type: string;
  logo: string; initials: string; period?: string; subjects?: string[]; project?: string;
}
export const experiences: Experience[] = [
  {
    role: 'Software QA / Mobile Tester', organization: 'Aksara Ulu — Universitas Bina Darma',
    focus: 'External QA team contribution, focused on requirement-based mobile testing and a Katalon Studio automation demonstration.',
    type: 'External client project', logo: 'bina-darma', initials: 'UBD', project: '/projects/aksara-ulu-kaganga/',
  },
  {
    role: 'Quality Assurance', organization: 'Yayasan Amanah Ummah',
    focus: 'Sprint-based test design, manual execution, defect management, and functional web automation for a donor management system.',
    type: 'Capstone project', logo: 'yayasan-amanah-ummah', initials: 'YAU', project: '/projects/yayasan-amanah-ummah/',
  },
  {
    period: 'September 2024 – June 2026', role: 'Teaching & Practicum Assistant',
    organization: 'Informatics Laboratory, Telkom University',
    focus: 'Supported teaching and practical learning across Software Engineering courses.',
    subjects: ['Software Construction', 'Object-Oriented Programming', 'Databases', 'Web Programming', 'Mobile Programming', 'Software Testing'],
    type: 'Academic', logo: 'informatics-laboratory', initials: 'IF',
  },
  {
    period: 'July 2025 – September 2025', role: 'UI/UX Designer Intern',
    organization: 'PT Kereta Api Indonesia (Persero)',
    focus: 'Translated supplied user research into user flows, wireframes, and a Figma prototype for the company profile website.',
    type: 'Internship', logo: 'kai', initials: 'KAI', project: '/projects/kai-website-redesign/',
  },
  {
    period: 'Alongside the KAI internship', role: 'Quality Assurance',
    organization: 'Advanced Software Engineering Laboratory',
    focus: 'Contributed to quality assurance mentoring within the laboratory.',
    type: 'Laboratory', logo: 'ase-laboratory', initials: 'ASE',
  },
];
