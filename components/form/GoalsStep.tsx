import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { CheckCircle } from "lucide-react";
import { FormData } from './types';
import { GOAL_OPTIONS } from './constants';

interface GoalsStepProps {
  formData: FormData;
  onGoalToggle: (goalId: string) => void;
}

export function GoalsStep({ formData, onGoalToggle }: GoalsStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        {GOAL_OPTIONS.map((goal) => (
          <div key={goal.id} className="relative">
            <Checkbox
              id={goal.id}
              checked={formData.goals.includes(goal.id)}
              onCheckedChange={() => onGoalToggle(goal.id)}
              className="peer sr-only"
            />
            <Label 
              htmlFor={goal.id} 
              className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:border-bright-blue hover:bg-bright-blue/5 peer-checked:border-bright-blue peer-checked:bg-bright-blue/10 transition-all duration-300 hover-lift"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <div className="w-12 h-12 bg-bright-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <goal.icon className="w-6 h-6 text-bright-blue" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-deep-black">{goal.label}</div>
              </div>
              <div className={`w-6 h-6 border-2 border-gray-300 rounded-md flex items-center justify-center ${
                formData.goals.includes(goal.id) ? 'border-bright-blue bg-bright-blue' : ''
              }`}>
                {formData.goals.includes(goal.id) && (
                  <CheckCircle className="w-4 h-4 text-white" />
                )}
              </div>
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}