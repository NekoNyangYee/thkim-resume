import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { awards, education, experience, profile, projects, research, skills } from './data/portfolio'
import type { Award, Project } from './data/portfolio'
import './App.css'

function ResumeSection({ id, title, children }: {
  id: string; title: string; children: ReactNode
}) {
  return (
    <section id={id} className="resume-section" aria-labelledby={id + '-title'}>
      <header className="section-header"><h2 id={id + '-title'}>{title}</h2></header>
      <div className="section-content">{children}</div>
    </section>
  )
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}<span className="external-arrow" aria-hidden="true">↗</span></a>
}

function ContactIcon({ kind }: { kind: 'email' | 'github' | 'blog' }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-3.8a3.3 3.3 0 0 0-.9-2.5c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.8 1.4a13 13 0 0 0-6 0C6.4 1.1 5.2 1.5 5.2 1.5a4.9 4.9 0 0 0-.1 3.7A5.3 5.3 0 0 0 3.7 9c0 5.3 3.2 6.5 6.2 6.8a3.3 3.3 0 0 0-.9 2.4V22" /></>,
    blog: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a17 17 0 0 1 0 18 17 17 0 0 1 0-18Z" /></>,
  }
  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[kind]}</svg>
}

function ImageFrame({ src, alt, portrait = false }: { src?: string; alt: string; portrait?: boolean }) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const hasImage = Boolean(src && src !== failedSource)
  const frameClass = portrait ? 'profile-photo' : 'project-cover'

  return (
    <div className={frameClass + (hasImage ? '' : ' image-placeholder')}>
      {hasImage ? <img src={src} alt={alt} width={portrait ? 900 : 1600} height={portrait ? 1200 : 900} loading={portrait ? 'eager' : 'lazy'} decoding="async" onError={() => setFailedSource(src || null)} /> : <>
        {portrait
          ? <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="11" r="5" /><path d="M6 28v-3a10 10 0 0 1 20 0v3" /></svg>
          : <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="5" width="24" height="22" rx="3" /><circle cx="11.5" cy="12" r="2" /><path d="m5 23 7-7 5 5 4-4 6 6" /></svg>}
        <span>{src ? '이미지를 불러올 수 없습니다' : portrait ? '프로필 사진' : '프로젝트 대표 이미지'}</span>
      </>}
    </div>
  )
}

function TechnologyList({ items }: { items: string[] }) {
  return <div className="technology-line" aria-label="사용 기술">{items.map(item => <span key={item}>{item}</span>)}</div>
}

function PrintButton() {
  return <button className="print-button" type="button" onClick={() => window.print()}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7V2.5h10V7M5 14H3V7h14v7h-2M5 11.5h10v6H5z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" /><path d="M14 9h1" stroke="currentColor" strokeWidth="1.25" /></svg>인쇄 · PDF 저장</button>
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="resume-entry project-entry">
      <a className="project-card-link" href={'/projects/' + project.slug} aria-label={project.name + ' 상세 보기'}>
        <ImageFrame src={project.image} alt={project.imageAlt || project.name + ' 대표 화면'} />
        <div className="project-content">
          <p className="entry-period">{project.period}</p>
          <div className="entry-main"><h3>{project.name}</h3>{project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}<p className="entry-context">{project.context}</p><p className="entry-description">{project.summary || project.description}</p></div>
          <TechnologyList items={project.technologies} />
          <span className="project-more">자세히 보기 <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  )
}

