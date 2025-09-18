import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LanguageToggle = ({ language, onLanguageChange }) => {
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'th' : 'en';
    onLanguageChange(newLanguage);
  };

  return (
    <div className="fixed top-20 right-6 z-40">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-interactive border-border"
      >
        <Icon 
          name="Globe" 
          size={16} 
          className="mr-2" 
        />
        <span className="font-medium">
          {language === 'en' ? 'ไทย' : 'EN'}
        </span>
      </Button>
    </div>
  );
};

export default LanguageToggle;