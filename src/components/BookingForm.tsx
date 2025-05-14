
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/useTranslation';
import { z } from 'zod';

interface BookingFormProps {
  open: boolean;
  onClose: () => void;
}

const BookingForm = ({ open, onClose }: BookingFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'coworking',
    dates: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(5, { message: "Phone number is required" }),
    service: z.string(),
    dates: z.string(),
    message: z.string()
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    
    // Clear error when field is changed
    if (errors.service) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.service;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
      
      // Simulate form submission
      console.log('Form submitted:', formData);
      
      toast({
        title: "Booking request sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'coworking',
        dates: '',
        message: ''
      });
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('coworking.bookNow')}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('form.name')}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">{t('form.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service">{t('form.service')}</Label>
              <Select 
                value={formData.service} 
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                  <SelectValue placeholder={t('form.service')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coworking">{t('form.coworking')}</SelectItem>
                  <SelectItem value="event">{t('form.event')}</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dates">{t('form.dates')}</Label>
              <Input
                id="dates"
                name="dates"
                value={formData.dates}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">{t('form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              {t('form.close')}
            </Button>
            <Button type="submit" className="bg-cispace-orange hover:bg-cispace-orange/90 text-white">
              {t('form.submit')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
