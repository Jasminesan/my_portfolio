import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = ({ language, content }) => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard?.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      label: content?.email?.label,
      value: 'chanathip.k@example.com',
      href: 'mailto:chanathip.k@example.com',
      copyable: true
    },
    {
      id: 'line',
      icon: 'MessageSquare',
      label: content?.line?.label,
      value: '@chanathip_dev',
      href: 'https://line.me/ti/p/chanathip_dev',
      copyable: true
    },
    {
      id: 'github',
      icon: 'Github',
      label: content?.github?.label,
      value: 'github.com/chanathip',
      href: 'https://github.com/Jasminesan',
      copyable: false
    },
    {
      id: 'portfolio',
      icon: 'Globe',
      label: content?.portfolio?.label,
      value: 'chanathip-portfolio.dev',
      href: 'https://chanathip-portfolio.dev',
      copyable: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content?.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactMethods?.map((method) => (
            <div 
              key={method?.id}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-interactive transition-smooth group border border-border"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Icon 
                      name={method?.icon} 
                      size={24} 
                      className="text-primary" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {method?.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {method?.value}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {method?.copyable && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(method?.value, method?.id)}
                      className="opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <Icon 
                        name={copiedField === method?.id ? "Check" : "Copy"} 
                        size={16} 
                        className={copiedField === method?.id ? "text-success" : "text-muted-foreground"}
                      />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(method?.href, '_blank')}
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-xl shadow-card border border-border">
            <div className="mb-6">
              <Icon name="Download" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {content?.resume?.title}
              </h3>
              <p className="text-muted-foreground">
                {content?.resume?.description}
              </p>
            </div>
            
            <Button 
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/resume/chanathip-kaewpuang-resume.pdf';
                link.download = 'Chanathip_Kaewpuang_Resume.pdf';
                link?.click();
              }}
              iconName="Download"
              iconPosition="left"
              className="px-8 py-4"
            >
              {content?.resume?.button}
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Jasminesan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-interactive transition-smooth group border border-border"
            >
              <Icon name="Github" size={24} className="text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="mailto:chanathip.k@example.com"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-interactive transition-smooth group border border-border"
            >
              <Icon name="Mail" size={24} className="text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a 
              href="https://line.me/ti/p/chanathip_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-interactive transition-smooth group border border-border"
            >
              <Icon name="MessageSquare" size={24} className="text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;