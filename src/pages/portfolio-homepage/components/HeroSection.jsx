import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ language, content }) => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/chanathip-kaewpuang-resume.pdf';
    link.download = 'Chanathip_Kaewpuang_Resume.pdf';
    link?.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {content?.name}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium">
            {content?.title}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {content?.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={handleContactClick}
            iconName="MessageCircle"
            iconPosition="left"
            className="px-8 py-4 text-lg"
          >
            {content?.contactButton}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleResumeClick}
            iconName="Download"
            iconPosition="left"
            className="px-8 py-4 text-lg border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            {content?.resumeButton}
          </Button>
        </div>

        <div className="flex justify-center space-x-6 text-muted-foreground">
          <a 
            href="https://github.com/chanathip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth p-2"
          >
            <Icon name="Github" size={24} />
          </a>
          <a 
            href="mailto:chanathip.k@example.com" 
            className="hover:text-secondary transition-smooth p-2"
          >
            <Icon name="Mail" size={24} />
          </a>
          <a 
            href="https://line.me/ti/p/chanathip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth p-2"
          >
            <Icon name="MessageSquare" size={24} />
          </a>
        </div>

        <div className="mt-16">
          <Icon 
            name="ChevronDown" 
            size={32} 
            className="text-muted-foreground animate-bounce mx-auto cursor-pointer hover:text-secondary transition-smooth"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;