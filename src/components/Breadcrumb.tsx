import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8" aria-label="Breadcrumb">
      {allItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4 text-slate-400" />}
          {index === 0 ? (
            <Link 
              to={item.url} 
              className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          ) : index === allItems.length - 1 ? (
            <span className="text-slate-800 font-medium">{item.name}</span>
          ) : (
            <Link 
              to={item.url} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;