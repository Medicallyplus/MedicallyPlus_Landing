export interface FormData {
  userType: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  organization: string;
  specialty: string;
  experience: string;
  patientType: string;
  condition: string;
  urgency: string;
  previousTreatment: string;
  goals: string[];
  consent: boolean;
  newsletter: boolean;
}

export interface FormStep {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  bgColor: string;
}