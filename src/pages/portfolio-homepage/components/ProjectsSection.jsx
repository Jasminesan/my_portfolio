import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectsSection = ({ language, content }) => {
  const [showAll, setShowAll] = useState(false);
  
  const getProjectImage = (projectId) => {
    const imageMap = {
      'smart-plug': '/assets/images/05.png',
      'style-service': '/assets/images/03.png', 
      'water-detection': '/assets/images/04.png',
      'MIPS Processor Design': '/assets/images/07.png',
      'iot-temperature': '/assets/images/10.png',
      'Football League Database Project' : '/assets/images/08.png',
      'Predicting Accidents During Festivals' : '/assets/images/09.png',
      'smart-classroom': '/assets/images/02.png'
    };
    
    return imageMap?.[projectId] || '/assets/images/default.jpg';
  };
  
  const getTechIcon = (tech) => {
    const iconMap = {
      'React': 'Code',
      'Node.js': 'Server',
      'Arduino': 'Cpu',
      'IoT': 'Wifi',
      'Cloud': 'Cloud',
      'Python': 'Code',
      'JavaScript': 'Code',
      'Xillinx': 'Code',
      'HTML/CSS': 'Layout',
      'MySQL': 'Database',
      'Firebase': 'Database',
      'ESP32': 'Cpu',
      'Sensors': 'Activity'
    };
    return iconMap?.[tech] || 'Code';
  };

  // จำกัดโปรเจคที่แสดงผล
  const displayedProjects = showAll ? content?.projects : content?.projects?.slice(0, 6);
  const hasMoreProjects = content?.projects?.length > 6;

  return (
    <section id="projects" className="py-20 bg-background">
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
          {displayedProjects?.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-interactive transition-smooth group overflow-hidden border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={getProjectImage(project?.id)}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project?.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project?.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.technologies?.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center space-x-1 px-3 py-1 bg-muted rounded-full text-xs"
                    >
                      <Icon name={getTechIcon(tech)} size={12} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{project?.year}</span>
                  </div>
                  <div className="flex space-x-2">
                    {project?.githubUrl && (
                      <a 
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        <Icon name="Github" size={16} />
                      </a>
                    )}
                    {project?.liveUrl && (
                      <a 
                        href={project?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-smooth"
                      >
                        <Icon name="ExternalLink" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          {/* ปุ่มแสดง/ซ่อนโปรเจค */}
          {hasMoreProjects && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-smooth mr-4"
            >
              <Icon name={showAll ? "ChevronUp" : "ChevronDown"} size={20} />
              <span>
                {showAll 
                  ? (language === 'th' ? 'แสดงน้อยลง' : 'Show Less') 
                  : (language === 'th' ? 'แสดงเพิ่มเติม' : 'Show More')
                }
              </span>
            </button>
          )}
          
          {/* ปุ่ม GitHub */}
          <a 
            href="https://github.com/chanathip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
          >
            <Icon name="Github" size={20} />
            <span>{content?.viewAllButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;