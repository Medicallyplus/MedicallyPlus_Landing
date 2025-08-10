import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Stethoscope, Heart } from "lucide-react";
import { FormData } from './types';

interface UserTypeStepProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

export function UserTypeStep({ formData, onInputChange }: UserTypeStepProps) {
  return (
    <RadioGroup 
      value={formData.userType} 
      onValueChange={(value) => onInputChange('userType', value)}
      className="grid md:grid-cols-2 gap-6"
    >
      <div className="relative">
        <RadioGroupItem 
          value="provider" 
          id="provider" 
          className="peer sr-only"
        />
        <Label 
          htmlFor="provider" 
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-bright-blue hover:bg-bright-blue/5 peer-checked:border-bright-blue peer-checked:bg-bright-blue/10 transition-all duration-300 hover-lift"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Stethoscope className="w-16 h-16 text-bright-blue mb-4" />
          <span className="text-xl font-bold text-deep-black mb-2">Healthcare Provider</span>
          <span className="text-sm text-shadow-gray text-center">Doctor, Nurse, Specialist, or other medical professional</span>
        </Label>
      </div>
      
      <div className="relative">
        <RadioGroupItem 
          value="patient" 
          id="patient" 
          className="peer sr-only"
        />
        <Label 
          htmlFor="patient" 
          className="flex flex-col items-center p-8 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-medical-red hover:bg-medical-red/5 peer-checked:border-medical-red peer-checked:bg-medical-red/10 transition-all duration-300 hover-lift"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Heart className="w-16 h-16 text-medical-red mb-4" />
          <span className="text-xl font-bold text-deep-black mb-2">Patient or Caregiver</span>
          <span className="text-sm text-shadow-gray text-center">Seeking medical care or supporting a loved one</span>
        </Label>
      </div>
    </RadioGroup>
  );
}