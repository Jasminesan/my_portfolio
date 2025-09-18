import React from 'react';
import Icon from '../../../components/AppIcon';

const AboutSection = ({ language, content }) => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content?.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content?.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-background p-6 rounded-lg shadow-card border border-border">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{content?.education?.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{content?.education?.degree}</p>
                <p className="text-sm text-muted-foreground">{content?.education?.university}</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-card border border-border">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Award" size={24} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{content?.gpa?.title}</h3>
                </div>
                <p className="text-2xl font-bold text-primary">{content?.gpa?.value}</p>
                <p className="text-sm text-muted-foreground">{content?.gpa?.scale}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {content?.highlights?.map((highlight, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
    <div className="text-center">
      <img 
        src="https://drive.google.com/uc?export=view&id=14iXuhmsl98DeEH8Q9kEthTgvkgONUH95" 
        alt={content?.imageAlt || "Profile image"}
        className="w-[400px] h-[500px] mx-auto mb-4 rounded-lg object-cover"
      />
      <p className="text-muted-foreground text-sm">
        {content?.imageAlt}
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;