import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { FormData } from './types';

interface ConfirmationStepProps {
  formData: FormData;
  onInputChange: (field: string, value: any) => void;
}

export function ConfirmationStep({ formData, onInputChange }: ConfirmationStepProps) {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="bg-gradient-to-r from-bright-blue/5 to-teal-blue/5 rounded-2xl p-8">
        <h4 className="text-xl font-bold text-deep-black mb-6">Review Your Information</h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <span className="font-semibold text-shadow-gray">User Type:</span>
            <div className="text-deep-black capitalize">{formData.userType}</div>
          </div>
          <div>
            <span className="font-semibold text-shadow-gray">Name:</span>
            <div className="text-deep-black">{formData.fullName}</div>
          </div>
          <div>
            <span className="font-semibold text-shadow-gray">Email:</span>
            <div className="text-deep-black">{formData.email}</div>
          </div>
          <div>
            <span className="font-semibold text-shadow-gray">Country:</span>
            <div className="text-deep-black">{formData.country}</div>
          </div>
          {formData.specialty && (
            <div>
              <span className="font-semibold text-shadow-gray">Specialty:</span>
              <div className="text-deep-black">{formData.specialty}</div>
            </div>
          )}
          <div>
            <span className="font-semibold text-shadow-gray">Goals:</span>
            <div className="text-deep-black">{formData.goals.length} selected</div>
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => onInputChange('consent', checked)}
            className="mt-1"
          />
          <Label htmlFor="consent" className="text-sm text-deep-black leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            I agree to MedicallyPlus Terms of Service and Privacy Policy. I understand that this platform 
            is for healthcare coordination and does not replace emergency medical care. *
          </Label>
        </div>
        
        <div className="flex items-start gap-4">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => onInputChange('newsletter', checked)}
            className="mt-1"
          />
          <Label htmlFor="newsletter" className="text-sm text-shadow-gray leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            I'd like to receive updates about new features, healthcare insights, and platform improvements.
          </Label>
        </div>
      </div>
    </div>
  );
}