import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FormData } from './types';
import { SPECIALTIES, EXPERIENCE_OPTIONS, URGENCY_OPTIONS } from './constants';

interface ProfessionalInfoStepProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

export function ProfessionalInfoStep({ formData, onInputChange }: ProfessionalInfoStepProps) {
  return (
    <div className="space-y-6">
      {formData.userType === 'provider' ? (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-deep-black font-semibold">Organization/Hospital *</Label>
            <Input
              id="organization"
              placeholder="Your workplace"
              value={formData.organization}
              onChange={(e) => onInputChange('organization', e.target.value)}
              className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialty" className="text-deep-black font-semibold">Medical Specialty *</Label>
            <Select value={formData.specialty} onValueChange={(value) => onInputChange('specialty', value)}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <SelectValue placeholder="Select your specialty" />
              </SelectTrigger>
              <SelectContent style={{ fontFamily: 'Poppins, sans-serif' }}>
                {SPECIALTIES.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-2 space-y-2">
            <Label className="text-deep-black font-semibold">Years of Experience *</Label>
            <RadioGroup 
              value={formData.experience} 
              onValueChange={(value) => onInputChange('experience', value)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {EXPERIENCE_OPTIONS.map((option) => (
                <div key={option} className="relative">
                  <RadioGroupItem 
                    value={option} 
                    id={option} 
                    className="peer sr-only"
                  />
                  <Label 
                    htmlFor={option} 
                    className="block p-4 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:border-teal-blue hover:bg-teal-blue/5 peer-checked:border-teal-blue peer-checked:bg-teal-blue/10 transition-all duration-300 text-center font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="condition" className="text-deep-black font-semibold">Medical Condition or Concern *</Label>
            <Textarea
              id="condition"
              placeholder="Please describe your medical condition or health concern..."
              value={formData.condition}
              onChange={(e) => onInputChange('condition', e.target.value)}
              className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 min-h-24 focus:outline-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-deep-black font-semibold">How urgent is your need? *</Label>
            <RadioGroup 
              value={formData.urgency} 
              onValueChange={(value) => onInputChange('urgency', value)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {URGENCY_OPTIONS.map((option) => (
                <div key={option.value} className="relative">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value} 
                    className="peer sr-only"
                  />
                  <Label 
                    htmlFor={option.value} 
                    className={`block p-6 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:border-${option.color} hover:bg-${option.color}/5 peer-checked:border-${option.color} peer-checked:bg-${option.color}/10 transition-all duration-300`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-deep-black mb-1">{option.label}</div>
                      <div className="text-sm text-shadow-gray">{option.desc}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )}
    </div>
  );
}