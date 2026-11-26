export const DEPARTMENT_IMAGES: Record<string, string> = {
  recruitment: "/images/departments/recruitment.jpg",
  relocation: "/images/departments/relocation.jpg",
  behoerdenservice: "/images/departments/behoerdenservice.jpg",
  "translation-communication": "/images/departments/translation.jpg",
  "business-setup": "/images/departments/business-setup.jpg",
  "medical-tourism": "/images/departments/medical-tourism.jpg",
  "digital-ai": "/images/departments/digital-ai.jpg",
  "family-education": "/images/departments/family-education.jpg",
  "restaurant-kitchen": "/images/restaurant-kitchen.jpg",
};

export function getDepartmentImage(slug: string): string {
  return DEPARTMENT_IMAGES[slug] || "/images/hero-architecture.jpg";
}
