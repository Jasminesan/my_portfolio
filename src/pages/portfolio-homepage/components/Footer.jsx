import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = ({ language, content }) => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/Jasminesan'
    },
    {
      name: 'Email',
      icon: 'Mail',
      url: 'mailto:chanathip.k@example.com'
    },
    {
      name: 'Line',
      icon: 'MessageSquare',
      url: 'https://line.me/ti/p/chanathip_dev'
    }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-semibold">
                {content?.brand}
              </span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {content?.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {content?.quickLinks?.title}
            </h3>
            <ul className="space-y-2">
              {content?.quickLinks?.links?.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link?.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm flex items-center space-x-2"
                    onClick={(e) => {
                      if (link?.href?.startsWith('#')) {
                        e?.preventDefault();
                        const element = document.getElementById(link?.href?.substring(1));
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Icon name={link?.icon} size={16} />
                    <span>{link?.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {content?.contact?.title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Icon name="Mail" size={16} className="text-background/60" />
                <span className="text-background/80">chanathip.k@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Icon name="MessageSquare" size={16} className="text-background/60" />
                <span className="text-background/80">@chanathip_dev</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Icon name="MapPin" size={16} className="text-background/60" />
                <span className="text-background/80">{content?.contact?.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} {content?.copyright}
            </p>
            
            <div className="flex space-x-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target={social?.url?.startsWith('http') ? '_blank' : undefined}
                  rel={social?.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-smooth group"
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-background/60 group-hover:text-background transition-smooth" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;