function AwardCard({ award }: { award: Award }) {
  const cover = award.evidence?.[0]

  return (
    <article className="resume-entry award-entry">
      <div className="entry-aside award-header"><span className="award-label">{award.title}</span><span className="entry-period">{award.date}</span></div>
      <div className="award-body">
        <div className="award-content">
        <h3>{award.event}</h3>
        <p className="award-participants"><span className="participants-label">참석자</span>{award.participants.map((participant, index) => <span key={participant.name}>{index > 0 ? ', ' : ''}{participant.name === profile.name ? <strong>{participant.name}</strong> : participant.name}{participant.role ? '(' + participant.role + ')' : ''}</span>)}</p>
        {award.evidence && <div className="entry-links">{award.evidence.map(file => <a key={file.url} href={file.url} download aria-label={award.event + ' ' + file.label + ' 다운로드'}>{file.label} 다운로드 <span aria-hidden="true">↓</span></a>)}</div>}
        </div>
        {cover && <a className="award-preview" href={cover.url + (cover.page ? '#page=' + cover.page : '')} target="_blank" rel="noopener noreferrer" aria-label={award.event + ' 상장 원본 보기'}>
          <img src={cover.preview} alt={award.event + ' ' + award.title + ' 상장'} width="1000" height="1414" loading="lazy" decoding="async" />
        </a>}
      </div>
    </article>
  )
}

