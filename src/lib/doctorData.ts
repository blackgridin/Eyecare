export interface Doctor {
  id: string;
  name: string;
  designation: string;
  specialization: string[];
  experience: string;
  qualifications: string[];
  languages: string[];
  successRate: string;
  surgeries: string;
  image: string;
  bio: string;
}

export const doctors: Doctor[] = [
  {
    id: "g-ramesh-baabu",
    name: "Dr. G. Ramesh Baabu",
    designation: "Consultant Opthalmologist & Director",
    specialization: ["Cataract Surgery", "LASIK", "Glaucoma"],
    experience: "16+ Years",
    qualifications: ["MBBS, MS (Ophthalmology)", "Fellowship in Cornea & Refractive Surgery"],
    languages: ["English", "Hindi", "Tamil"],
    successRate: "99.2%",
    surgeries: "50000+",
    image: "/assets/madhavf.png",
    bio: "Dr. G. Ramesh Baabu is a highly experienced ophthalmologist with over 16 years of practice. He specializes in advanced cataract surgeries, LASIK procedures, and glaucoma management. As the director of VisionCare Eye Clinic, he is committed to providing excellent patient care and utilizing the latest medical technologies."
  },
  {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    designation: "Senior Consultant - Retina Specialist",
    specialization: ["Diabetic Retinopathy", "Retinal Detachment", "Macular Disorders"],
    experience: "12+ Years",
    qualifications: ["MBBS, MS, DNB (Ophthalmology)", "Fellowship in Vitreoretinal Surgery"],
    languages: ["English", "Hindi", "Telugu"],
    successRate: "97.8%",
    surgeries: "8,500+",
    image: "/placeholder-doctor-2.jpg",
    bio: "Dr. Priya Sharma is a leading retina specialist known for her expertise in treating complex retinal conditions, including diabetic retinopathy and retinal detachments. She is dedicated to preserving and restoring vision for her patients through advanced surgical and medical interventions."
  },
  {
    id: "arun-patel",
    name: "Dr. Arun Patel",
    designation: "Consultant - Glaucoma & Pediatric Ophthalmology",
    specialization: ["Glaucoma Management", "Pediatric Eye Care", "Squint Surgery"],
    experience: "10+ Years",
    qualifications: ["MBBS, MS (Ophthalmology)", "Fellowship in Glaucoma"],
    languages: ["English", "Hindi", "Gujarati"],
    successRate: "98.5%",
    surgeries: "6,200+",
    image: "/placeholder-doctor-3.jpg",
    bio: "Dr. Arun Patel specializes in glaucoma management and pediatric ophthalmology. He provides comprehensive eye care for children, addressing conditions like squint and amblyopia, and offers advanced treatment options for adult glaucoma patients."
  }
];
