import React from 'react';
import { Card } from '@/components/ui/card';

const DashboardCards: React.FC = () => {
  const cards = [
    { title: 'Users', content: 'Manage users and roles', bg: 'bg-blue-100' },
    { title: 'Reports', content: 'Generate detailed reports', bg: 'bg-green-100' },
    { title: 'Settings', content: 'Configure system preferences', bg: 'bg-yellow-100' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ title, content, bg }, index) => (
        <Card key={index} className={`p-6 ${bg}`}>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="mt-2 text-gray-600">{content}</p>
        </Card>
      ))}
    </div>
  );
};

export default DashboardCards;