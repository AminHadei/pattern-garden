import { Document } from './document-interfaces';

/**
 * Resume Document
 * 
 * Represents a resume/CV document with personal information,
 * work experience, education, and skills.
 */
export class Resume implements Document {
  private title: string;
  private content: string;
  private personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  private workExperience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  private education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  private skills: string[];

  constructor(
    title: string = 'Resume',
    content: string = '',
    personalInfo: {
      name: string;
      email: string;
      phone: string;
      address: string;
    } = {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    workExperience: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
    }> = [],
    education: Array<{
      institution: string;
      degree: string;
      year: string;
    }> = [],
    skills: string[] = []
  ) {
    this.title = title;
    this.content = content;
    this.personalInfo = { ...personalInfo };
    this.workExperience = workExperience.map(exp => ({ ...exp }));
    this.education = education.map(edu => ({ ...edu }));
    this.skills = [...skills];
  }

  clone(): Document {
    // Deep clone the resume
    return new Resume(
      this.title,
      this.content,
      { ...this.personalInfo },
      this.workExperience.map(exp => ({ ...exp })),
      this.education.map(edu => ({ ...edu })),
      [...this.skills]
    );
  }

  getType(): string {
    return 'Resume';
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getMetadata(): Record<string, any> {
    return {
      type: this.getType(),
      title: this.title,
      personalInfo: { ...this.personalInfo },
      workExperienceCount: this.workExperience.length,
      educationCount: this.education.length,
      skillsCount: this.skills.length,
      contentLength: this.content.length,
    };
  }

  display(): string {
    let display = `Resume: ${this.title}\n`;
    display += `${'='.repeat(50)}\n`;
    display += `Name: ${this.personalInfo.name}\n`;
    display += `Email: ${this.personalInfo.email}\n`;
    display += `Phone: ${this.personalInfo.phone}\n`;
    display += `Work Experience: ${this.workExperience.length} positions\n`;
    display += `Education: ${this.education.length} entries\n`;
    display += `Skills: ${this.skills.join(', ')}\n`;
    display += `Content: ${this.content.substring(0, 100)}${this.content.length > 100 ? '...' : ''}\n`;
    return display;
  }

  // Resume-specific methods
  getPersonalInfo() {
    return { ...this.personalInfo };
  }

  setPersonalInfo(info: Partial<typeof this.personalInfo>): void {
    this.personalInfo = { ...this.personalInfo, ...info };
  }

  getWorkExperience() {
    return this.workExperience.map(exp => ({ ...exp }));
  }

  addWorkExperience(experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }): void {
    this.workExperience.push({ ...experience });
  }

  getEducation() {
    return this.education.map(edu => ({ ...edu }));
  }

  addEducation(edu: {
    institution: string;
    degree: string;
    year: string;
  }): void {
    this.education.push({ ...edu });
  }

  getSkills(): string[] {
    return [...this.skills];
  }

  addSkill(skill: string): void {
    this.skills.push(skill);
  }
}

