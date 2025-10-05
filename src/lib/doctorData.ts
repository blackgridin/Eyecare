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
    bio: "Dr. G. Ramesh Baabu is a highly experienced ophthalmologist with over 16 years of practice. He specializes in advanced cataract surgeries, LASIK procedures, and glaucoma management. As the director of Shivas Eye Care, Clinic, he is committed to providing excellent patient care and utilizing the latest medical technologies."
  },
];
