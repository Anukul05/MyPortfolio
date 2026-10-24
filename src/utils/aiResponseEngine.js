import { aiKnowledge } from '../data/aiKnowledge.js'

const includesAny = (message, keywords) => keywords.some((keyword) => message.includes(keyword))

export const getAiResponse = (question) => {
  const message = question.trim().toLowerCase()

  if (
    includesAny(message, [
      'contact',
      'email',
      'phone',
      'number',
      'whatsapp',
      'reach',
      'call',
    ])
  ) {
    const { email, phone, whatsappUrl } = aiKnowledge.contact
    return `You can reach Anukul at ${email}, call ${phone}, or message on WhatsApp: ${whatsappUrl}.`
  }

  if (
    includesAny(message, [
      'available',
      'availability',
      'hire',
      'hiring',
      'job',
      'opportunity',
      'opportunities',
      'role',
      'consult',
    ])
  ) {
    return aiKnowledge.developer.status
  }

  if (
    includesAny(message, [
      'project',
      'built',
      'portfolio',
      'repository',
      'github',
      'microservices gateway',
      'agentic system',
    ])
  ) {
    return aiKnowledge.projects
      .map((project) => `${project.name}: ${project.focus} Repository: ${project.repository}`)
      .join('\n\n')
  }

  if (
    includesAny(message, [
      'ai',
      'agent',
      'gemini',
      'openai',
      'methodology',
      'workflow',
      'spec-driven',
      'spec driven',
    ])
  ) {
    return aiKnowledge.aiMethodology
  }

  if (
    includesAny(message, [
      'tech stack',
      'technology stack',
      'full stack',
      'full-stack',
      'all skills',
      'skill set',
      'core technologies',
    ])
  ) {
    return [
      `Backend: ${aiKnowledge.skills.backend.join(', ')}.`,
      `Frontend: ${aiKnowledge.skills.frontend.join(', ')}.`,
      `AI and tools: ${aiKnowledge.skills.tools.join(', ')}.`,
    ].join('\n\n')
  }

  if (
    includesAny(message, [
      'experience',
      'work',
      'company',
      'career',
      'eibo',
      'achievement',
      'api',
      'response time',
    ])
  ) {
    const { role, company, period, summary, highlights } = aiKnowledge.experience
    return `${role} at ${company} (${period}). ${summary}\n\n${highlights
      .map((highlight) => `• ${highlight}`)
      .join('\n')}`
  }

  if (includesAny(message, ['frontend', 'react', 'angular', 'ui', 'tailwind', 'javascript'])) {
    return `Frontend technologies include ${aiKnowledge.skills.frontend.join(', ')}.`
  }

  if (
    includesAny(message, [
      'java',
      'backend',
      'spring',
      'hibernate',
      'database',
      'mysql',
      'postgres',
    ])
  ) {
    return `Backend experience includes ${aiKnowledge.skills.backend.join(', ')}.`
  }

  return `I don’t have a prepared answer for that question yet. Please use the contact section or email ${aiKnowledge.contact.email} to ask Anukul directly.`
}
