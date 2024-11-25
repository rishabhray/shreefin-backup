import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function AlertBanner() {
  return (
    <div className="bg-primary py-1 px-4">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-4 h-4 text-secondary" />
        <span className="text-sm font-medium text-secondary">
          Investment in securities market are subject to market risks
        </span>
      </div>
    </div>
  );
}