import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FormData } from './types';
import { COUNTRIES } from './constants';

interface BasicInfoStepProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

export function BasicInfoStep({ formData, onInputChange }: BasicInfoStepProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-deep-black font-semibold">Full Name *</Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => onInputChange('fullName', e.target.value)}
          className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-deep-black font-semibold">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-deep-black font-semibold">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
          className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="country" className="text-deep-black font-semibold">Country *</Label>
        <Select value={formData.country} onValueChange={(value) => onInputChange('country', value)}>
          <SelectTrigger className="border-2 border-gray-200 focus:border-bright-blue rounded-xl p-4 focus:outline-none" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent style={{ fontFamily: 'Poppins, sans-serif' }}>
            {COUNTRIES.map((country) => (
              <SelectItem key={country} value={country}>{country}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}