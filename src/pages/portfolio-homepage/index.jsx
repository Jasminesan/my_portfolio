import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';

const PortfolioHomepage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const content = {
    en: {
      meta: {
        title: "Chanathip Kaewpuang - Computer Engineering Portfolio",
        description: "Portfolio showcasing Computer Engineering expertise in IoT, Cloud Development, and Project Management by Chanathip Kaewpuang"
      },
      hero: {
        name: "Chanathip Kaewpuang",
        title: "Computer Engineering Graduate",
        subtitle: "Passionate about IoT development, cloud technologies, and creating innovative solutions that bridge hardware and software engineering.",
        contactButton: "Let\'s Connect",
        resumeButton: "Download Resume"
      },
      about: {
        title: "About Me",
        description: `Computer Engineering student with a GPA of 3.57 and hands-on project experience in IoT, Cloud Computing, and Mobile Applications. Skilled in both software and hardware development, including React Native, Node.js, Python, C++, and ESP32 hardware. Strong people management skill and teamwork experience through leading multiple IoT and application development projects.`,
        education: {
          title: "Education",
          degree: "B.Eng. Computer Engineering",
          university: "Technology University"
        },
        gpa: {
          title: "GPAX",
          value: "3.57",
          scale: "out of 4.00"
        },
        highlights: ["IoT Specialist", "Cloud Developer", "Project Manager", "Hardware Designer"],
        imageAlt: "Professional Profile"
      },
      skills: {
        title: "Technical Skills",
        subtitle: "Comprehensive expertise across multiple domains of computer engineering and software development.",
        growthNote: "Continuously expanding skillset",
        categories: [
          {
            name: "Project Management",
            skills: [
              { name: "Agile/Scrum", level: 85 },
              { name: "Team Leadership", level: 80 },
              { name: "Resource Planning", level: 75 },
              { name: "Risk Management", level: 70 }
            ]
          },
          {
            name: "IoT/Cloud Development",
            skills: [
              { name: "AWS/Azure", level: 80 },
              { name: "IoT Protocols", level: 85 },
              { name: "Edge Computing", level: 75 },
              { name: "Data Analytics", level: 70 }
            ]
          },
          {
            name: "Hardware Design",
            skills: [
              { name: "Arduino/ESP32", level: 90 },
              { name: "PCB Design", level: 75 },
              { name: "Sensor Integration", level: 85 },
              { name: "Embedded Systems", level: 80 }
            ]
          },
          {
            name: "Web/Mobile Development",
            skills: [
              { name: "React/Node.js", level: 85 },
              { name: "Python/JavaScript", level: 90 },
              { name: "Mobile Apps", level: 70 },
              { name: "API Development", level: 80 }
            ]
          },
          {
            name: "Database Systems",
            skills: [
              { name: "MySQL/PostgreSQL", level: 80 },
              { name: "MongoDB", level: 75 },
              { name: "Firebase", level: 85 },
              { name: "Data Modeling", level: 75 }
            ]
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        subtitle: "A showcase of innovative solutions combining hardware, software, and cloud technologies.",
        viewAllButton: "View All Projects",
        projects: [
          {
            id: "smart-plug",
            title: "Smart Plug IoT System",
            description: "An intelligent power management system with remote control capabilities, energy monitoring, and automated scheduling features.",
            technologies: ["Arduino", "ESP32", "React", "Firebase", "IoT"],
            year: "2024",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/smart-plug",
            liveUrl: "https://smart-plug-demo.com"
          },
          {
            id: "style-service",
            title: "Style Service Website",
            description: "A comprehensive web platform for fashion styling services with booking system, portfolio showcase, and client management.",
            technologies: ["React", "Node.js", "MySQL", "HTML/CSS"],
            year: "2023",
            status: "Simulation",
            githubUrl: "https://github.com/chanathip/style-service",
            liveUrl: "https://style-service.com"
          },
          {
            id: "water-detection",
            title: "Smart Water Detection",
            description: "IoT-based water leak detection system with real-time alerts, mobile notifications, and automated valve control.",
            technologies: ["ESP32", "Sensors", "Python", "Cloud"],
            year: "2024",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/water-detection"
          },
          {
            id: "iot-temperature",
            title: "Cloud IoT Temperature System",
            description: "Distributed temperature monitoring system with cloud analytics, predictive maintenance, and dashboard visualization.",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2023",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://temp-monitor.com"
          },
          {
            id: "MIPS Processor Design",
            title: "MIPS Processor Design",
            description: "Distributed temperature monitoring system with cloud analytics, predictive maintenance, and dashboard visualization.",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2023",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://temp-monitor.com"
          },
          {
            id: "Football League Database Project",
            title: "Football League",
            description: "Distributed temperature monitoring system with cloud analytics, predictive maintenance, and dashboard visualization.",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2023",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://temp-monitor.com"
          },
          {
            id: "Predicting Accidents During Festivals",
            title: "Predicting Accidents",
            description: "Distributed temperature monitoring system with cloud analytics, predictive maintenance, and dashboard visualization.",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2023",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://temp-monitor.com"
          },
          {
            id: "smart-classroom",
            title: "Smart Classroom",
            description: "Intelligent classroom management system with automated attendance, environmental control, and interactive learning features.",
            technologies: ["Arduino", "React", "Database", "Sensors"],
            year: "2024",
            status: "Prototype",
            githubUrl: "https://github.com/chanathip/smart-classroom"
          }
        ]
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.",
        email: {
          label: "Email Address"
        },
        line: {
          label: "Line ID"
        },
        github: {
          label: "GitHub Profile"
        },
        portfolio: {
          label: "Portfolio Website"
        },
        resume: {
          title: "Download Resume",
          description: "Get a detailed overview of my experience, skills, and achievements.",
          button: "Download PDF"
        }
      },
      footer: {
        brand: "Chanathip Kaewpuang",
        description: "Computer Engineering graduate specializing in IoT development, cloud technologies, and innovative engineering solutions.",
        quickLinks: {
          title: "Quick Links",
          links: [
            { name: "About", href: "#about", icon: "User" },
            { name: "Skills", href: "#skills", icon: "Code" },
            { name: "Projects", href: "#projects", icon: "FolderOpen" },
            { name: "Contact", href: "#contact", icon: "Mail" }
          ]
        },
        contact: {
          title: "Contact Info",
          location: "Bangkok, Thailand"
        },
        copyright: "Chanathip Kaewpuang. All rights reserved."
      }
    },
    th: {
      meta: {
        title: "ชนาธิป แก้วพวง - พอร์ตโฟลิโอวิศวกรรมคอมพิวเตอร์",
        description: "พอร์ตโฟลิโอแสดงความเชี่ยวชาญด้านวิศวกรรมคอมพิวเตอร์ IoT การพัฒนาคลาวด์ และการจัดการโครงการโดย ชนาธิป แก้วพวง"
      },
      hero: {
        name: "ชนาธิป แก้วพวง",
        title: "วิศวกรรมคอมพิวเตอร์",
        subtitle: "พื้นฐานทางด้าน IoT และ เทคโนโลยีคลาวด์ ",
        contactButton: "ติดต่อเรา",
        resumeButton: "ดาวน์โหลดเรซูเม่"
      },
      about: {
        title: "เกี่ยวกับฉัน",
        description: `ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ เกรดเฉลี่ย 3.57 มีประสบการณ์ทำโปรเจกต์จริงด้าน IoT, Cloud Computing,      การออกแบบฐานข้อมูล และแอปพลิเคชันมือถือ มีทักษะทั้งด้านซอฟต์แวร์และฮาร์ดแวร์ รวมถึง React Native, Node.js, Python, C++ และ ESP32 มีประสบการณ์จัดการบริหารคนและทำงานเป็นทีมโดยการเป็นผู้นำโปรเจกต์ IoT และแอปพลิเคชันหลายโครงการ`,
        education: {
          title: "การศึกษา",
          degree: "วศ.บ. วิศวกรรมคอมพิวเตอร์",
          university: "มหาวิทยาลัยศรีปทุม"
        },
        gpa: {
          title: "เกรดเฉลี่ย",
          value: "3.57",
          scale: "จาก 4.00"
        },
        highlights: ["ผู้เชี่ยวชาญ IoT", "นักพัฒนาคลาวด์", "ผู้จัดการโครงการ", "นักออกแบบฮาร์ดแวร์"],
        imageAlt: "โปรไฟล์มืออาชีพ"
      },
      skills: {
        title: "ทักษะทางเทคนิค",
        subtitle: "ความเชี่ยวชาญที่ครอบคลุมในหลายสาขาของวิศวกรรมคอมพิวเตอร์และการพัฒนาซอฟต์แวร์",
        growthNote: "ขยายทักษะอย่างต่อเนื่อง",
        categories: [
          {
            name: "การจัดการโครงการ",
            skills: [
              { name: "Agile/Scrum", level: 85 },
              { name: "การนำทีม", level: 80 },
              { name: "การวางแผนทรัพยากร", level: 75 },
              { name: "การจัดการความเสี่ยง", level: 70 }
            ]
          },
          {
            name: "การพัฒนา IoT/Cloud",
            skills: [
              { name: "AWS/Azure", level: 80 },
              { name: "โปรโตคอล IoT", level: 85 },
              { name: "Edge Computing", level: 75 },
              { name: "การวิเคราะห์ข้อมูล", level: 70 }
            ]
          },
          {
            name: "การออกแบบฮาร์ดแวร์",
            skills: [
              { name: "Arduino/ESP32", level: 90 },
              { name: "การออกแบบ PCB", level: 75 },
              { name: "การรวมเซ็นเซอร์", level: 85 },
              { name: "ระบบฝังตัว", level: 80 }
            ]
          },
          {
            name: "การพัฒนาเว็บ/มือถือ",
            skills: [
              { name: "React/Node.js", level: 85 },
              { name: "Python/JavaScript", level: 90 },
              { name: "แอปมือถือ", level: 70 },
              { name: "การพัฒนา API", level: 80 }
            ]
          },
          {
            name: "ระบบฐานข้อมูล",
            skills: [
              { name: "MySQL/PostgreSQL", level: 80 },
              { name: "MongoDB", level: 75 },
              { name: "Firebase", level: 85 },
              { name: "การสร้างแบบจำลองข้อมูล", level: 75 }
            ]
          }
        ]
      },
      projects: {
        title: "โครงงาน",
        subtitle: "โครงงาน ฮาร์ดแวร์ ซอฟต์แวร์ และเทคโนโลยีคลาวด์",
        viewAllButton: "ดูโครงงานทั้งหมด",
        projects: [
          {
            id: "smart-pug",
            title: "ระบบ Smart Plug IoT",
            description: "ปลั๊กไฟอัจฉริยะที่ควบคุมได้ผ่านสมาร์ทโฟนและคำสั่งเสียง",
            technologies: ["Arduino", "ESP32", "React", "Firebase", "IoT"],
            year: "2567",
            status: "เสร็จสิ้น",
            githubUrl: "https://github.com/chanathip/smart-plug",
            liveUrl: "https://smart-plug-demo.com"
          },
          {     
            id: "style-service",
            title: "เว็บไซต์บริการตัดผมออนไลน์",
            description: "แพลตฟอร์มเว็บสำหรับบริการตัดผมพร้อมระบบจองคิว การแสดงผลงาน และการจัดการลูกค้า",
            technologies: ["React", "Node.js", "MySQL", "HTML/CSS"],
            year: "2566",
            status: "แบบจำลอง",
            githubUrl: "https://github.com/chanathip/style-service",
            liveUrl: "https://style-service.com"
          },
          {
            id: "water-detection",
            title: "ระบบตรวจจับน้ำอัจฉริยะ",
            description: "ระบบตรวจจับการรั่วไหลของน้ำแบบ IoT พร้อมการแจ้งเตือนแบบเรียลไทม์ การแจ้งเตือนทางมือถือ และการควบคุมวาล์วอัตโนมัติ",
            technologies: ["ESP32", "Sensors", "Python", "Cloud"],
            year: "2567",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/water-detection",
            liveUrl: "https://www.canva.com/design/DAF8f2DZguU/93FCR_RKokCZswCc2ByMgA/edit?utm_content=DAF8f2DZguU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          },
          {
            id: "iot-temperature",
            title: "ระบบอุณหภูมิ Cloud IoT",
            description: "ระบบตรวจสอบอุณหภูมิและการแสดงผลแดชบอร์ดบนคลาวด์",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2566",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://www.canva.com/design/DAGXsJTFqhs/9r2RYg5DbXZQa4EdqdPM6Q/edit?utm_content=DAGXsJTFqhs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          },
          {
            id: "MIPS Processor Design",
            title: "MIPS Processor Design",
            description: "ระบบตรวจสอบอุณหภูมิและการแสดงผลแดชบอร์ดบนคลาวด์",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2566",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://www.canva.com/design/DAGXsJTFqhs/9r2RYg5DbXZQa4EdqdPM6Q/edit?utm_content=DAGXsJTFqhs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          },
          {
            id: "Football League Database Project",
            title: "Football League",
            description: "ระบบตรวจสอบอุณหภูมิและการแสดงผลแดชบอร์ดบนคลาวด์",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2566",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://www.canva.com/design/DAGXsJTFqhs/9r2RYg5DbXZQa4EdqdPM6Q/edit?utm_content=DAGXsJTFqhs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          },
          {
            id: "Predicting Accidents During Festivals",
            title: "Predicting Accidents",
            description: "ระบบตรวจสอบอุณหภูมิและการแสดงผลแดชบอร์ดบนคลาวด์",
            technologies: ["IoT", "Cloud", "Python", "JavaScript"],
            year: "2566",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/iot-temperature",
            liveUrl: "https://www.canva.com/design/DAGXsJTFqhs/9r2RYg5DbXZQa4EdqdPM6Q/edit?utm_content=DAGXsJTFqhs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          },
          {
            id: "smart-classroom",
            title: "ห้องเรียนอัจฉริยะ",
            description: "ระบบจัดการห้องเรียนอัจฉริยะพร้อมการตรวจนับจำนวนคนอัตโนมัติด้วยกล้อง และวัดค่าเฉลี่ยการเคลื่อนไหวของมนุษย์ด้วยกล้องเพื่อและสามารถนำข้อมูลไปวิเคราะห์ต่อได้",
            technologies: ["Arduino", "React", "Database", "Sensors"],
            year: "2567",
            status: "ต้นแบบ",
            githubUrl: "https://github.com/chanathip/smart-classroom",
            liveUrl: "https://www.canva.com/design/DAGip7p1R-E/_Zq07T34ee8t6PR40oHXxQ/edit?utm_content=DAGip7p1R-E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          }
        ]
      },
      contact: {
        title: "ติดต่อเรา",
        subtitle: "พร้อมที่จะร่วมงานในโครงการถัดไปของคุณหรือไม่? มาคุยกันว่าเราจะทำงานร่วมกันเพื่อทำให้ไอเดียของคุณเป็นจริงได้อย่างไร",
        email: {
          label: "ที่อยู่อีเมล"
        },
        line: {
          label: "ไลน์ไอดี"
        },
        github: {
          label: "โปรไฟล์ GitHub"
        },
        portfolio: {
          label: "เว็บไซต์พอร์ตโฟลิโอ"
        },
        resume: {
          title: "ดาวน์โหลดเรซูเม่",
          description: "รับภาพรวมโดยละเอียดของประสบการณ์ ทักษะ และความสำเร็จของฉัน",
          button: "ดาวน์โหลด PDF"
        }
      },
      footer: {
        brand: "ชนาธิป แก้วพวง",
        description: "นักศึกษาวิศวกรรมคอมพิวเตอร์ พื้นฐานด้านการพัฒนา IoT เทคโนโลยีคลาวด์",
        quickLinks: {
          title: "ลิงก์ด่วน",
          links: [
            { name: "เกี่ยวกับ", href: "#about", icon: "User" },
            { name: "ทักษะ", href: "#skills", icon: "Code" },
            { name: "โครงการ", href: "#projects", icon: "FolderOpen" },
            { name: "ติดต่อ", href: "#contact", icon: "Mail" }
          ]
        },
        contact: {
          title: "ข้อมูลติดต่อ",
          location: "กรุงเทพมหานคร ประเทศไทย"
        },
        copyright: "ชนาธิป แก้วพวง สงวนลิขสิทธิ์"
      }
    }
  };

  const currentContent = content?.[language];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections?.forEach((section) => observer?.observe(section));

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{currentContent?.meta?.title}</title>
        <meta name="description" content={currentContent?.meta?.description} />
        <meta property="og:title" content={currentContent?.meta?.title} />
        <meta property="og:description" content={currentContent?.meta?.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent?.meta?.title} />
        <meta name="twitter:description" content={currentContent?.meta?.description} />
        <link rel="canonical" href="https://chanathip-portfolio.dev" />
      </Helmet>
      <Header />
      <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <HeroSection language={language} content={currentContent?.hero} />
        <AboutSection language={language} content={currentContent?.about} />
        <SkillsSection language={language} content={currentContent?.skills} />
        <ProjectsSection language={language} content={currentContent?.projects} />
        <ContactSection language={language} content={currentContent?.contact} />
      </main>
      <Footer language={language} content={currentContent?.footer} />
    </div>
  );
};

export default PortfolioHomepage;