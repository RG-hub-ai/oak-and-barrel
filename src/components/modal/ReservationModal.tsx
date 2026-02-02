'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from '../ui/Button';
import { Input, Select, Textarea } from '../ui/Input';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const partySizeOptions = Array.from({ length: 12 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`,
}));

const timeOptions = [
  { value: '17:00', label: '5:00 PM' },
  { value: '17:30', label: '5:30 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '18:30', label: '6:30 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '19:30', label: '7:30 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '20:30', label: '8:30 PM' },
  { value: '21:00', label: '9:00 PM' },
  { value: '21:30', label: '9:30 PM' },
  { value: '22:00', label: '10:00 PM' },
];

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    partySize: '2',
    date: '',
    time: '19:00',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      setFormData({
        name: '',
        partySize: '2',
        date: new Date().toISOString().split('T')[0],
        time: '19:00',
        specialRequests: '',
      });
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-cream-white rounded-2xl shadow-intense animate-scale-in overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-oak-brown/10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-charcoal">
            Make a Reservation
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-stone-gray hover:text-charcoal transition-colors rounded-lg hover:bg-warm-linen"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-stone-gray">
                We look forward to seeing you, {formData.name}!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Select
                label="Party Size"
                options={partySizeOptions}
                value={formData.partySize}
                onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Date"
                  type="date"
                  required
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />

                <Select
                  label="Time"
                  options={timeOptions}
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>

              <Textarea
                label="Special Requests (optional)"
                placeholder="Any dietary restrictions, allergies, or special occasions?"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              />

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={isSubmitting}
                className="mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Confirming...
                  </span>
                ) : (
                  'Confirm Reservation'
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
