import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = ({ language, content }) => {
  const getIconForCategory = (category) => {
    const iconMap = {
      'Project Management': 'Users',
      'IoT/Cloud Development': 'Cloud',
      'Hardware Design': 'Cpu',
      'Web/Mobile Development': 'Code',
      'Database Systems': 'Database',
      'การจัดการโครงการ': 'Users',
      'การพัฒนา IoT/Cloud': 'Cloud',
      'การออกแบบฮาร์ดแวร์': 'Cpu',
      'การพัฒนาเว็บ/มือถือ': 'Code',
      'ระบบฐานข้อมูล': 'Database'
    };
    return iconMap?.[category] || 'Code';
  };

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content?.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content?.categories?.map((category, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl shadow-card hover:shadow-interactive transition-smooth group border border-border"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon 
                    name={getIconForCategory(category?.name)} 
                    size={24} 
                    className="text-primary" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category?.name}
                </h3>
              </div>

              <div className="space-y-3">
                {category?.skills?.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill?.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-smooth"
                          style={{ width: `${skill?.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {skill?.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <span className="text-primary font-medium">
              {content?.growthNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;