function PortfolioPage() {
  const sortedAwards = [...awards].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <div className="resume-page" id="top">
        <main id="main">
          <section className="introduction" aria-labelledby="name">
            <div className="introduction-grid">
              <div className="introduction-copy">
                <h1 id="name">{profile.name}</h1>
                <p className="intro-line">{profile.introduction}</p>
                <div className="profile-links" aria-label="연락처와 외부 링크">
                  {profile.email ? <a href={'mailto:' + profile.email}><ContactIcon kind="email" /><span className="contact-text">{profile.email}</span></a> : <span className="unfilled-contact">이메일 입력 예정</span>}
                  {profile.github ? <ExternalLink href={profile.github}><ContactIcon kind="github" />GitHub</ExternalLink> : <span className="unfilled-contact">GitHub 연결 예정</span>}
                  {profile.blog ? <ExternalLink href={profile.blog}><ContactIcon kind="blog" />블로그</ExternalLink> : null}
                </div>
              </div>
              <ImageFrame portrait src={profile.photo} alt={profile.photoAlt || profile.name + ' 프로필 사진'} />
            </div>
          </section>

          <ResumeSection id="about" title="소개">
            <div className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          </ResumeSection>

          <ResumeSection id="projects" title="프로젝트">
            {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
          </ResumeSection>

          <ResumeSection id="research" title="논문·학회">
            {research.map(item => <article className="resume-entry research-entry" key={item.title}>
              <div className="entry-aside"><span className="entry-period">{item.date}</span></div>
              <div className="entry-main">
                <h3>{item.title}</h3>
                <p className="entry-context">{item.venue}</p>
                <p className="research-authors" aria-label="저자 순서">{item.authors.map((author, index) => <span key={author}>{index > 0 ? ', ' : ''}{index + 1 === item.authorPosition ? <strong>{author}</strong> : author}</span>)}</p>
                <div className="entry-links">
                  <ExternalLink href={item.link.url}>{item.link.label}</ExternalLink>
                  {item.attachments?.map(file => <ExternalLink key={file.url} href={file.url}>{file.label}</ExternalLink>)}
                </div>
              </div>
            </article>)}
          </ResumeSection>

          <ResumeSection id="awards" title="수상">
            <div className="award-grid">{sortedAwards.map(award => <AwardCard key={award.date + award.event} award={award} />)}</div>
          </ResumeSection>

          <ResumeSection id="skills" title="기술">
            <div className="skill-list">{skills.map(skill => <div className="skill-row" key={skill.category}><h3>{skill.category}</h3><ul className="skill-items">{skill.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </ResumeSection>

          <ResumeSection id="education" title="학력·경력">
            <div className="background-grid">
              <article className="resume-entry compact-entry"><div className="entry-aside"><span className="background-type">학력</span><span className="entry-period">{education.period}</span></div><div className="entry-main"><h3>{education.school}</h3><p className="entry-description">{education.major}</p></div></article>
              <article className="resume-entry compact-entry"><div className="entry-aside"><span className="background-type">경력</span><span className="entry-period">{experience.period}</span></div><div className="entry-main"><h3>{experience.company}</h3><p className="entry-description">{experience.role}</p></div></article>
            </div>
          </ResumeSection>
        </main>

        <footer className="page-footer"><p>끝까지 읽어주셔서 감사합니다.</p><PrintButton /></footer>
      </div>
    </>
  )
}

function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <div className="project-page">
        <header className="detail-navigation"><a className="back-link" href="/#projects"><span aria-hidden="true">←</span> 프로젝트 목록</a><PrintButton /></header>
        <main id="main">
          <header className="project-heading"><p className="entry-period">{project.period}</p><h1>{project.name}</h1>{project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}<p className="entry-context">{project.context}</p><p className="detail-description">{project.description}</p></header>
          <div className="detail-image"><ImageFrame src={project.image} alt={project.imageAlt || project.name + ' 대표 화면'} /></div>
          <dl className={'project-overview' + (project.technologyGroups ? ' project-overview-compact' : '')}>
            <div><dt>진행 기간</dt><dd>{project.period}</dd></div>
            <div><dt>참여 형태와 역할</dt><dd>{project.context}{project.roleDescription && <p className="project-role-description">{project.roleDescription}</p>}</dd></div>
            {!project.technologyGroups && <div><dt>사용 기술</dt><dd><TechnologyList items={project.technologies} /></dd></div>}
          </dl>
          {project.background && <section className="detail-section project-background"><h2>개발 배경</h2><p>{project.background.problem}</p><p>{project.background.approach}</p></section>}
          {project.contributionsHeading ? <section className="detail-section"><h2>{project.contributionsHeading}</h2><div className="project-work-grid">{project.contributions.map(contribution => <section className="project-work-card" key={contribution.title}><h3>{contribution.title}</h3><p>{contribution.description}</p></section>)}</div></section> : <div className="project-story">{project.contributions.map(contribution => <section className="detail-section" key={contribution.title}><h2>{contribution.title}</h2><p>{contribution.description}</p></section>)}</div>}
          {project.technologyGroups && <section className="detail-section"><h2>사용 기술</h2><dl className="project-technology-groups">{project.technologyGroups.map(group => <div key={group.category}><dt>{group.category}</dt><dd><TechnologyList items={group.items} /></dd></div>)}</dl></section>}
          {project.features && <section className="detail-section"><h2>팀에서 완성한 서비스</h2>{project.features.map(feature => <section className="project-subsection" key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></section>)}</section>}
          {project.screenshots && <section className="detail-section" id="screenshots" aria-labelledby="screenshots-title">
            <h2 id="screenshots-title">화면 미리보기</h2>
            <div className="project-screenshots">{project.screenshots.map(screenshot => <figure className="project-screenshot" key={screenshot.src}>
              <a className="screenshot-link" href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={screenshot.title + ' 원본 보기'}><img src={screenshot.src} alt={screenshot.title} width="1400" height="900" loading="lazy" decoding="async" /></a>
              <figcaption><h3>{screenshot.title}</h3><p>{screenshot.caption}</p></figcaption>
            </figure>)}</div>
          </section>}
          {project.links.length > 0 && <section className="detail-section detail-links"><h2>관련 링크</h2><div className="entry-links">{project.links.map(link => <ExternalLink key={link.url} href={link.url}>{link.label}</ExternalLink>)}</div></section>}
        </main>
        <footer className="page-footer"><a className="back-link" href="/#projects">← 프로젝트 목록으로 돌아가기</a></footer>
      </div>
    </>
  )
}

function NotFoundPage() {
  return <main id="main" className="not-found"><h1>페이지를 찾을 수 없습니다.</h1><p>주소를 확인하거나 포트폴리오로 돌아가 주세요.</p><a className="back-link" href="/">← 포트폴리오로 돌아가기</a></main>
}

// 문서 링크로 이동하므로 새 탭 열기·뒤로 가기·새로고침도 브라우저 기본 동작을 따릅니다.
function App({ pathname = window.location.pathname }: { pathname?: string }) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const project = projects.find(item => normalizedPath === '/projects/' + item.slug)
  const isHome = normalizedPath === '/'

  useEffect(() => {
    document.title = project ? project.name + ' · 프로젝트' : isHome ? profile.name + ' · 포트폴리오' : '페이지를 찾을 수 없습니다'
  }, [project, isHome])

  if (project) return <ProjectPage project={project} />
  return isHome ? <PortfolioPage /> : <NotFoundPage />
}

export default App

